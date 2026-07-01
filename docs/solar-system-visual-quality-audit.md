# Solar System Visual Quality Audit

Date reviewed: 2026-06-30

## Visual Quality Summary

The `/solar-system` experience currently favors clarity of interaction over visual realism. The scene renders planets, dwarf planets, moons, Saturn's ring, orbit paths, stars, an asteroid belt, and a large Oort Cloud with procedural Three.js primitives and flat colors. There are no planet textures, normal maps, bump maps, GLB/GLTF celestial models, HDR environments, sprite-based glows, or local celestial body assets in use.

The safest upgrade path is incremental: first improve material and lighting choices on existing meshes, then add narrowly scoped glow/atmosphere treatments, and only later replace selected textures with reviewed, local, licensed image assets. The current asteroid belt and especially the Oort Cloud already create significant mesh/material pressure, so any planet-quality work should avoid increasing object counts or adding heavy model assets until the existing rendering load is reduced.

## Current Rendering Approach

### Scene ownership

- Route markup and overlay UI live in `app/solar-system/page.tsx`.
- The Three.js scene is created imperatively in `components/solar-system-3d.tsx`.
- Three.js and OrbitControls are loaded from CDNs at runtime rather than bundled from local dependencies.
- The scene component also owns hard-coded render data, object creation, animation, click picking, tour camera positions, and DOM updates.

### Object creation methods

| Object group              | Current method                                                                     | Visual implication                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Sun                       | `SphereGeometry` with `MeshBasicMaterial` flat yellow color                        | Reads as a large yellow planet more than a luminous star.                           |
| Planets and dwarf planets | `SphereGeometry(32, 16)` with one flat `MeshBasicMaterial` color per body          | Recognizable only by color, size, distance, and labels/facts; no surface detail.    |
| Moons                     | `SphereGeometry(16, 16)` with one flat `MeshBasicMaterial` color per moon          | Mostly generic tiny spheres; no craters, ice, volcanism, or parent-specific detail. |
| Saturn ring               | `RingGeometry` with translucent `MeshBasicMaterial`                                | Useful silhouette, but single-color, flat, and not banded.                          |
| Orbit paths               | Thin `RingGeometry` meshes with translucent blue `MeshBasicMaterial`               | Clear navigational aid; not physically realistic.                                   |
| Star field                | One `BufferGeometry` rendered as `Points` with `PointsMaterial`                    | Lightweight and acceptable as a backdrop, but uniform white points.                 |
| Asteroid belt             | 1,000 individual low-poly sphere meshes sharing one material                       | Dense enough to communicate belt, but generic and draw-call heavy.                  |
| Oort Cloud                | About 15,200 individual sphere meshes across six object categories and four layers | Visually ambitious, but the biggest rendering and memory concern.                   |

## Current Asset Inventory

### Celestial textures and models

No current local textures or model assets are used for planets, moons, the Sun, asteroids, the Oort Cloud, rings, atmospheres, or stars. No `.glb`, `.gltf`, `.hdr`, `.webp`, celestial `.jpg`, or celestial `.png` assets were found in the inspected public asset tree.

### Existing public assets

The public folder contains general site/image assets only:

| Path                              | Format | Approximate size | Celestial use | Notes                                                               |
| --------------------------------- | ------ | ---------------: | ------------- | ------------------------------------------------------------------- |
| `public/Lorraine-Dukes-no-bg.png` | PNG    |  1,665,341 bytes | None          | Large personal/brand image, not relevant to `/solar-system` bodies. |
| `public/Lorraine_Dukes.png`       | PNG    |    900,077 bytes | None          | Large personal/brand image, not relevant to `/solar-system` bodies. |
| `public/placeholder-logo.png`     | PNG    |        568 bytes | None          | Placeholder asset.                                                  |
| `public/placeholder-logo.svg`     | SVG    |      3,208 bytes | None          | Placeholder asset.                                                  |
| `public/placeholder-user.jpg`     | JPG    |      1,635 bytes | None          | Placeholder asset.                                                  |
| `public/placeholder.jpg`          | JPG    |      1,064 bytes | None          | Placeholder asset.                                                  |
| `public/placeholder.svg`          | SVG    |      3,253 bytes | None          | Placeholder asset.                                                  |
| `public/rain-sig.png`             | PNG    |      8,480 bytes | None          | Signature/branding asset.                                           |
| `public/rain-sig1.png`            | PNG    |      8,175 bytes | None          | Signature/branding asset.                                           |

