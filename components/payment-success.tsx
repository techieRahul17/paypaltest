"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Download, Calendar, CreditCard } from "lucide-react"

interface PaymentSuccessProps {
  subscriptionId?: string
  planName?: string
}

export function PaymentSuccess({ subscriptionId, planName = "Premium" }: PaymentSuccessProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl text-green-600">Payment Successful!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            Welcome to FitPro Gym! Your <strong>{planName}</strong> membership is now active.
          </p>

          {subscriptionId && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Subscription ID:</p>
              <p className="font-mono text-xs break-all">{subscriptionId}</p>
            </div>
          )}

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Monthly recurring billing</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CreditCard className="h-4 w-4" />
              <span>Managed by PayPal</span>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Download className="mr-2 h-4 w-4" />
              Download Membership Card
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              Access Member Portal
            </Button>
          </div>

          <p className="text-xs text-gray-500 pt-2">
            You'll receive a confirmation email shortly. You can manage your subscription anytime through your PayPal
            account.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
