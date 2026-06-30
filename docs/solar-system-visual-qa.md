# Solar System Material and Lighting Polish — Manual Visual QA

Date: 2026-06-30
Route under review: `/solar-system`
Scope: visual QA for the recent material and lighting polish only.

## Review constraints

This pass did not change scene behavior, Three.js scene logic, planet positions, scale, orbit behavior, camera movement, tour sequencing, object counts, loading behavior, VR/WebXR behavior, educational data, homepage content, dependencies, assets, textures, or models.

The current execution environment does not include a browser or preinstalled browser automation package such as Playwright or Puppeteer. To avoid adding dependencies or reconfiguring tooling, screenshots were not captured in this task. The production build was used as the automated smoke check, and this document records the required manual viewport checklist and risk assessment for browser review.

## Viewports to review manually

| Viewport | Size | Review focus | Status |
| --- | ---: | --- | --- |
| Desktop | Typical desktop browser, e.g. 1440 × 900 | Sun distinction, planet visibility, labels, facts panels, overlays, interactivity | Pending browser review |
| Mobile portrait | 390 × 844 | Intro panel, controls menu, help launcher, facts panel, tour controls, small-screen planet visibility | Pending browser review |
| Mobile landscape | 844 × 390 | Overlay crowding, scene/overlay competition, bright-object balance, control usability | Pending browser review |
| Tablet | 768 × 1024 | Layout balance, overlay readability, scene visibility | Pending browser review |

## Findings from implementation/static review

### What appears improved

- The Sun should read more distinctly than the planets because it now uses an emissive material while retaining the existing stylized yellow color.
- Planets and moons should gain more depth because they now use lighting-aware materials instead of flat materials.
- Lighting remains conservative: no real-time shadows, post-processing, bloom, particles, textures, models, or extra dependencies were introduced.
- Orbit paths, asteroid belt objects, Oort Cloud objects, and stars remain on lightweight flat materials, limiting the performance risk of this first polish.

### What needs browser confirmation

- Whether Mercury, Mars, Pluto, Ceres, Haumea, Makemake, and small moons remain visible enough after switching to lighting-aware materials.
- Whether the Sun is luminous without overpowering nearby scene elements or overlays.
- Whether Saturn's ring opacity still reads clearly on desktop and mobile.
- Whether labels, facts panels, tour controls, the help launcher, and the controls menu remain readable over the updated scene.
- Whether mobile portrait and landscape layouts still leave a meaningful portion of the 3D scene visible.
- Whether orbit controls remain responsive with the existing asteroid belt and Oort Cloud load.

## Visual regression risk checklist

| Risk | Current assessment | Manual review action |
| --- | --- | --- |
| Planets too dark | Possible, especially for small/distant bodies because lighting now affects planets and moons | Inspect Mercury, Mars, Pluto, Ceres, Haumea, Makemake, and outer planets at all target viewports |
| Sun too bright | Possible, but no bloom or glow shell was added | Confirm Sun does not overpower overlays or nearby objects |
| Washed-out colors | Low-to-medium risk due lighting changes and material response | Compare recognizability of Earth, Mars, Jupiter, Saturn, Uranus, and Neptune |
| Saturn rings too faint or too strong | Possible because ring opacity was slightly adjusted | Inspect Saturn at desktop, tablet, and mobile |
| Labels/overlays harder to read | Low risk from code changes because UI was not edited, but scene contrast changed | Open facts panels, controls menu, help launcher, and tour controls over the scene |
| Small moons disappearing visually | Medium risk due small size plus lighting-aware materials | Inspect Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto moon systems |
| Mobile scene too hard to interpret | Medium risk due small viewport and overlay density | Review 390 × 844 and 844 × 390 carefully |
| Noticeable performance decline | Low-to-medium risk; planet/moon materials changed, asteroid/Oort materials and counts did not | Smoke-test orbit controls, overlay open/close, asteroid belt, and Oort Cloud interaction |

## Screenshots

No screenshots were captured because the environment does not provide a browser binary or preinstalled browser screenshot tooling. No screenshot dependency was added.

Recommended screenshot paths for a follow-up browser-capable QA run:

- `docs/qa/screenshots/solar-system-desktop.png`
- `docs/qa/screenshots/solar-system-mobile-portrait.png`
- `docs/qa/screenshots/solar-system-mobile-landscape.png`
- `docs/qa/screenshots/solar-system-tablet.png`

## Keep or revert recommendation

The material and lighting pass is reasonable to keep provisionally because it is targeted, build-safe, asset-free, dependency-free, and avoids changing object counts or behavior. However, the pass should not be used as a foundation for further visual upgrades until a browser-based manual review confirms that small planets, small moons, mobile layouts, and overlay readability remain acceptable.

## Recommended adjustments if manual review finds regressions

- If small or distant planets are too dark, slightly increase ambient or hemisphere fill rather than changing positions, scale, or orbit behavior.
- If the Sun is too bright, reduce emissive intensity or central point-light intensity before considering any new glow treatment.
- If Saturn's rings are too faint, restore the prior opacity before adding any new ring detail.
- If mobile overlays crowd the scene, document a separate UI responsiveness task rather than changing scene logic in the visual-material pass.
- If performance regresses near the asteroid belt or Oort Cloud, defer further material work and prioritize a dedicated rendering performance refactor.

## Recommended next task

Run a browser-capable manual QA pass with screenshots at the four target viewports. If that pass is acceptable, the next visual improvement should be a similarly conservative planet/moon readability adjustment, starting with small/dark bodies and avoiding textures, models, new dependencies, post-processing, shadows, or scene behavior changes.
