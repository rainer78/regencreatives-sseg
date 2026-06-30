# Solar System OpenData API Audit — 2026-06-30

Source reviewed: [Solar System OpenData API documentation](https://api.le-systeme-solaire.net/en/).

## Current App Data Findings

- The current scene stores celestial-body render values and education copy together in `components/solar-system-3d.tsx`. `PlanetInfo` and `MoonInfo` mix scene-only values such as `radius`, `color`, `distance`, and `orbitSpeed` with UI-facing `info` text.
- `planetData` hard-codes the Sun, planets, selected dwarf planets, and an Oort Cloud entry. The `radius` and `distance` values are stylized scene scale values, not physical measurements.
- `moonData` is a hand-curated subset of moons. It includes Earth’s Moon, Phobos, Deimos, Io, Europa, Ganymede, Callisto, Titan, Enceladus, Titania, Oberon, Triton, and Charon.
- The facts/info panel currently displays only the selected object name and a single `info` string. It does not have structured fact rows, comparison data, source notes, or reviewed-at metadata.
- The Solar System Tour has its own `tourSteps` array with names, camera positions, and separate educational text. Several tour facts duplicate or diverge from facts in `planetData` and `moonData`.
- Oort Cloud object types also include hard-coded facts in the scene component, separate from `planetData`, `moonData`, and the tour copy.
- Existing documentation/test copy references broader claims such as “83 moons,” while the currently visible `moonData` array contains a smaller curated set. This is a content consistency risk and should be reconciled before expanding facts.
- Current app data is therefore split across at least four concerns: scene rendering values, click-panel copy, tour copy, and onboarding/documentation copy. The main maintainability issue is that UI content and scene-rendering data are mixed together too early.

## API Capability Summary

The Solar System OpenData API is useful for reducing manual content/data work, but only if used first as an offline or admin-time source for reviewed local educational data.

Relevant documented capabilities:

- `/bodies` returns solar-system bodies and supports selecting data fields, excluding fields, ordering, pagination, and filters.
- `/bodies/{id}` returns one body by API id, which is useful for manually reviewing selected planets, moons, dwarf planets, and asteroids before adding them to local fixtures.
- `/knowncount` returns known counts by object type, including planets, moons, asteroids, and comets.
- `/knowncount/{id}` returns the known count for one object category.
- `/positions` calculates sky positions for the Sun, Moon, and planets for an observer location and date/time. It should be treated as future-only for this product unless a clear location/date sky-view feature is added.

Clear recommendation: **use the API, but do not fetch it from the live browser app.** The first useful application is a local normalized body-data file that powers future fact panels, educational cards, source notes, moon/satellite listings, and body comparisons without changing the Three.js scene.

## Authentication and Token Risk

- API identification is mandatory according to the documentation.
- Tokens are free, but API calls require an `Authorization: Bearer <token>` header.
- A bearer token must not be committed to the repo, embedded in client-side code, exposed through `NEXT_PUBLIC_*` variables, or sent directly from browser code.
- If a future fetch workflow is added, it should run at build time, admin time, or in a server-only script/route with secret handling. For the current app, a manually reviewed checked-in fixture is safer and simpler.
- Direct client-side fetching is not recommended because it would either expose the token or require a proxy that creates unnecessary runtime dependency and availability risk.

## Useful API Fields

### Safe for educational UI

These fields can enrich facts panels and educational cards after formatting, validation, and editorial review:

- `id`: stable API identifier for local joins and source metadata.
- `englishName`: preferred user-facing display name.
- `isPlanet`: simple planet flag for filtering and labeling.
- `moons`: useful for curated moon/satellite lists.
- `aroundPlanet`: parent-body relationship for moons.
- `discoveredBy`: discoverer text for history cards.
- `discoveryDate`: discovery date text for history cards.
- `bodyType`: useful labels such as Star, Planet, Dwarf Planet, Asteroid, Comet, or Moon.
- `avgTemp`: useful as an educational fact after unit labeling and “average” caveats.
- `axialTilt`: useful for cards explaining seasons, unusual rotation, or comparison facts.
- `sideralOrbit`: useful for orbital-period facts.
- `sideralRotation`: useful for day-length/rotation facts.

### Useful for future comparison features

These fields should be normalized into numeric comparison metrics, then rendered with clear units:

- `mass`: compare body mass; requires formatting because the API models it as value/exponent.
- `density`: compare average density.
- `gravity`: compare surface gravity.
- `escape`: compare escape velocity.
- `meanRadius`: compare size.
- `semimajorAxis`: compare average orbital distance.
- `perihelion`: compare closest orbital distance.
- `aphelion`: compare farthest orbital distance.
- `eccentricity`: compare orbital shape.
- `inclination`: compare orbital tilt.
- `sideralOrbit`: compare year/orbit length.
- `sideralRotation`: compare day/rotation length.
- `axialTilt`: compare tilt.
- `avgTemp`: compare average temperature after unit normalization.

### Useful for future sky-position features

`/positions` is useful only for a future feature that asks where solar-system objects appear in the sky for a user-entered observer location and date/time. It should not affect the current 3D model.

Useful `/positions` inputs:

- `lon`
- `lat`
- `elev`
- `datetime`
- `zone`

Useful `/positions` outputs:

- `name`
- `ra`
- `dec`
- `az`
- `alt`

### Not safe to use for scene rendering yet

These fields are valuable scientifically but should not replace scene scale, object positions, orbit animation, or tour camera positions:

- `semimajorAxis`
- `perihelion`
- `aphelion`
- `eccentricity`
- `inclination`
- `meanRadius`
- `mass`
- `density`
- `gravity`
- `escape`
- `sideralOrbit`
- `sideralRotation`
- `axialTilt`
- `avgTemp`
- `moons`
- `/positions` outputs such as `ra`, `dec`, `az`, and `alt`

## Fields That Map to Current UI

| Existing app concept | Current source | API-backed local-data opportunity |
| --- | --- | --- |
| Object display name | `name` in scene arrays and tour steps | Use `englishName` for display and keep `id`/`apiId` for stable source joins. |
| Object classification | Implicit in selected arrays and names | Use `bodyType` and `isPlanet` for consistent labels. |
| Click-panel fact text | Single authored `info` string | Keep authored `summary`, then add structured fact rows from reviewed API values. |
| Moon parent | `moonData` object key | Use `aroundPlanet` to standardize parent relationships. |
| Planet moon list | Curated `moonData` entries only | Use `moons` for source-backed listings, but keep UI selection curated. |
| Orbital period facts | Tour copy for Mercury and some objects | Use `sideralOrbit` with unit formatting. |
| Rotation/tilt facts | Tour copy for Uranus/Haumea | Use `sideralRotation` and `axialTilt` with editorial descriptions. |
| Temperature facts | Tour copy for Venus | Use `avgTemp`, with careful temperature conversion and caveats. |
| Size facts | Scene `radius`, which is not physical | Use `meanRadius` in fact cards only; do not map to scene radius. |
| History facts | Mostly absent | Use `discoveredBy` and `discoveryDate`. |
| Source credibility | Absent | Add source note fields to local data and future panels. |

## Fields for Future Features

- Body comparison cards: `meanRadius`, `mass`, `density`, `gravity`, `escape`, `semimajorAxis`, `perihelion`, `aphelion`, `eccentricity`, `inclination`, `sideralOrbit`, `sideralRotation`, `axialTilt`, and `avgTemp`.
- Moon and satellite listings: `moons`, `aroundPlanet`, `id`, `englishName`, and `bodyType`.
- “What you are looking at” cards: `id`, `englishName`, `bodyType`, `isPlanet`, curated `summary`, curated `whyItMatters`, selected fact rows, and source metadata.
- Future location/date sky-position features: `/positions` inputs (`lon`, `lat`, `elev`, `datetime`, `zone`) and outputs (`ra`, `dec`, `az`, `alt`). This should be a separate feature, not part of the current solar-system scene model.
- Content refresh workflow: `/bodies/{id}` can be used to refresh selected local body fixtures, while `/knowncount/{id}` can refresh source-backed counts and update dates for high-level stats.

## Fields That Should Not Drive Scene Rendering Yet

Do not use API data to alter the current scene until a dedicated scale/rendering design exists.

- Real size and mass fields (`meanRadius`, `mass`, `density`, `gravity`, `escape`) should not drive mesh sizes, materials, lighting, or physics.
- Real orbital fields (`semimajorAxis`, `perihelion`, `aphelion`, `eccentricity`, `inclination`) should not drive orbit ring radii, object positions, or orbit behavior.
- Time fields (`sideralOrbit`, `sideralRotation`) should not drive animation speeds yet.
- Relationship fields (`moons`, `aroundPlanet`) should not automatically add or remove rendered moons.
- `/positions` sky coordinates (`ra`, `dec`, `az`, `alt`) should not drive object placement in the current stylized scene.
- API data should not modify object loading, camera controls, tour sequencing, VR/WebXR implementation, asteroid belt generation, or Oort Cloud generation.

## Runtime API Risks

- Token handling: direct browser calls would expose the mandatory bearer token unless a server proxy is introduced.
- API availability: a live dependency could break facts panels during API downtime or network failures.
- Response shape changes: field names, nullability, nested objects, or endpoint behavior may change.
- Field mapping mismatches: API units and meanings may not match the app’s simplified scene values.
- Scientific/educational accuracy expectations: source-backed numbers need unit labels, rounding rules, caveats, and editorial context.
- CORS/browser issues: authenticated browser requests may fail or force insecure token exposure patterns.
- Rendering-data contamination: mixing real astronomy data into the scene too early could accidentally change scale, animation, positions, tour behavior, or performance.
- Content overreach: API data is structured reference data, not finished classroom copy. The app still needs authored summaries and age-appropriate explanations.

## Recommended Integration Strategy

Use a staged, local-first strategy.

1. Keep the current Three.js scene data unchanged.
2. Create a local normalized educational data file from manually reviewed API responses.
3. Do not import that file into the live app in the first task.
4. Add source metadata and reviewed dates to make future fact panels credible.
5. If a fetch workflow is later needed, make it a build-time or admin-time script that reads the bearer token from server-only environment variables.
6. Do not add direct browser fetching because the token must not be exposed and the live app should not depend on third-party API availability.
7. Use API values for UI facts, educational cards, body comparisons, moon listings, and source notes before considering any scene-rendering use.
8. Treat `/positions` as a separate future feature for observer-based sky-position cards, not as input to the current 3D scene.

## Proposed Local Data Shape

```ts
type CelestialBodySource = {
  provider: "Solar System OpenData" | "Editorial"
  documentationUrl?: string
  endpoint?: string
  retrievedAt?: string
  reviewedAt: string
  notes?: string
}

type CelestialFactRow = {
  label: string
  value: string
  unit?: string
  source: CelestialBodySource
}

type CelestialComparisonMetrics = {
  meanRadiusKm?: number
  massKg?: number
  densityGcm3?: number
  gravityMs2?: number
  escapeSpeedMs?: number
  semimajorAxisKm?: number
  perihelionKm?: number
  aphelionKm?: number
  eccentricity?: number
  inclinationDeg?: number
  sideralOrbitDays?: number
  sideralRotationHours?: number
  axialTiltDeg?: number
  averageTemperatureK?: number
}

type NormalizedCelestialBody = {
  id: string
  apiId?: string
  displayName: string
  apiEnglishName?: string
  bodyType: "Star" | "Planet" | "Dwarf Planet" | "Moon" | "Asteroid" | "Comet" | "Region" | "Other"
  isPlanet?: boolean
  parentId?: string
  childIds?: string[]
  apiMoonIds?: string[]
  summary: string
  whyItMatters?: string
  factRows: CelestialFactRow[]
  comparisonMetrics?: CelestialComparisonMetrics
  sourceNote: string
  renderHints?: {
    currentSceneObjectName?: string
    doNotUseForScale: true
    doNotUseForPosition: true
    doNotUseForAnimation: true
  }
}
```

Important separation:

- `factRows` and `summary` can power future facts panels and “what you are looking at” cards.
- `comparisonMetrics` can power future body comparison cards.
- `childIds` and `apiMoonIds` can support curated moon/satellite listings.
- `renderHints` may link educational data to an existing scene object, but explicitly prevents the data from controlling scene scale, position, animation, orbit behavior, camera controls, tour sequencing, or WebXR.

## First Safe Implementation Task

Recommended follow-up task:

> Add a checked-in local normalized celestial-body data fixture for 3–5 bodies already shown in the app, sourced from manually reviewed Solar System OpenData `/bodies/{id}` responses, without importing it into the live app.

Suggested pilot bodies:

- Earth
- Moon
- Mars
- Jupiter
- Ceres

Task boundaries:

- Add only a local data file and optional mapping documentation.
- Include source metadata, reviewed dates, and unit-normalized fact rows.
- Do not wire the data file into any React component, route, or Three.js code.
- Do not add dependencies.
- Do not add runtime fetching.
- Do not include any API token in the repo.

## Do Not Touch List

For this audit and the proposed first safe follow-up, do not change:

- Runtime behavior.
- `components/solar-system-3d.tsx` scene setup or object creation.
- Planet positions, moon positions, scene-scale radii, orbital distances, or object counts.
- Object loading, asteroid belt generation, Oort Cloud generation, lighting, or materials.
- OrbitControls, camera controls, camera defaults, animation behavior, or orbit behavior.
- Solar System Tour sequence, tour camera positions, or tour timing.
- VR/WebXR implementation.
- Existing live app data wiring.
- Dependencies or package-manager files.
- Client-side environment variables or token-handling code.
- Browser runtime network behavior. The live app must not fetch the Solar System OpenData API directly.
