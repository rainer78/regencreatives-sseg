# Solar System Educational Data Mapping Audit — 2026-06-30

## Mapping Audit Summary

This audit compares the current live `/solar-system` educational content with the local normalized fixture in `data/solar-system-educational-data.ts`. No runtime code is changed by this audit, and the fixture remains unused by the live application.

The app currently has three main content buckets:

1. **Click-to-facts content**: one-line `info` strings embedded in `planetData`, `moonData`, and Oort Cloud object type definitions inside `components/solar-system-3d.tsx`.
2. **Solar System Tour content**: an imperative `tourSteps` array inside `components/solar-system-3d.tsx` that mixes body names, camera positions, and educational narration.
3. **Controls Walkthrough content**: interface guidance in `data/controls-walkthrough-steps.ts`, plus launcher/page copy in React components and route markup.

The new fixture is well-shaped for future educational panels, cards, comparisons, moon summaries, source notes, and reviewed refresh workflows. Its strongest immediate fit is broad, stable body-level copy for the seeded Sun, Earth, Mars, and Jupiter entries. Measurement-heavy claims and Oort Cloud details should remain out of production educational UI until source review.

## Current Content Sources

| Source | Current role | Educational content present | Migration readiness |
| --- | --- | --- | --- |
| `components/solar-system-3d.tsx` `planetData` | Drives scene object creation and click info | Planet/dwarf planet/region names and one-line `info` strings | Copy can be harvested later, but rendering values must stay separate. |
| `components/solar-system-3d.tsx` `moonData` | Drives moon rendering and click info | Curated moon names and one-line `info` strings | Moon summaries can inform future entries after source review. |
| `components/solar-system-3d.tsx` Oort Cloud object types | Drives Oort Cloud rendering and click info | Detailed object-type facts, counts, composition claims, origin claims | Needs source review before migration. |
| `components/solar-system-3d.tsx` `tourSteps` | Drives guided camera tour and tour panel copy | Tour narration for planets, moons, dwarf planets, and Oort Cloud | Educational sentences can map later; positions and order must remain tour-specific. |
| `data/controls-walkthrough-steps.ts` | Drives Controls Walkthrough | Interface guidance and a few broad capability statements | Should remain separate from educational fixture. |
| `app/solar-system/page.tsx` | Provides route UI, controls, info/tour panels | Instructional text for clicking objects, facts, controls, and guided path | Interface copy should remain outside the fixture. |
| `app/page.tsx` | Homepage | Product/marketing and high-level educational promise copy | Out of scope; should not be moved as part of `/solar-system` data migration. |
| `data/solar-system-educational-data.ts` | Future local educational model | Seeded reviewed structure for Sun, Earth, Mars, Jupiter | Correct destination for future normalized educational content, but intentionally not imported by live app. |

## Rendering Data vs Educational Data

### A. Rendering data

Rendering data currently includes stylized values and scene-control inputs that should not be treated as scientific measurements:

- Sphere `radius` values in `planetData` and `moonData`.
- `color` values used by `MeshBasicMaterial`.
- `distance` values that place planets and moons in the stylized scene.
- `orbitSpeed` values for moon animation.
- Ring geometry values for Saturn and orbit lines.
- Asteroid belt inner/outer radii, random positions, random scale, material color, and count.
- Oort Cloud object geometry, color, shell radii, opacity layers, count, clustering, and random placement.
- Tour camera `position` arrays.

These values should remain in scene or rendering-specific data. They should not map to `physicalCharacteristics.radius`, `orbitalCharacteristics.averageDistanceFromSun`, or other scientific fields in the educational fixture.

### B. Educational data

Educational data currently appears as `info` strings in scene arrays and tour steps. Broad copy such as “Earth is the only planet known to harbor life,” “Mars is known as the Red Planet,” and “Jupiter is the largest planet in our Solar System” maps cleanly to `shortDescription`, `overview`, or `keyFacts`.

### C. Tour sequencing data

Tour-only data includes step order, visited body names, camera positions, current-step state, previous/next/end controls, and DOM updates for the tour panel. Even if body narration later references fixture copy, the tour sequence and camera positions should remain tour-specific.

### D. Interface walkthrough data

The Controls Walkthrough is primarily user guidance: how to open controls, adjust speed, pause animation, reset camera, toggle orbit lines, start the body tour, try VR, read the info panel, and navigate. It should remain separate from the celestial-body educational fixture.

