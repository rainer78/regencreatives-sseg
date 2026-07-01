# Solar System Manual QA Checklist

Use this checklist before merging changes that affect the `/solar-system` experience. The goal is to confirm that the browser-based 3D experience remains understandable, reachable, and usable without changing or validating the underlying Three.js scene implementation.

## Viewport Coverage

Run the checks below at these practical viewport sizes, using browser responsive design tools when needed:

- **Mobile portrait:** `390 × 844`
- **Mobile landscape:** `844 × 390`
- **Tablet:** `768 × 1024`
- **Desktop:** `1440 × 900`
- **Large desktop, when relevant:** `1920 × 1080` or wider

For each viewport, confirm that a meaningful portion of the 3D scene remains visible while overlays are closed, and that opened overlays can be read and dismissed or ignored without making the experience unusable.

## Tour Terminology

This project currently has two separate tour-related systems:

- **Controls Walkthrough:** the React help overlay that teaches interface controls and basic page usage.
- **Solar System Tour:** the guided celestial-object experience that moves through planets, moons, and other space objects.

Keep these names distinct in UI copy, code comments, QA notes, and future documentation.

## Homepage-to-Experience Flow

- [ ] The homepage primary call-to-action routes to `/solar-system`.
- [ ] Homepage copy sets browser-first expectations and does not imply a headset is required.
- [ ] The `/solar-system` experience can be entered and explored without a headset.
- [ ] The “Back to homepage” link on `/solar-system` is visible, keyboard-accessible, and routes to `/`.

## First-Time Orientation

- [ ] The intro/orientation panel is visible after the scene loads.
- [ ] The intro copy is readable against the 3D background.
- [ ] The intro panel does not cover too much of the 3D scene on mobile portrait or landscape.
- [ ] Back navigation remains visible inside or near the intro area.
- [ ] A first-time user can understand that they can explore the scene, open facts, and use available controls, the Controls Walkthrough, or the Solar System Tour.

## Controls Menu

- [ ] The controls trigger is visible on desktop, tablet, and mobile.
- [ ] The controls trigger is reachable by mouse.
- [ ] The controls trigger is reachable by touch with a comfortable target size.
- [ ] The controls trigger is reachable by keyboard and has a visible focus state.
- [ ] The opened controls menu does not clip off-screen at the required viewport sizes.
- [ ] The opened controls menu scrolls if its content is taller than the available screen space.
- [ ] Controls copy matches behavior that is actually implemented, such as drag, scroll, supported scene buttons, fullscreen, and conditional VR availability.
- [ ] The controls menu can be dismissed or ignored without blocking continued scene interaction.

## Facts / Info Panel

- [ ] Clicking or selecting a supported planet, moon, or celestial object opens the facts/info panel when that behavior is available.
- [ ] The facts/info panel displays the selected object name and facts clearly.
- [ ] Long facts remain scrollable on small screens.
- [ ] The panel does not make the scene unusable on mobile portrait or landscape.
- [ ] The panel does not overlap important controls in a way that prevents use.
- [ ] The close control works and remains reachable by keyboard and touch.

## Solar System Tour

- [ ] The celestial-body Solar System Tour is visually and textually distinct from the Controls Walkthrough.
- [ ] Starting the Solar System Tour opens a full-screen guided mode overlay.
- [ ] The 3D scene remains visible behind the translucent tour overlay while the tour is active.
- [ ] Tour behavior, camera sequencing, camera positions, scene rendering, object counts, and planet visuals are unchanged by the overlay.
- [ ] Tour content is readable at all required viewport sizes.
- [ ] Tour controls such as start, previous, next, and end/close work when present.
- [ ] Tour buttons are reachable by touch and keyboard.
- [ ] The End Tour control is easy to find on desktop, mobile portrait, mobile landscape, and tablet.
- [ ] On mobile, tour buttons stack or wrap safely without clipping.
- [ ] Manual QA includes desktop, mobile portrait, mobile landscape, and tablet viewport checks.
- [ ] The tour can be ended or exited, and the user is not trapped.

## Controls Walkthrough / Help Launcher

- [ ] The help launcher is visible when expected.
- [ ] The help launcher is touch-friendly on mobile.
- [ ] The Controls Walkthrough panel content is readable and scrollable when needed.
- [ ] Walkthrough steps do not collide with core controls in a way that prevents the user from continuing.
- [ ] The walkthrough can be exited with its close/skip behavior.
- [ ] Walkthrough language does not overpromise VR/WebXR support.

## Overlay Stacking

Check the intro panel, controls menu, facts panel, Solar System Tour panel, help launcher, and Controls Walkthrough overlay in both open and closed states.

- [ ] Active overlays appear above passive overlays predictably.
- [ ] Multiple overlays do not create unusable overlap.
- [ ] No panel is clipped in a way that prevents reading content or using controls.
- [ ] Scrollable panels show enough content to be understandable before scrolling.
- [ ] A meaningful portion of the 3D scene remains visible when non-modal overlays are open.
- [ ] Controls Walkthrough or Solar System Tour overlays can be dismissed so the scene can be used again.

## Accessibility Basics

- [ ] Interactive controls have visible focus states.
- [ ] Links and buttons have clear accessible names.
- [ ] Keyboard users can reach the Back link, controls trigger, menu controls, help launcher, and tour controls.
- [ ] Text contrast remains readable against the scene and overlay backgrounds.
- [ ] No hover-only interaction is required on mobile.
- [ ] Focus is not trapped unless an active Controls Walkthrough or Solar System Tour overlay intentionally owns the current interaction, and that overlay can be exited.

## Performance Smoke Check

- [ ] The page loads without obvious console errors.
- [ ] The scene remains interactable after opening and closing the intro-adjacent controls, facts panel, help launcher, Controls Walkthrough, and Solar System Tour overlays.
- [ ] Scrolling panels do not freeze or noticeably degrade the UI.
- [ ] The experience remains usable in a modern desktop browser.
- [ ] Basic mobile emulation does not reveal obvious layout jank or permanently hidden controls.

## VR / WebXR Expectation Check

- [ ] Copy describes VR/WebXR availability as browser- and device-dependent.
- [ ] The experience does not require a headset to start or explore.
- [ ] Unsupported VR/WebXR does not block browser use.
- [ ] No copy implies guaranteed full VR, AR, or immersive support.
- [ ] Browser-only controls remain understandable even when VR/WebXR is unavailable.

## Regression Notes: When to Run This Checklist

Run this checklist:

- Before merging changes to `/solar-system`.
- After changing overlays, controls, Controls Walkthrough or Solar System Tour copy, facts panels, or scene entry behavior.
- After changing responsive classes, fixed positioning, overflow behavior, or z-index rules.
- After changing the homepage-to-experience entry flow or expectation-setting copy.
- Before demoing the project publicly.
