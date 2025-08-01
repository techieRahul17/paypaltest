"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToMembership = () => {
    const element = document.getElementById("membership")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Transform Your Body,
          <br />
          <span className="text-red-500">Transform Your Life</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Join FitPro Gym and experience world-class fitness facilities, expert trainers, and a community that supports
          your fitness journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={scrollToMembership} size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-3 bg-transparent"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Tour
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
