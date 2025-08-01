import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Target } from "lucide-react"

export function About() {
  const stats = [
    { icon: Users, value: "5000+", label: "Happy Members" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Access Available" },
    { icon: Target, value: "98%", label: "Success Rate" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose FitPro Gym?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a gym. We're your partner in achieving your fitness goals with state-of-the-art
            equipment, expert guidance, and a supportive community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Fitness Journey Starts Here</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Expert Trainers:</strong> Our certified professionals provide personalized guidance to help
                  you reach your goals safely and effectively.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Modern Equipment:</strong> Train with the latest fitness technology and equipment from leading
                  brands.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Flexible Membership:</strong> Choose from various membership plans that fit your lifestyle and
                  budget.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Community Support:</strong> Join a community of like-minded individuals who motivate and
                  inspire each other.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Fitness trainer helping client"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
