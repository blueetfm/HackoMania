import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Support Network Donation Platform</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Contribute micro-donations to recovery programs, peer mentors, and counseling services. Help individuals reach
        their milestones and support their journey to recovery.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/donate">Donate Now</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/dashboard">View Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}

