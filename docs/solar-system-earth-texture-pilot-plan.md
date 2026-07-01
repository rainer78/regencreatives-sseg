# Solar System Earth Texture Pilot Plan

Date: 2026-06-30

## Scope

This is a planning-only document for a future `/solar-system` texture pilot. It does not implement a texture, add an asset, change the Three.js scene, change the homepage, add dependencies, or introduce any runtime external texture dependency.

## Current Earth Rendering Findings

- Earth is defined in `planetData` with `name: "Earth"`, `radius: 1`, `color: 0x2233ff`, `distance: 20`, and the existing info string, “Earth is the only planet known to harbor life.”
- Planet meshes are created in a single `planetData.forEach` loop with `new THREE.SphereGeometry(data.radius, 32, 16)` and `new THREE.Mesh(geometry, material)`.
- Earth currently receives the shared non-Sun planet material from `createCelestialMaterial(data.color)` because only index `0` uses `createSunMaterial`.
- Earth’s position is set by `planet.position.x = data.distance`, then Earth is placed inside an orbit container. Future texture work must keep this position/container pattern unchanged.
- Earth’s Moon is added as a child container under the Earth mesh via `planet.add(moonContainer)`. The pilot must not change moon creation, moon orbit behavior, or child object counts.
- Existing material helper pattern is centralized and simple:
  - `createCelestialMaterial(color)` returns a `THREE.MeshStandardMaterial` with conservative roughness and metalness.
  - `createSunMaterial(color)` returns an emissive `THREE.MeshStandardMaterial`.
  - `createMoonMaterial(color)` returns a separate conservative `THREE.MeshStandardMaterial`.
- Current visual-quality documentation states that there are no local celestial textures/models in use and no external image/model/API assets are fetched for celestial rendering.
- The current public folder contains general site and placeholder/brand assets only; there is no existing `public/solar-system/textures` folder yet.
- Existing guidance already recommends local checked-in assets, avoiding external CDN texture hotlinks, conservative file sizes/resolutions, and nearby source metadata.

## Recommended Texture Source Requirements

Reference pages checked while preparing this plan:

- NASA Images and Media Usage Guidelines: `https://www.nasa.gov/nasa-brand-center/images-and-media/`
- NASA Science Blue Marble: Next Generation: `https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/`
- NASA Scientific Visualization Studio equirectangular Earth imagery candidate: `https://svs.gsfc.nasa.gov/3615/`

Use a single Earth diffuse/color texture only, sourced from a public-domain or permissively licensed source after checking the exact source page. NASA is the preferred candidate, but the selected image must be verified before download and commit.

Recommended source criteria:

1. The texture must be an equirectangular/global Earth diffuse map suitable for wrapping onto the existing sphere.
2. The source page must identify the source organization and usage terms.
3. NASA media guidance is compatible with educational/informational use for NASA images and media, including texture maps and 3D model rendition files, but the exact asset page still needs to be checked for third-party credits or special restrictions.
4. Prefer NASA Blue Marble / Blue Marble Next Generation imagery or NASA Scientific Visualization Studio Earth texture material if the source page provides clear credit language.
5. Avoid Wikimedia reuploads as the primary source when a NASA source page is available; use the original NASA page for source and credit notes.
6. Avoid any asset that requires runtime access to a remote tile service, CDN, API, or viewer.
7. Avoid cloud layers, night-lights maps, normal maps, bump maps, specular maps, atmosphere maps, or multi-texture sets in this first pilot.

Recommended source note to verify before implementation:

- Candidate: NASA Blue Marble Next Generation or NASA/Goddard Space Flight Center Scientific Visualization Studio equirectangular Earth imagery.
- Required attribution fields: source title, source URL, source organization, specific credit line from the source page, license/public-domain or NASA usage note, date accessed, downloaded source filename, final optimized local filename, and transformation notes.

## Recommended Asset Path and Naming Convention

