import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Users, Clock, Heart, Smartphone, Shield, Calendar, Trophy } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Dumbbell,
      title: "State-of-the-Art Equipment",
      description: "Latest fitness equipment from top brands, regularly maintained and updated.",
    },
    {
      icon: Users,
      title: "Expert Personal Trainers",
      description: "Certified trainers with years of experience to guide your fitness journey.",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Work out on your schedule with round-the-clock gym access for members.",
    },
    {
      icon: Heart,
      title: "Health Monitoring",
      description: "Track your progress with body composition analysis and health assessments.",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Book classes, track workouts, and connect with trainers through our app.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Clean, sanitized facilities with safety protocols and emergency support.",
    },
    {
      icon: Calendar,
      title: "Group Classes",
      description: "Variety of group fitness classes including yoga, HIIT, spinning, and more.",
    },
    {
      icon: Trophy,
      title: "Achievement Programs",
      description: "Milestone rewards and challenges to keep you motivated and engaged.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive facilities and services are designed to support every aspect of your fitness journey, from
            beginner to advanced levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-red-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Fitness Journey?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of members who have transformed their lives at FitPro Gym
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-sm opacity-90">Active Members</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