### External/runtime assets

- Three.js is loaded from `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`.
- OrbitControls is loaded from `https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js`.
- No external image/model/API assets are fetched for celestial rendering.

### Missing licensing/source information

Because there are currently no celestial textures or models, there is also no existing source or license metadata for future planet imagery. Any future texture work should add a small source/attribution record before or alongside assets.

## Planet and Moon Findings

### Major planets and dwarf planets

- **Sun:** Large and bright yellow, but flat. It lacks emissive material, bloom-like glow, corona, or light-source distinction. It can read as a yellow planet rather than an active star.
- **Mercury:** Flat gray and small. Recognizable only through position/scale and click/tour labels; no cratered look.
- **Venus:** Warm orange and readable as distinct, but lacks cloud opacity, atmosphere, or sulfurous haze.
- **Earth:** Blue sphere only. It lacks oceans/land/clouds and is not visually recognizable as Earth without context.
- **Mars:** Red-orange sphere and reasonably identifiable by color, but lacks polar caps, darker regions, or rocky surface cues.
- **Jupiter:** Tan sphere and larger radius make it identifiable as a gas giant, but missing bands and storm features; surface looks especially flat.
- **Saturn:** Ring makes Saturn the most recognizable object. The planet and ring are still flat, single-color treatments.
- **Uranus:** Blue/cyan color reads as an ice giant, but it lacks tilt-specific visual treatment beyond the broader scene behavior and has no rings/haze.
- **Neptune:** Darker blue and readable as an outer ice giant, but visually similar to Uranus and lacks storms/atmospheric variation.
- **Pluto, Ceres, Eris, Haumea, Makemake:** Tiny flat spheres. They are hard to distinguish visually without labels/facts and mostly act as click targets.
- **Oort Cloud representative planetData entry:** The `planetData` includes an Oort Cloud body marker, but the visible cloud itself is built separately from many objects.

### Moons

Moons are visually meaningful as orbiting companions, but not as individual celestial bodies. They are small flat spheres with body-specific colors, which means:

- The Moon, Phobos, Deimos, Io, Europa, Ganymede, Callisto, Titan, Enceladus, Titania, Oberon, Triton, and Charon are not visually distinct enough.
- Volcanic, icy, cratered, atmospheric, or irregular moon identities are represented in text only.
- Tiny radii make material or texture upgrades less visible unless camera/tour framing also supports closer viewing; because camera/tour behavior is out of scope, moon upgrades should be conservative.

## Lighting and Material Findings

- The scene adds ambient and point lights, but planets and moons use `MeshBasicMaterial`, which ignores lighting. As a result, lighting does not create day/night sides, terminators, specular response, surface relief, or meaningful depth.
- The Sun also uses `MeshBasicMaterial` rather than emissive material or a dedicated glow treatment.
- Rings and orbit paths use transparent `MeshBasicMaterial`. They are safe and simple, but visually flat.
- Asteroids and Oort Cloud objects use low-poly sphere geometry with basic materials. Oort Cloud materials are created inside the object loop, increasing material count.
- No current material uses texture maps, normal maps, bump maps, roughness, metalness, emissive maps, alpha maps, sprites, or shader materials.

Visual improvement can come from materials before asset replacement:

1. Switch only non-Sun planets/moons to lighting-aware materials such as `MeshLambertMaterial`, `MeshPhongMaterial`, or `MeshStandardMaterial` while preserving existing colors and geometry.
2. Give the Sun an emissive-looking material and optional additive transparent glow shell, without making it drive new scene behavior.
3. Tune renderer color management/tone mapping only after checking compatibility with the currently CDN-loaded Three.js r128 API.
4. Keep orbit lines and labels/UI readable; stronger lighting should not make small bodies impossible to see.

## Performance Risks

- The scene is already object-heavy: 1,000 asteroid meshes plus about 15,200 Oort Cloud meshes before counting planets, moons, rings, orbit paths, and stars.
- The Oort Cloud creates a new `MeshBasicMaterial` for every Oort object, which can increase memory and shader/material management overhead.
- Higher-resolution planet textures would add GPU memory pressure. This is especially risky on mobile browsers because the current scene already has high draw-call/object pressure.
- GLB/GLTF planet or moon models would likely add unnecessary loading and memory complexity for little benefit compared with well-sized sphere textures.
- Adding many atmosphere meshes, ring particles, comet trails, or sprite glows could compound transparency sorting and overdraw issues.
- Browser-first usage should favor local, compressed, modest-resolution textures and a small number of added meshes per featured object.

