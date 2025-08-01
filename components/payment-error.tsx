"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { XCircle, RefreshCw, Phone } from "lucide-react"

interface PaymentErrorProps {
  onRetry?: () => void
  onClose?: () => void
}

export function PaymentError({ onRetry, onClose }: PaymentErrorProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <XCircle className="h-16 w-16 text-red-500" />
          </div>
          <CardTitle className="text-2xl text-red-600">Payment Failed</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">We couldn't process your payment. This could be due to:</p>

          <ul className="text-sm text-gray-600 text-left space-y-1">
            <li>• Insufficient funds</li>
            <li>• Card declined by bank</li>
            <li>• Network connection issue</li>
            <li>• PayPal account restrictions</li>
          </ul>

          <div className="pt-4 space-y-2">
            <Button onClick={onRetry} className="w-full bg-red-600 hover:bg-red-700">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              <Phone className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
            <Button variant="ghost" onClick={onClose} className="w-full">
              Close
            </Button>
          </div>

          <p className="text-xs text-gray-500 pt-2">
            Need help? Call us at +1 (555) 123-4567 or email support@fitprogym.com
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
