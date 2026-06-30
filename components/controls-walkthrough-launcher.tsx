"use client"

import { useState } from "react"
import { HelpCircle, Play, X } from "lucide-react"

interface ControlsWalkthroughLauncherProps {
  onStartWalkthrough: () => void
  isVisible: boolean
}

export default function ControlsWalkthroughLauncher({ onStartWalkthrough, isVisible }: ControlsWalkthroughLauncherProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-3 right-3 z-30 sm:bottom-4 sm:right-4">
      {isExpanded ? (
        <div className="max-h-[42vh] w-[calc(100vw-1.5rem)] max-w-sm overflow-y-auto rounded-lg border border-gray-200 bg-white p-4 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <HelpCircle className="text-blue-500" size={20} />
              <h3 className="font-semibold text-gray-900">Controls Walkthrough</h3>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close help"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Learn how to use the controls, read object facts, and start the separate Solar System Tour when you are ready.
          </p>
          <button
            onClick={() => {
              onStartWalkthrough()
              setIsExpanded(false)
            }}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
          >
            <Play size={16} />
            Start Controls Walkthrough
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="min-h-12 min-w-12 rounded-full bg-blue-500 p-3 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-label="Open Controls Walkthrough"
          style={{
            animation: "pulse 2s infinite",
          }}
        >
          <HelpCircle size={24} />
        </button>
      )}
    </div>
  )
}