Create a dedicated local texture folder only during the approved implementation task:

```text
public/solar-system/textures/earth-diffuse-1024.webp
public/solar-system/textures/ATTRIBUTION.md
```

If `.webp` causes loader/browser compatibility issues in testing, use:

```text
public/solar-system/textures/earth-diffuse-1024.jpg
```

Naming rules:

- Lowercase filenames.
- Include body, map type, and maximum dimension: `earth-diffuse-1024.webp`.
- Use `diffuse`, not `albedo`, to match the project’s simpler terminology.
- Do not add additional Earth maps in this pilot.
- Keep source metadata in `ATTRIBUTION.md` near the texture asset.

## Recommended Material Change

Use the existing helper pattern and add the smallest possible special case for Earth only.

Recommended future implementation shape:

1. Load one local texture with `THREE.TextureLoader` from `/solar-system/textures/earth-diffuse-1024.webp`.
2. Configure conservative texture settings only if needed for correctness, such as color space/encoding compatible with the current Three.js r128 runtime.
3. Add a helper such as `createEarthMaterial(texture)` or extend the existing planet material helper with an optional map.
4. Apply the texture only when `data.name === "Earth"`.
5. Keep `color: 0x2233ff` in `planetData` as a fallback identity color unless there is a documented reason to adjust material tinting.
6. Preserve Earth’s geometry, radius, distance, container, orbit path, Moon child, user data, click behavior, camera/tour behavior, and object identity.

Do not use this pilot to change lighting, camera framing, orbit speeds, animation timing, tour sequencing, labels, facts, VR/WebXR code, loading UX, or object counts.

## Performance Considerations

- Start with a 1024px texture. Consider 2048px only if the source is already optimized, the file remains reasonably small, and the implementation note explains why 1024px is insufficient.
- Prefer one opaque diffuse texture in `.webp` or optimized `.jpg`; avoid `.png` unless there is a specific reason.
- Target a final texture payload below roughly 500 KB if practical.
- Add only one GPU texture and one material-map usage in the pilot.
- Do not add mipmap-heavy custom processing, post-processing, shader code, normal/bump/specular maps, cloud shells, atmosphere shells, or sprites.
- Verify that first render and interaction remain acceptable on a mid-range mobile browser because the scene already has high object pressure from the asteroid belt and Oort Cloud.
- If texture loading introduces visible delay or errors, prefer a graceful material-color fallback over changing global loading behavior in this pilot.

## Attribution and Documentation Requirements

During implementation, add or update documentation with:

- Exact source URL.
- Exact NASA/SVS/Earth Observatory title or asset identifier.
- Source organization and credit line.
- License/public-domain or usage statement summary.
- Date accessed.
- Local file path.
- Processing steps, such as resize, crop, format conversion, metadata stripping, compression setting, and final dimensions/file size.
- Confirmation that the app uses the checked-in local asset and does not hotlink the source at runtime.

Recommended documentation locations:

1. `public/solar-system/textures/ATTRIBUTION.md` for asset-level provenance.
2. `docs/solar-system-visual-quality-audit.md` or a short follow-up implementation note for the visual-quality decision and performance/manual-QA outcome.

## Manual QA Checklist for the Pilot

Before approval to keep the pilot, verify:

- [ ] Earth shows the local texture and remains recognizable as Earth.
- [ ] Earth remains at the same orbit distance and scale as before.
- [ ] Earth’s Moon still appears, orbits, and remains clickable as before.
- [ ] Earth click selection still displays the existing Earth identity/info.
- [ ] Solar System Tour still visits Earth in the same sequence and with the same camera behavior.
- [ ] OrbitControls behavior remains unchanged.
- [ ] VR/WebXR entry behavior is not changed by the texture pilot.
- [ ] No external image/CDN/API request is made for the texture at runtime.
- [ ] The texture loads from the local `public/solar-system/textures` path in browser devtools.
- [ ] The scene remains usable on desktop and a mid-range mobile viewport.
- [ ] No new dependency appears in `package.json` or the lockfile.
- [ ] No other planet, moon, ring, asteroid, Oort Cloud object, star, homepage element, or educational data was changed.
- [ ] Capture before/after screenshots if the implementation is approved, because this is a perceptible visual change.