## Facts Panel Mapping Findings

The facts panel currently displays only a selected object name and a single text description. Those descriptions are sourced from:

- `planetData.info` for planets, dwarf planets, the Sun, and the Oort Cloud.
- `moonData[*].info` for selected moons.
- Oort Cloud object type `info` strings for generated Oort Cloud objects.

Findings:

- The click facts are hard-coded inside the scene component rather than in a separate content module.
- The data is inconsistent in depth: most planets have one short sentence, while Oort Cloud object types have multi-sentence detailed explanations.
- Rendering fields and educational text are mixed in the same objects.
- Facts duplicate the new fixture for Sun, Earth, Mars, and Jupiter at a broad level.
- Many claims are unstructured and cannot populate measurement fields without external review.

Future mapping:

| Current field | Future fixture field | Notes |
| --- | --- | --- |
| `name` | `name`, `slug`, `id` | Names can seed identifiers, but slugs should be normalized and stable. |
| `info` short sentence | `shortDescription`, `overview`, `keyFacts` | Best for broad copy, not measurements. |
| Parent key in `moonData` | `orbitalCharacteristics.parentBodyId`, `moons.notableMoons` | Parent relationships can be normalized later. |
| Moon list per planet | `moons.notableMoons` or separate body entries | Should distinguish curated visible moons from total known moon counts. |
| Oort Cloud object type names | Future `Region`/`Other` related entries or key facts | Needs source review and probably editorial rewrite. |
| `radius`, `distance`, `color`, `orbitSpeed` | No educational mapping | Rendering-only in current app. |

## Solar System Tour Mapping Findings

The Solar System Tour content lives in `components/solar-system-3d.tsx` as `tourSteps`. Each step has:

- `name`: visited object label.
- `position`: camera target position for the guided experience.
- `info`: educational narration shown in the tour UI.

Educational copy that could eventually reference the fixture:

- Body identity and broad descriptions.
- Short “known for” facts.
- Moon descriptions and notable features.
- Dwarf planet and Oort Cloud region summaries.

Tour-specific content that should remain outside the fixture:

- Step order.
- `position` camera coordinates.
- Tour progress state.
- Start/next/previous/end behavior.
- DOM mutation of `tour-title`, `tour-description`, and `tour-progress`.
- Any wording that directly guides the sequence, such as welcome/transition framing.

Several tour facts are more measurement-like or claim-heavy than the basic click panel copy. Examples that require source review include Mercury’s 88 Earth-day orbit, Venus surface temperature of 900°F, Io’s 400 active volcanoes, Neptune winds up to 1,200 mph, and Oort Cloud counts/types.

## Controls Walkthrough Findings

The Controls Walkthrough copy is interface guidance, not normalized celestial-body educational content. It explains controls, object interaction, the info panel, the separate body tour, and VR availability.

Findings:

- It should remain separate from `solar-system-educational-data.ts`.
- It currently references broad scene capabilities such as planets, major moons, dwarf planets, asteroid belt, and Oort Cloud; those are product walkthrough statements, not body facts.
- It mentions “detailed facts and descriptions,” while the live info panel currently shows a single description string. That phrasing may be an overstatement and should be softened in a future copy-only task.
- It does not appear to contain body-specific facts that should be migrated into the educational fixture.

## Sample Body Mapping: Sun

### Current facts available in the app

- Click panel: “The Sun is the star at the center of our Solar System.”
- Tour: “Welcome to our Solar System! Let's start with the Sun, our nearest star.”
- Rendering: radius `5`, color `0xffdd00`, centered at scene origin, no orbit container.

### Maps cleanly to the fixture

- `id`: `sun`.
- `slug`: `sun`.
- `name`: `Sun`.
- `bodyType`: `Star`.
- `isPlanet`: `false`.
- `shortDescription`: current click panel sentence.
- `overview`: broad role of the Sun in the Solar System.
- `keyFacts`: classification and central role.
- `orbitalCharacteristics.parentBodyId`: `null`.
- `moons.notableMoons`: empty list.

### Missing from the fixture

- Source-backed physical measurements: radius, mass, density, gravity, temperature, rotation period.
- More precise source notes for “nearest star” and energy output.

### Should remain outside the fixture

- Scene radius, color, material, position, and camera tour coordinates.
- Tour welcome framing if it remains specific to guided-tour pacing.

## Sample Body Mapping: Earth

