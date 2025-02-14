"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// This would typically come from your backend
const fetchDonationData = async () => {
  // Simulating an API call
  return [
    { id: 1, name: "Group A", progress: Math.random() * 100, funds: Math.random() * 2000 },
    { id: 2, name: "Group B", progress: Math.random() * 100, funds: Math.random() * 2000 },
    { id: 3, name: "Group C", progress: Math.random() * 100, funds: Math.random() * 2000 },
  ]
}

export default function Dashboard() {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchDonationData()
      setGroups(data)
    }
    loadData()
  }, [])

  const distributeAdditionalFunds = async () => {
    // In a real application, this would call your backend to distribute funds
    const updatedGroups = await fetchDonationData()
    setGroups(updatedGroups)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Recovery Group Dashboard</h1>
      <div className="space-y-6">
        {groups.map((group) => (
          <div key={group.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{group.name}</h2>
            <div className="flex items-center space-x-4">
              <div className="w-1/2">
                <p className="text-sm text-gray-500 mb-1">Progress</p>
                <Progress value={group.progress} className="w-full" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Funds Allocated</p>
                <p className="text-lg font-bold">${group.funds.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button onClick={distributeAdditionalFunds} className="mt-6">
        Distribute Additional Funds
      </Button>
    </div>
  )
}