Texture risk guidance:

| Texture type                                                  | Safe now?     | Notes                                                                                  |
| ------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------- |
| Single 512px-1K color/diffuse texture for one featured planet | Usually safe  | Best first texture replacement candidate if licensed and local.                        |
| 1K diffuse textures for all planets                           | Moderate      | Acceptable only after bundle/GPU review; lazy loading would be preferable.             |
| 2K-4K textures for all bodies                                 | Risky         | Too much memory for current object-heavy scene.                                        |
| Normal/bump/specular maps for all planets                     | Risky         | Multiplies texture count; defer until rendering load is reduced.                       |
| GLB/GLTF planet models                                        | Avoid for now | Spheres are appropriate; models add complexity without solving current quality issues. |

## Best Visual Upgrade Opportunities

### A. Very safe visual copy/CSS/UI polish around the scene

- Improve intro text and controls copy to explain that the current scene is stylized, browser-based, and uses selected moons/dwarf planets.
- Improve facts-panel hierarchy, selected-object headings, and visual contrast without touching Three.js logic.
- Add non-rendered attribution/source placeholders in documentation before adding future assets.

### B. Low-risk material and lighting improvements

- Convert planets/moons from `MeshBasicMaterial` to a lighting-aware material while preserving existing colors, mesh positions, geometry, orbit speeds, camera behavior, and object counts.
- Position or tune the existing point light so it behaves more like sunlight, but avoid changing motion or scale.
- Keep some ambient fill so small outer planets and moons remain clickable and visible.
- Add a safe emissive look to the Sun using material settings rather than replacing scene structure.

### C. Texture replacement opportunities

- Start with one clearly weak, high-impact object: Earth, Jupiter, Mars, or the Sun.
- Prefer a single local diffuse texture at 1K or lower for the first test.
- Avoid replacing every body in one PR.
- Avoid normal/bump/specular maps until basic diffuse texture performance is verified.

### D. Ring/atmosphere/glow improvements

- Saturn is the best ring candidate because it already has a ring mesh. A future low-risk task could use a simple alpha/gradient ring texture or multiple subtle ring bands, but only after source/licensing review.
- The Sun is the best glow candidate because a subtle additive shell or sprite-like glow would immediately distinguish it from planets.
- Earth/Venus atmosphere shells could help visual quality, but each adds transparent geometry and should be tested one object at a time.

### E. Moon visual improvements

- Use material/color variation before textures: slightly different roughness/shading for icy, rocky, volcanic, and haze-covered moons.
- If textures are added later, start with the Moon or Io because their identity is familiar and visual payoff is high.
- Do not add large numbers of moon textures in the first pass; many moons are too small to benefit at default camera distances.

### F. Larger 3D asset upgrades to avoid for now

- Full GLB/GLTF replacements for planets or moons.
- Realistic asteroid models for every asteroid.
- Particle-heavy rings, comet tails, or volumetric Oort Cloud effects.
- HDR environment maps or postprocessing pipelines until the base scene is refactored and performance-tested.
- Any changes that alter object positions, scale, orbit behavior, tour sequence, camera movement, VR/WebXR behavior, or loading behavior.

## Asset Sourcing Recommendations

Future texture upgrades should follow these requirements:

- **Licensing:** Use public domain or permissively licensed textures only. NASA/public domain imagery can be appropriate later, but verify each source page because not all NASA-adjacent or third-party processed maps have identical terms.
- **Attribution:** Add an attribution/source record with source URL, license/public-domain status, author/processor if applicable, date accessed, and any processing notes.
- **Local vs CDN:** Prefer checked-in local assets for stable educational rendering and offline-friendly builds. Avoid hotlinking image textures from external CDNs.
- **File size limits:** Keep the first texture under roughly 500 KB if practical. Avoid adding multiple megabytes of textures before measuring performance.
- **Resolution limits:** Start at 512px or 1024px square/equirectangular diffuse maps. Consider 2K only for one hero object after testing. Avoid 4K for now.
- **Formats:** Prefer `.webp` for browser texture payloads when compatible with the loading path; otherwise use optimized `.jpg` for opaque diffuse maps and `.png` only when alpha is needed.
- **Naming conventions:** Use clear lowercase names such as `public/solar-system/textures/earth-diffuse-1024.webp`, `mars-diffuse-1024.webp`, `saturn-ring-alpha-1024.png`, and keep source metadata nearby, e.g. `public/solar-system/textures/ATTRIBUTION.md`.
- **Optimization:** Strip unnecessary metadata, avoid oversized dimensions, and test rendering on a mid-range mobile browser.
- **Review gate:** Add one asset at a time with a before/after screenshot and a bundle/performance note.

