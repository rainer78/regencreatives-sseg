# Solar System Sun Procedural Visual Pilot

## Scope

The `/solar-system` Sun now uses a text-only procedural visual treatment generated at runtime with browser canvas primitives and `THREE.CanvasTexture`. The pilot is scoped to the existing Sun material helper in `components/solar-system-3d.tsx`.

## Implementation Notes

- The Sun remains the first body in the existing local `planetData` array with the same stylized radius, color, central scene role, and educational copy.
- The existing central point light remains at `(0, 0, 0)` with its previous color, intensity, distance, and decay settings.
- `createSunMaterial` still returns a single `THREE.MeshStandardMaterial`, but it now attempts to add a generated canvas texture and matching emissive map.
- The texture uses warm solar colors, a radial gradient, horizontal mottled bands, and deterministic soft spots to make the Sun read more clearly as a star.
- If the canvas or texture creation path fails, the material falls back to the previous solid emissive Sun color.

## Constraints Preserved

- No binary assets were added.
- No image textures or external runtime texture URLs were added for the Sun.
- No external API fetching, tokens, or dependencies were added.
- No shaders, post-processing, particles, glow shells, extra meshes, lens flare, or atmosphere effects were added.
- Only the Sun material helper was changed; Earth keeps its existing procedural texture implementation.
- Planets, moons, Saturn's rings, asteroid belt, Oort Cloud objects, orbit paths, labels, overlays, facts panels, walkthroughs, tour controls, VR/WebXR behavior, object counts, positions, scale, camera behavior, orbit behavior, animation behavior, and loading behavior were not intentionally changed.

## QA Status

Automated build validation is required after implementation. Manual browser QA is still required to confirm the Sun is visually distinct without overpowering nearby objects or affecting interactions.
