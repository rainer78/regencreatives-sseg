import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Globe, Eye, Zap, Navigation, Monitor, Info } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/RegenCreatives/test-repo/refs/heads/master/sse_hero_static..png?height=800&width=1200')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-purple-100 text-purple-800">
              Browser-Based Space Learning Experience
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Start a Guided
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Solar System Tour
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Explore a browser-based 3D model of planets, moons, dwarf planets, and distant solar system objects.
              Learn by navigating the scene, clicking objects for facts, and using the built-in tour controls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solar-system" aria-label="Start the Solar System Tour">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start the Solar System Tour
                </Button>
              </Link>
            </div>
            <p className="mt-5 text-sm text-blue-100/90">
              Works best in a modern desktop browser. A headset is not required; immersive mode depends on WebXR support
              from your browser and device.
            </p>
          </div>
        </div>
      </section>

      {/* Before You Launch Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Before You Launch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The experience is designed to be easy to enter from a regular browser, with optional immersive features
              only when your setup supports them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Monitor className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Best on Desktop</CardTitle>
                <CardDescription className="text-gray-300">
                  Use a modern desktop browser for the clearest controls. Rotate, zoom, and pan with your mouse or
                  trackpad.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Navigation className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Guided and Interactive</CardTitle>
                <CardDescription className="text-gray-300">
                  Start with the built-in guidance, then explore at your own pace by adjusting speed, toggling orbits,
                  and clicking objects for short facts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Info className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Immersive Mode Varies</CardTitle>
                <CardDescription className="text-gray-300">
                  VR/WebXR availability depends on your browser and device. You can still explore the tour without a
                  headset.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What You Can Do</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A lightweight space exploration prototype with browser controls, object information, and a guided tour
              path through the current solar system scene.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Explore 3D Objects</CardTitle>
                <CardDescription className="text-gray-300">
                  View planets, major moons, dwarf planets, orbit paths, the asteroid belt, and a distant Oort Cloud
                  representation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Navigation className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Use Tour Controls</CardTitle>
                <CardDescription className="text-gray-300">
                  Use the available tour and control panel to learn the interface, pause motion, reset your view, and
                  move through the scene more confidently.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Eye className="h-12 w-12 text-red-400 mb-4" />
                <CardTitle className="text-white">Click for Short Facts</CardTitle>
                <CardDescription className="text-gray-300">
                  Select planets, moons, and some space objects to open a brief information panel about what you are
                  viewing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Adjust Motion</CardTitle>
                <CardDescription className="text-gray-300">
                  Change the simulation speed, pause orbital motion, or hide orbit lines when you want a simpler view.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Monitor className="h-12 w-12 text-cyan-400 mb-4" />
                <CardTitle className="text-white">No Headset Required</CardTitle>
                <CardDescription className="text-gray-300">
                  The primary experience runs in the browser. Immersive features should be treated as device-dependent
                  rather than guaranteed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <Rocket className="h-12 w-12 text-orange-400 mb-4" />
                <CardTitle className="text-white">Educational Prototype</CardTitle>
                <CardDescription className="text-gray-300">
                  This project is a focused interactive learning and portfolio experience, not a finished science
                  platform or full planetarium replacement.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solar System Preview */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What You&apos;ll Explore</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Begin with the inner planets, continue through the gas and ice giants, and discover selected moons and
              distant solar system objects already included in the scene.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Mercury", color: "bg-gray-400", description: "Closest to the Sun" },
              { name: "Venus", color: "bg-orange-400", description: "Hottest planet" },
              { name: "Earth", color: "bg-blue-500", description: "Our home planet" },
              { name: "Mars", color: "bg-red-500", description: "The Red Planet" },
              { name: "Jupiter", color: "bg-yellow-600", description: "Largest planet" },
              { name: "Saturn", color: "bg-yellow-400", description: "Ringed planet" },
              { name: "Uranus", color: "bg-cyan-400", description: "Tilted ice giant" },
              { name: "Neptune", color: "bg-blue-600", description: "Distant ice giant" },
            ].map((planet) => (
              <Card
                key={planet.name}
                className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${planet.color} mx-auto mb-4 shadow-lg`}></div>
                  <h3 className="text-white font-semibold text-lg mb-2">{planet.name}</h3>
                  <p className="text-gray-400 text-sm">{planet.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Note Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-slate-800/70 border border-slate-700 rounded-3xl p-8 md:p-10">
            <h2 className="text-4xl font-bold text-white mb-6">About This Experience</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Solar System Explorer is an interactive educational prototype built to demonstrate a guided 3D space tour
              on the web. It is intended for exploration and learning, with room for future polish, content review, and
              device-specific improvements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Enter the Tour?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Launch the browser experience, follow the on-screen guidance, and explore the current solar system scene at
            your own pace.
          </p>
          <Link href="/solar-system" aria-label="Launch the Solar System Experience">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Rocket className="mr-2 h-5 w-5" />
              Launch the Experience
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">Built with Three.js and modern web technologies</p>
          <p className="text-gray-500 mt-2">© 2024 Solar System Explorer. Educational use encouraged.</p>
        </div>
      </footer>
    </div>
  )
}
