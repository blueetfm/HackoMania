"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'

export default function DonatePage() {
  const [amount, setAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const handleDonate = async () => {
    setIsProcessing(true)
    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      })

      const data = await response.json()

      if (data.success) {
        // Redirect to a payment status page
        router.push(`/payment-status?id=${data.paymentDetails.id}`)
      } else {
        throw new Error(data.error || 'Payment failed')
      }
    } catch (error) {
      console.error('Donation error:', error)
      alert('There was an error processing your donation. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Make a Donation</h1>
      <div className="w-full max-w-md">
        <Label htmlFor="amount">Donation Amount ($)</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="mb-4"
        />
        <Button onClick={handleDonate} className="w-full" disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Donate'}
        </Button>
      </div>
    </div>
  )
}
