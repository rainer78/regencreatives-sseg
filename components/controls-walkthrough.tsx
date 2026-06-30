"use client"

import { useEffect, useState, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ControlsWalkthroughStep {
  id: string
  title: string
  description: string
  target?: string
  position: "top" | "bottom" | "left" | "right" | "center"
  action?: () => void
  highlight?: boolean
  delay?: number
}

interface ControlsWalkthroughProps {
  steps: ControlsWalkthroughStep[]
  isActive: boolean
  onStart: () => void
  onComplete: () => void
  onSkip: () => void
}

export default function ControlsWalkthrough({ steps, isActive, onStart, onComplete, onSkip }: ControlsWalkthroughProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [highlightPosition, setHighlightPosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const tooltipRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isActive) {
      setIsVisible(true)
      setCurrentStep(0)
      updateTooltipPosition()
    } else {
      setIsVisible(false)
    }
  }, [isActive])

  useEffect(() => {
    if (isVisible && steps[currentStep]) {
      updateTooltipPosition()

      // Execute step action if provided
      if (steps[currentStep].action) {
        const delay = steps[currentStep].delay || 500
        setTimeout(() => {
          steps[currentStep].action?.()
        }, delay)
      }
    }
  }, [currentStep, isVisible, steps])

  const updateTooltipPosition = () => {
    const step = steps[currentStep]
    if (!step || !tooltipRef.current) return

    if (step.target) {
      const targetElement = document.querySelector(step.target) as HTMLElement
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect()
        const tooltipRect = tooltipRef.current.getBoundingClientRect()

        let x = 0,
          y = 0

        switch (step.position) {
          case "top":
            x = rect.left + rect.width / 2 - tooltipRect.width / 2
            y = rect.top - tooltipRect.height - 10
            break
          case "bottom":
            x = rect.left + rect.width / 2 - tooltipRect.width / 2
            y = rect.bottom + 10
            break
          case "left":
            x = rect.left - tooltipRect.width - 10
            y = rect.top + rect.height / 2 - tooltipRect.height / 2
            break
          case "right":
            x = rect.right + 10
            y = rect.top + rect.height / 2 - tooltipRect.height / 2
            break
          case "center":
            x = window.innerWidth / 2 - tooltipRect.width / 2
            y = window.innerHeight / 2 - tooltipRect.height / 2
            break
        }

        // Ensure tooltip stays within viewport
        x = Math.max(10, Math.min(x, window.innerWidth - tooltipRect.width - 10))
        y = Math.max(10, Math.min(y, window.innerHeight - tooltipRect.height - 10))

        setTooltipPosition({ x, y })

        // Update highlight position
        if (step.highlight) {
          setHighlightPosition({
            x: rect.left - 5,
            y: rect.top - 5,
            width: rect.width + 10,
            height: rect.height + 10,
          })
        }
      }
    } else {
      // Center tooltip if no target
      const tooltipRect = tooltipRef.current.getBoundingClientRect()
      setTooltipPosition({
        x: window.innerWidth / 2 - tooltipRect.width / 2,
        y: window.innerHeight / 2 - tooltipRect.height / 2,
      })
    }
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeWalkthrough()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const completeWalkthrough = () => {
    setIsVisible(false)
    onComplete()
  }

  const skipWalkthrough = () => {
    setIsVisible(false)
    onSkip()
  }

  const goToStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex)
    }
  }

  if (!isVisible || !steps[currentStep]) return null

  const step = steps[currentStep]

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-black bg-opacity-50"
        style={{ pointerEvents: "none" }}
      />

      {/* Highlight */}
      {step.highlight && step.target && (
        <div
          className="pointer-events-none fixed z-50 rounded-lg border-2 border-blue-400 shadow-lg"
          style={{
            left: highlightPosition.x,
            top: highlightPosition.y,
            width: highlightPosition.width,
            height: highlightPosition.height,
            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)",
            animation: "pulse 2s infinite",
          }}
        />
      )}

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className="fixed z-50 max-h-[82vh] w-[calc(100vw-1.5rem)] max-w-sm overflow-y-auto rounded-lg border border-gray-200 bg-white p-4 shadow-xl sm:p-6"
        style={{
          left: tooltipPosition.x,
          top: tooltipPosition.y,
          transform: "translate(0, 0)",
        }}
        role="dialog"
        aria-labelledby="controls-walkthrough-title"
        aria-describedby="controls-walkthrough-description"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 id="controls-walkthrough-title" className="text-lg font-semibold text-gray-900">
            {step.title}
          </h3>
          <button
            onClick={skipWalkthrough}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close Controls Walkthrough"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <p id="controls-walkthrough-description" className="text-gray-700 mb-6 leading-relaxed">
          {step.description}
        </p>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              Step {currentStep + 1} of {steps.length}
            </span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous step"
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
            aria-label={currentStep === steps.length - 1 ? "Complete Controls Walkthrough" : "Next Controls Walkthrough step"}
          >
            {currentStep === steps.length - 1 ? "Complete" : "Next"}
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Keyboard shortcuts hint */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">Use arrow keys to navigate • ESC to exit</p>
        </div>
      </div>

      {/* Keyboard navigation */}
      <div
        className="fixed inset-0 z-40"
        onKeyDown={(e) => {
          switch (e.key) {
            case "ArrowRight":
            case " ":
              e.preventDefault()
              nextStep()
              break
            case "ArrowLeft":
              e.preventDefault()
              prevStep()
              break
            case "Escape":
              e.preventDefault()
              skipWalkthrough()
              break
          }
        }}
        tabIndex={0}
        style={{ outline: "none" }}
      />
    </>
  )
}