### Current facts available in the app

- Click panel: “Earth is the only planet known to harbor life.”
- Moon click panel: Moon is Earth’s only natural satellite and the fifth largest moon in the Solar System.
- Tour: Earth is the home planet and only known planet with life; Moon affects tides and stabilizes rotation.
- Rendering: radius `1`, color `0x2233ff`, distance `20`; Moon radius `0.27`, color `0xaaaaaa`, distance `2`, orbit speed `0.03`.

### Maps cleanly to the fixture

- `id`: `earth`.
- `slug`: `earth`.
- `name`: `Earth`.
- `bodyType`: `Planet`.
- `isPlanet`: `true`.
- `shortDescription`: home planet / known life statement.
- `keyFacts`: known for life; current visible natural satellite.
- `orbitalCharacteristics.parentBodyId`: `sun`.
- `moons.count`: current curated scene count of one visible natural satellite.
- `moons.notableMoons`: `Moon`.

### Missing from the fixture

- Source-backed measurements for physical and orbital characteristics.
- Separate normalized Moon entry.
- Atmosphere, oceans, habitability, and life-supporting conditions.
- Source-reviewed wording for “only planet known to harbor life” versus “only known planet with life in the universe.”

### Should remain outside the fixture

- Stylized Earth/Moon radius, color, distance, and orbit speed.
- Tour camera coordinates and step order.
- Controls text explaining how to click Earth or view facts.

## Sample Body Mapping: Mars

### Current facts available in the app

- Click panel: “Mars is known as the Red Planet.”
- Moon click panels: Phobos is larger/closer and heavily cratered; Deimos is smaller/outer with a smooth surface.
- Tour: Mars is the Red Planet with the largest volcano and canyon in the solar system.
- Rendering: radius `0.8`, color `0xdd5500`, distance `25`; Phobos and Deimos have stylized radii, colors, distances, and orbit speeds.

### Maps cleanly to the fixture

- `id`: `mars`.
- `slug`: `mars`.
- `name`: `Mars`.
- `bodyType`: `Planet`.
- `isPlanet`: `true`.
- `shortDescription`: Red Planet.
- `keyFacts`: nickname and curated moons.
- `orbitalCharacteristics.parentBodyId`: `sun`.
- `moons.notableMoons`: `Phobos`, `Deimos`.

### Missing from the fixture

- Source-backed physical and orbital measurements.
- Separate normalized Phobos and Deimos entries.
- Source-backed explanation of Olympus Mons and Valles Marineris if the tour claim is retained.
- Discovery/history details for moons, if included later.

### Should remain outside the fixture

- Stylized scene values and moon animation speeds.
- Tour step coordinates and sequencing.

## Sample Body Mapping: Jupiter

### Current facts available in the app

- Click panel: “Jupiter is the largest planet in our Solar System.”
- Moon click panels: Io is volcanically active; Europa may have a subsurface ocean; Ganymede is larger than Mercury; Callisto is heavily cratered.
- Tour: Jupiter has mass greater than all other planets combined; Io has over 400 active volcanoes; Europa may harbor life beneath icy crust; Ganymede is bigger than Mercury; Callisto is heavily cratered.
- Rendering: radius `2`, color `0xd9ad7c`, distance `35`; four Galilean moons with stylized radii, colors, distances, and orbit speeds.

### Maps cleanly to the fixture

- `id`: `jupiter`.
- `slug`: `jupiter`.
- `name`: `Jupiter`.
- `bodyType`: `Planet`.
- `isPlanet`: `true`.
- `shortDescription`: largest planet.
- `keyFacts`: largest planet and curated visible moons.
- `orbitalCharacteristics.parentBodyId`: `sun`.
- `moons.notableMoons`: `Io`, `Europa`, `Ganymede`, `Callisto`.

### Missing from the fixture

- Source-backed mass, radius, density, gravity, temperature, rotation, orbit, and average distance values.
- Source-backed moon count and separate moon entries.
- Source-reviewed Great Red Spot, atmosphere, rings, magnetic field, and Galilean moon details.
- Careful wording around Europa habitability.

### Should remain outside the fixture

- Jupiter scale, color, distance, moon rendering values, and orbit speeds.
- Tour step camera positions and sequence.

## Content Gaps