## Safest First Visual Upgrade Task

**Recommended first task: improve existing material and lighting treatment for the current planet and moon meshes, with special care for the Sun, without adding assets or changing scene behavior.**

Suggested scope for that future task:

1. Preserve all existing planet/moon data, positions, radii, distances, orbit speeds, camera movement, tour steps, click behavior, and object loading.
2. Change only material choices and safe light tuning.
3. Use lighting-aware materials for non-Sun planets/moons with existing colors.
4. Make the Sun visually distinct via emissive material settings and, if tested safe, one simple non-interactive glow shell.
5. Run a browser smoke test and capture a screenshot because this is a perceptible visual change.

Why this is safest:

- It requires no new dependencies.
- It requires no new assets or licensing work.
- It preserves the current scene structure and educational data.
- It improves depth/readability across all bodies at once.
- It can be reverted easily if mobile performance or object visibility regresses.

## Do Not Touch List

For the next visual pass, do not change:

- Planet, moon, asteroid, Oort Cloud, ring, or orbit positions.
- Planet, moon, asteroid, Oort Cloud, ring, or orbit scale/radius values.
- Orbit speeds, animation timing, pause/reset/orbit-toggle behavior, or object rotations.
- Camera defaults, camera movement, OrbitControls behavior, or tour camera positions.
- Tour sequencing, tour copy, educational facts, or facts-panel content.
- VR/WebXR behavior or the VR button integration.
- Object loading behavior, CDN script loading behavior, or dependency set.
- API fetching, external data loading, API tokens, or runtime asset hotlinking.
- Asteroid/Oort object counts until a dedicated performance refactor is planned.

## Implementation note: first material and lighting upgrade (2026-06-30)

The first visual upgrade keeps the existing procedural scene structure and changes only material and lighting treatment in `components/solar-system-3d.tsx`. Planets and moons now use conservative lighting-aware `MeshStandardMaterial` settings with existing colors, while orbit paths, asteroid belt objects, Oort Cloud objects, and star points remain on lightweight flat materials. The Sun now uses an emissive `MeshStandardMaterial` and remains the central point-light source so it reads more clearly as a star without adding bloom, post-processing, particles, textures, or model assets.

No assets, textures, GLB/GLTF models, dependencies, or API behavior were added or changed. The implementation preserves existing positions, scale values, orbit behavior, camera behavior, animation behavior, tour sequencing, loading behavior, VR/WebXR setup, and celestial object counts.

Manual review should verify that planets remain visible on mobile-sized screens, the Sun is visually distinct without overpowering nearby objects, orbit paths remain readable, Saturn's ring still functions as a simple silhouette cue, and the asteroid belt/Oort Cloud performance profile is not worsened by this targeted pass.

## Implementation note: Jupiter text-only procedural texture pilot (2026-07-01)

Jupiter now uses a lightweight text-only procedural texture generated at runtime with browser canvas primitives and `THREE.CanvasTexture`. The pilot is scoped to the existing Jupiter mesh/material creation path in `components/solar-system-3d.tsx` and adds horizontal gas-giant banding with warm cream, tan, orange, muted brown, and soft red tones, including a subtle Great Red Spot-like oval.

No binary assets, local image textures, runtime external texture URLs, API fetching, dependencies, shaders, post-processing, particles, extra meshes, atmosphere effects, glow shells, normal maps, bump maps, or specular maps were added. Only Jupiter receives this generated texture through the existing `data.name === "Jupiter"` identity check pattern; all other planets, dwarf planets, moons, Saturn's rings, asteroid belt objects, Oort Cloud objects, labels, overlays, facts panels, walkthroughs, and tours continue through their existing paths.

Earth's procedural `CanvasTexture` treatment and the Sun's procedural visual treatment remain unchanged. Jupiter keeps its existing fallback color/material if canvas texture creation fails. The change preserves existing Jupiter position, radius/scale, orbit behavior, rotation behavior, camera/orbit controls, facts-panel behavior, Solar System Tour behavior, Controls Walkthrough behavior, VR/WebXR behavior, object counts, loading behavior, and educational data.

Manual browser QA is required to confirm the banding and oval read clearly on desktop and mobile without harming scene performance or object readability.