## Do Not Touch List

For the first Earth texture pilot, do not change:

- Planet positions, distances, radii, scale values, or object identity.
- Orbit path geometry, orbit speed, animation timing, or container hierarchy.
- Earth’s Moon data, mesh creation, orbit behavior, click behavior, or facts.
- Camera movement, camera defaults, tour sequencing, tour copy, or guided-tour timing.
- Object counts for planets, moons, rings, asteroids, stars, or Oort Cloud objects.
- Loading behavior, route structure, homepage content, educational data, facts, or source-data models.
- VR/WebXR behavior or controls setup.
- Three.js CDN/runtime version or dependency list.
- Lighting, shadows, post-processing, shader materials, atmosphere, clouds, night lights, normal maps, bump maps, specular maps, or textures for any other body.
- Runtime external texture URLs, CDN-hosted texture assets, API fetching, or remote tile services.

## Exact First Implementation Task if Approved

Add one locally checked-in, properly attributed NASA Earth diffuse texture pilot for the existing Earth mesh only:

1. Verify a NASA source page for a Blue Marble / equirectangular Earth diffuse map and record the source title, URL, usage terms, credit line, and date accessed.
2. Download and optimize one texture to `public/solar-system/textures/earth-diffuse-1024.webp` or `.jpg`, keeping the maximum dimension at 1024px unless a documented 2048px exception is approved.
3. Add `public/solar-system/textures/ATTRIBUTION.md` with source, license/usage, credit, accessed date, and processing notes.
4. Update `components/solar-system-3d.tsx` to load the local texture and apply it only to the existing Earth mesh through the current material-helper pattern.
5. Preserve all Earth position, scale, orbit, camera, tour, Moon, object-count, loading, VR/WebXR, homepage, dependency, and educational-data behavior.
6. Run the production build and a browser manual QA pass, then document the result with screenshots and a short performance note.

## Implementation Note - 2026-07-01

The originally planned local binary Earth texture pilot for `/solar-system` was blocked by PR/review tooling because binary image assets cannot be represented in the current review environment. The binary `public/solar-system/textures/earth-diffuse-1024.webp` asset and its asset-specific attribution note were removed from the branch.

The current pilot is a text-only procedural Earth texture implementation:

- No binary image asset is included.
- No `.webp`, `.jpg`, `.png`, `.svg`, or other image texture file is required.
- No `public/solar-system/textures` asset is required for the current implementation.
- No `THREE.TextureLoader` call, CDN texture URL, runtime external texture dependency, API fetch, client-side secret, or API token is used.
- Earth receives a generated `THREE.CanvasTexture` only when `data.name === "Earth"` in the existing planet creation loop.
- The generated texture is intentionally lightweight: a small canvas with a blue ocean base, simple green/tan land-like polygons, and a few subtle white cloud-like strokes.
- Earth keeps its existing fallback color (`0x2233ff`) if procedural texture creation fails.
- Only Earth is visually affected by this pilot; non-Earth planets, moons, the Sun, Saturn's ring, asteroid belt, Oort Cloud objects, orbit paths, labels, overlays, facts panels, homepage, tour controls, camera behavior, VR/WebXR behavior, educational data, object counts, positions, scale, orbit behavior, and animation behavior remain unchanged by this implementation.
- This is a temporary visual pilot and not a final NASA/Blue Marble texture implementation. A reviewed local NASA texture can be reconsidered only if the PR/review workflow supports binary assets or an approved non-binary asset strategy.
- Manual browser QA is still required to visually confirm the procedural Earth texture and verify unchanged interaction behavior.
