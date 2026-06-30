export const controlsWalkthroughSteps = [
  {
    id: "welcome",
    title: "Controls Walkthrough",
    description:
      "This short walkthrough explains how to use the page controls. The separate Solar System Tour button moves you through planets, moons, and other objects.",
    position: "center" as const,
    highlight: false,
  },
  {
    id: "controls-panel",
    title: "Controls Menu",
    description:
      "Open this menu for scene controls such as speed, pause, reset view, orbit visibility, fullscreen, and the guided Solar System Tour.",
    target: "#controls",
    position: "left" as const,
    highlight: true,
  },
  {
    id: "speed-control",
    title: "Simulation Speed",
    description:
      "Use this slider to control how fast the planets orbit around the Sun. You can slow it down to observe details or speed it up to see long-term orbital patterns.",
    target: "#speed-slider",
    position: "left" as const,
    highlight: true,
  },
  {
    id: "pause-button",
    title: "Pause Animation",
    description:
      "Click this button to pause or resume the planetary motion. This is useful when you want to examine objects without them moving.",
    target: "#pause-button",
    position: "left" as const,
    highlight: true,
  },
  {
    id: "reset-view",
    title: "Reset Camera View",
    description:
      "If you get lost navigating around the solar system, click this button to return to the default camera position and view.",
    target: "#reset-view",
    position: "left" as const,
    highlight: true,
  },
  {
    id: "toggle-orbits",
    title: "Toggle Orbit Lines",
    description:
      "This button shows or hides the orbital paths of the planets. The blue rings help you visualize the planetary orbits.",
    target: "#toggle-orbits",
    position: "left" as const,
    highlight: true,
  },
  {
    id: "solar-system-tour-entry",
    title: "Solar System Tour",
    description:
      "This starts the separate celestial-body tour. Use it when you want the experience to guide you through planets, moons, and major features.",
    target: "#start-tour",
    position: "left" as const,
    highlight: true,
  },
  {
    id: "vr-mode",
    title: "VR Availability",
    description:
      "You can try VR from the controls menu when your browser and device support it. Availability depends on your setup.",
    target: "#vr-button",
    position: "top" as const,
    highlight: true,
  },
  {
    id: "info-panel",
    title: "Information Panel",
    description:
      "Click a planet, moon, or other selectable object to open facts here. Close the panel when you want more room to explore.",
    target: "#info",
    position: "right" as const,
    highlight: true,
  },
  {
    id: "navigation",
    title: "Camera Navigation",
    description:
      "You can navigate around the solar system by clicking and dragging to rotate the view, scrolling to zoom in/out, and right-clicking and dragging to pan.",
    position: "center" as const,
    highlight: false,
  },
  {
    id: "interaction",
    title: "Object Interaction",
    description:
      "Click on any planet, moon, or celestial object to learn more about it. The information will appear in the bottom-left panel with detailed facts and descriptions.",
    position: "center" as const,
    highlight: false,
  },
  {
    id: "features",
    title: "Special Features",
    description:
      "The solar system includes all planets, major moons, dwarf planets like Pluto and Ceres, the asteroid belt, and even the distant Oort Cloud at the edge of our solar system.",
    position: "center" as const,
    highlight: false,
  },
  {
    id: "complete",
    title: "Walkthrough Complete!",
    description:
      "You're ready to explore. Click objects for facts, use the controls menu for view options, or start the Solar System Tour for a guided path through space.",
    position: "center" as const,
    highlight: false,
  },
]