- The fixture currently covers only Sun, Earth, Mars, and Jupiter.
- Current live app also includes Mercury, Venus, Saturn, Uranus, Neptune, Pluto, Ceres, Eris, Haumea, Makemake, Oort Cloud, selected moons, asteroid belt objects, and Oort Cloud object classes.
- The fixture has no separate Moon, Phobos, Deimos, Io, Europa, Ganymede, or Callisto entries yet.
- The fixture intentionally leaves measurement-heavy fields empty for seeded bodies.
- No validation currently enforces stable IDs, unique slugs, source notes, or reviewed dates.
- Facts panel content is currently one free-text description, so a future UI needs content design for showing `keyFacts`, physical characteristics, orbital characteristics, moons, source notes, and reviewed dates.

## Source Review Needed

Facts needing source review before migration:

- Mercury completes an orbit in 88 Earth days.
- Venus surface temperature is 900°F.
- Moon is the fifth largest moon and stabilizes Earth’s rotation.
- Mars has the largest volcano and canyon in the Solar System.
- Io has over 400 active volcanoes.
- Europa may harbor life beneath icy crust.
- Ganymede is larger than Mercury.
- Callisto is the most heavily cratered object.
- Jupiter has a mass greater than all other planets combined.
- Titan has methane lakes and a thick atmosphere.
- Enceladus has south-pole geysers.
- Neptune winds reach 1,200 mph.
- Triton orbits backward.
- Eris is the most massive dwarf planet.
- Makemake is the second-brightest Kuiper Belt object.
- Oort Cloud has over 15,000 icy objects, trillions of objects, multiple layers, and reaches nearly halfway to the nearest star.
- Oort Cloud object category counts and percentages.
- “Only known planet with life in the universe” should be rewritten to avoid overclaiming; “only planet currently known to harbor life” is safer.

Broad educational copy likely safe to move after editorial review:

- Sun as the central star.
- Earth as home planet and currently only known life-bearing planet.
- Mars as the Red Planet.
- Jupiter as the largest planet.
- Saturn known for rings.
- Uranus rotates on its side.
- Pluto and Ceres as dwarf planets.

Scientific measurements should not be trusted from current app copy without source review. Rendering radii/distances must never be used as scientific measurements.

## Safe Future Migration Plan

1. **Phase 1: Expand fixture content only**
   - Add entries for remaining visible bodies and selected moons.
   - Keep fixture unused by the live app.
   - Add source notes and mark unreviewed claims clearly.

2. **Phase 2: Add validation coverage if needed**
   - Add tests or scripts that verify unique IDs/slugs, required source notes, valid dates, and no rendering fields in educational records.
   - Keep validation local/build-time only.

3. **Phase 3: Point one non-critical read-only panel/card to the fixture**
   - Choose a hidden, preview, or non-critical facts card first.
   - Do not change Three.js object creation, picking, animation, or tour behavior.

4. **Phase 4: Migrate more facts panels after visual/manual QA**
   - Gradually replace hard-coded `info` strings with read-only fixture lookups.
   - Verify every object click still opens the same UI and no camera/scene behavior changes.

5. **Phase 5: Consider admin-time/build-time API refresh only after model stability**
   - Use server-only/admin tooling and secret environment variables.
   - Do not fetch astronomy APIs from the browser.
   - Do not expose API tokens in client code or `NEXT_PUBLIC_*` variables.

## Recommended First Migration Task

Recommended next task:

> Expand `data/solar-system-educational-data.ts` with source-noted entries for Mercury, Venus, Saturn, Uranus, Neptune, Pluto, Ceres, and the Moon, without importing the fixture into live components.

Acceptance guardrails for that task:

- No app imports from `data/solar-system-educational-data.ts`.
- No `/solar-system` UI changes.
- No scene changes.
- No dependency changes.
- Each new entry includes `sourceNotes`, `lastReviewed`, body type, broad overview, and only source-reviewed facts.
- Rendering values are not copied into educational measurements.

## Do Not Touch List

The following should remain untouched during fixture expansion and early migration:

- Three.js scene rendering.
- Planet, moon, asteroid, Oort Cloud positions, scale, textures/materials, colors, object loading, lighting, orbit behavior, and animation behavior.
- Camera movement and controls.
- VR/WebXR behavior.
- Solar System Tour sequencing behavior and camera positions.
- Runtime API fetching.
- API token handling.
- Homepage copy unless a future documentation task explicitly requires a documentation link update.
- Controls Walkthrough behavior and UI targeting.
