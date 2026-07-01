"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useTour } from "@/hooks/use-tour"
import { controlsWalkthroughSteps } from "@/data/controls-walkthrough-steps"
import ControlsWalkthrough from "@/components/controls-walkthrough"
import ControlsWalkthroughLauncher from "@/components/controls-walkthrough-launcher"
import SolarSystem3D from "@/components/solar-system-3d"

export default function SolarSystemPage() {
  const {
    isActive: isControlsWalkthroughActive,
    hasCompletedBefore: hasCompletedControlsWalkthrough,
    startTour: startControlsWalkthrough,
    completeTour: completeControlsWalkthrough,
    skipTour: skipControlsWalkthrough,
  } = useTour({
    steps: controlsWalkthroughSteps,
    autoStart: false,
    localStorage: true,
    // Keep the legacy key so returning users do not see the Controls Walkthrough again unexpectedly.
    storageKey: "solar-system-tour-completed",
  })

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Set up the page
    document.title = "🌌 Solar System Explorer"

    // Hide loading after component mounts
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Loading Screen */}
      {isLoading && (
        <div
          id="loading"
          className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-black flex items-center justify-center z-50"
        >
          <div className="text-center">
            <div className="relative">
              <div className="animate-spin rounded-full h-20 w-20 border-4 border-transparent border-t-blue-400 border-r-purple-400 mx-auto mb-6 shadow-2xl"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-20 w-20 border-2 border-blue-400 opacity-20"></div>
            </div>
            <p className="text-white text-xl font-semibold tracking-wide drop-shadow-lg">Loading Solar System...</p>
            <div className="mt-2 text-blue-300 text-sm animate-pulse">Initializing 3D Universe</div>
          </div>
        </div>
      )}

      {/* Error Screen */}
      {error && (
        <div
          id="error"
          className="fixed inset-0 bg-gradient-to-br from-red-900 via-slate-900 to-black flex items-center justify-center z-50"
        >
          <div className="text-center bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/30 shadow-2xl">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Error Loading Solar System</h2>
            <p className="mb-6 text-gray-300">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-red-500/25"
            >
              🔄 Retry
            </button>
          </div>
        </div>
      )}

      {/* Main 3D Solar System */}
      <SolarSystem3D />

      {/* Entry orientation */}
      <section
        aria-labelledby="solar-system-intro-title"
        className="fixed left-3 right-20 top-3 z-20 max-h-[34vh] overflow-y-auto rounded-2xl border border-slate-700/60 bg-slate-950/85 p-3 text-white shadow-2xl backdrop-blur-xl sm:left-6 sm:right-auto sm:top-6 sm:max-h-[42vh] sm:max-w-sm sm:p-4"
      >
        <Link
          href="/"
          className="mb-2 inline-flex min-h-10 items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-100 transition-colors hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:mb-3"
          aria-label="Back to homepage"
        >
          ← Back to homepage
        </Link>
        <h1 id="solar-system-intro-title" className="text-base font-bold text-white sm:text-lg">
          Interactive Solar System Explorer
        </h1>
        <p className="mt-2 text-xs leading-relaxed text-slate-200 sm:text-sm">
          Explore this browser-based 3D solar system. Drag to look around, scroll to zoom, and click a planet or moon to view facts.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
          Open the Controls menu for scene options, or use Start Solar System Tour for the guided object tour.
        </p>
      </section>

      {/* Enhanced Waffle Menu with All Controls */}
      <div id="controls" className="fixed right-3 top-3 z-30 sm:right-6 sm:top-6">
        <div className="relative group">
          {/* Waffle Icon Button */}
          <button className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl text-white min-h-12 min-w-12 p-3 rounded-2xl sm:p-4 border border-slate-700/50 shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300" aria-label="Open solar system controls">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm">
              <circle cx="5" cy="5" r="2" />
              <circle cx="12" cy="5" r="2" />
              <circle cx="19" cy="5" r="2" />
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
              <circle cx="5" cy="19" r="2" />
              <circle cx="12" cy="19" r="2" />
              <circle cx="19" cy="19" r="2" />
            </svg>
          </button>

          {/* Expanded Controls Menu */}
          <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transform scale-95 group-hover:scale-100 group-focus-within:scale-100">
            <div className="max-h-[calc(100vh-5rem)] w-[calc(100vw-1.5rem)] max-w-xs overflow-y-auto rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/98 via-slate-800/98 to-slate-900/98 p-4 text-white shadow-2xl backdrop-blur-xl sm:min-w-[280px] sm:p-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                  🌌 Controls & Options
                </h3>
              </div>

              {/* Speed Control */}
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-600/30 shadow-inner mb-4">
                <label htmlFor="speed-slider" className="block text-sm mb-2 text-blue-300 font-medium">
                  ⚡ Speed:{" "}
                  <span id="speed-value" className="text-white font-bold">
                    1.0
                  </span>
                  x
                </label>
                <input
                  type="range"
                  id="speed-slider"
                  min="0"
                  max="5"
                  step="0.1"
                  defaultValue="1"
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-3d"
                />
              </div>

              {/* Control Buttons */}
              <div className="space-y-3 mb-4">
                <button
                  id="pause-button"
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 font-medium text-sm"
                >
                  ⏸️ Pause
                </button>

                <button
                  id="reset-view"
                  className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-green-500/25 font-medium text-sm"
                >
                  🎯 Reset View
                </button>

                <button
                  id="toggle-orbits"
                  className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-purple-500/25 font-medium text-sm"
                >
                  🔮 Hide Orbits
                </button>

                <button
                  id="start-tour"
                  // Existing behavior: React opens the Controls Walkthrough while Three.js listens to this ID for the Solar System Tour.
                  onClick={startControlsWalkthrough}
                  className="w-full px-4 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl hover:from-yellow-700 hover:to-orange-700 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-yellow-500/25 font-medium text-sm"
                >
                  🚀 Start Solar System Tour
                </button>
              </div>

              {/* Separator */}
              <div className="border-t border-slate-600/30 my-4"></div>

              {/* Additional Options */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    const vrButton = document.querySelector("#vr-button button")
                    if (vrButton) vrButton.click()
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 rounded-xl transition-all duration-200 font-medium text-sm"
                >
                  🥽 Try VR if available
                </button>
                <button
                  onClick={() => {
                    if (document.fullscreenElement) {
                      document.exitFullscreen()
                    } else {
                      document.documentElement.requestFullscreen()
                    }
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 rounded-xl transition-all duration-200 font-medium text-sm"
                >
                  🖥️ Fullscreen
                </button>
              </div>

              {/* Quick Instructions */}
              <div className="mt-4 pt-4 border-t border-slate-600/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
                  <p className="font-bold text-purple-300 text-sm">How to interact:</p>
                </div>
                <div className="space-y-1 text-xs text-gray-400">
                  <p>🖱️ Click & drag to rotate</p>
                  <p>🔄 Scroll to zoom</p>
                  <p>👆 Right-click & drag to pan</p>
                  <p>ℹ️ Click planets or moons for facts</p>
                  <p>🚀 Use Start Solar System Tour for the guided path</p>
                  <p>🥽 VR availability depends on your browser and device</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced VR Button (keep this separate for Three.js injection) */}
      <div id="vr-button" className="fixed left-3 top-16 z-10 opacity-0 sm:left-6 sm:top-6">
        <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl p-3 rounded-2xl border border-slate-700/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
          {/* VR button will be injected here by Three.js VRButton */}
        </div>
      </div>

      {/* Enhanced Information Panel */}
      <div id="info" className="fixed bottom-3 left-3 right-3 z-20 max-h-[40vh] overflow-y-auto sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm" style={{ display: "none" }}>
        <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl text-white p-4 rounded-2xl sm:p-6 border border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <h3
              id="planet-name"
              className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
            ></h3>
          </div>
          <p id="planet-info" className="text-gray-300 leading-relaxed mb-4"></p>
          <button
            onClick={() => {
              const info = document.getElementById("info")
              if (info) info.style.display = "none"
            }}
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-red-500/25 text-sm font-medium"
          >
            ❌ Close
          </button>
        </div>
      </div>

      {/* Solar System Tour UI controlled by the Three.js scene */}
      <div
        id="tour-ui"
        className="fixed inset-0 z-[60] h-screen w-screen overflow-y-auto bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent p-3 text-white backdrop-blur-[1px] sm:p-6"
        style={{ display: "none" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-title"
        aria-describedby="tour-description"
      >
        <div className="flex min-h-full w-full items-end justify-center py-4 sm:items-center sm:py-8">
          <section className="w-full max-w-3xl rounded-3xl border border-yellow-300/25 bg-slate-950/82 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-6 lg:p-8">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-yellow-300/90">Solar System Tour</p>
                <h3
                  id="tour-title"
                  className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent sm:text-3xl"
                ></h3>
              </div>
              <div
                id="tour-progress"
                className="w-fit rounded-full border border-blue-300/30 bg-blue-950/55 px-4 py-2 text-sm font-semibold text-blue-100"
                aria-live="polite"
              ></div>
            </div>

            <p id="tour-description" className="mb-5 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg"></p>
            <p className="mb-6 text-sm text-slate-300">Use the tour controls to move through each stop while the 3D scene remains visible behind this guided mode.</p>

            <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              <button
                id="tour-prev"
                aria-label="Go to previous Solar System Tour stop"
                className="min-h-12 rounded-xl bg-slate-700/90 px-4 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-95"
              >
                ⬅️ Previous
              </button>

              <button
                id="tour-end"
                aria-label="End Solar System Tour"
                className="min-h-12 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 font-bold text-white shadow-lg shadow-red-950/40 transition-all duration-200 hover:scale-[1.02] hover:from-red-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-95"
              >
                🛑 End Tour
              </button>

              <button
                id="tour-next"
                aria-label="Go to next Solar System Tour stop"
                className="min-h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 font-medium text-white shadow-lg shadow-blue-950/40 transition-all duration-200 hover:scale-[1.02] hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-95"
              >
                Next ➡️
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Controls Walkthrough components */}
      <ControlsWalkthrough
        steps={controlsWalkthroughSteps}
        isActive={isControlsWalkthroughActive}
        onStart={startControlsWalkthrough}
        onComplete={completeControlsWalkthrough}
        onSkip={skipControlsWalkthrough}
      />

      <ControlsWalkthroughLauncher
        onStartWalkthrough={startControlsWalkthrough}
        isVisible={!hasCompletedControlsWalkthrough && !isControlsWalkthroughActive}
      />

      {/* Add custom CSS styles */}
      <style jsx>{`
        .slider-3d {
          background: linear-gradient(to right, #1e293b, #334155);
          border-radius: 8px;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .slider-3d::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3), 0 0 0 2px rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }
        
        .slider-3d::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(59, 130, 246, 0.4), 0 0 0 3px rgba(255, 255, 255, 0.2);
        }
        
        .slider-3d::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  )
}
