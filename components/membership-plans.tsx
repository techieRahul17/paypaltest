"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

declare global {
  interface Window {
    paypal?: any
  }
}

export function MembershipPlans() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for getting started with your fitness journey",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access",
        "Community support",
      ],
      popular: false,
      showPayPal: false,
    },
    {
      name: "Premium",
      price: "$59",
      period: "/month",
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "Everything in Basic",
        "Personal trainer sessions (2/month)",
        "Group fitness classes",
        "Nutrition consultation",
        "Priority booking",
        "Guest passes (2/month)",
      ],
      popular: true,
      showPayPal: true, // This plan will show the PayPal button
    },
    {
      name: "Elite",
      price: "$99",
      period: "/month",
      description: "Ultimate fitness experience with premium benefits",
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Massage therapy (1/month)",
        "Meal planning service",
        "VIP locker room access",
        "Unlimited guest passes",
        "Priority equipment access",
      ],
      popular: false,
      showPayPal: false,
    },
  ]

  useEffect(() => {
    // Load PayPal SDK
    const script = document.createElement("script")
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ASB29uF2uDG7Ys51R3uwvA7C58UJ3QaJprZdL1p0odwmUtlfiV6hSLYJa3SFQHQmo3dd75b4LKNLDVfA&vault=true&intent=subscription"
    script.setAttribute("data-sdk-integration-source", "button-factory")

    script.onload = () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            style: {
              shape: "pill",
              color: "gold",
              layout: "vertical",
              label: "subscribe",
            },
            createSubscription: (data: any, actions: any) =>
              actions.subscription.create({
                plan_id: "P-4NN48117TN603974LNCGHUTA",
              }),
            onApprove: (data: any, actions: any) => {
              // Success handling
              alert("🎉 Subscription successful! Welcome to FitPro Gym!\n\nSubscription ID: " + data.subscriptionID)
              console.log("Subscription ID:", data.subscriptionID)

              // You can redirect to a success page or update the UI
              // window.location.href = '/success?subscription=' + data.subscriptionID;
            },
            onError: (err: any) => {
              console.error("PayPal error:", err)
              alert("❌ There was an error processing your subscription. Please try again or contact support.")
            },
            onCancel: (data: any) => {
              console.log("Subscription cancelled:", data)
              alert("Subscription cancelled. You can try again anytime!")
            },
          })
          .render("#paypal-button-container-P-4NN48117TN603974LNCGHUTA")
      }
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Membership Plan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect membership plan that fits your fitness goals and lifestyle. All plans include our core
            facilities and expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "border-red-500 shadow-xl scale-105" : "border-gray-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* PayPal Button Container - Only show for Premium plan */}
                <div className="paypal-button-container">
                  {plan.showPayPal ? (
                    <>
                      <div id="paypal-button-container-P-4NN48117TN603974LNCGHUTA" className="min-h-[50px]"></div>
                      <p className="text-xs text-gray-500 text-center mt-4">
                        🔒 Secure recurring payment powered by PayPal. Cancel anytime.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <p className="text-gray-500 font-medium">Coming Soon</p>
                        <p className="text-sm text-gray-400 mt-1">PayPal integration for this plan</p>
                      </div>
                      <p className="text-xs text-gray-500 text-center mt-4">Contact us for this membership plan</p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">✅ All memberships include a 7-day money-back guarantee</p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Secure payments</span>
            <span>✓ Instant activation</span>
          </div>
        </div>

        {/* Success Message Area */}
        <div className="mt-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-green-800 mb-2">🎯 Test Your PayPal Integration</h3>
            <p className="text-green-700 text-sm">
              Click the PayPal button above to test your subscription. The Premium plan is connected to your PayPal
              subscription ID:
              <code className="bg-green-100 px-2 py-1 rounded text-xs ml-1">P-4NN48117TN603974LNCGHUTA</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
