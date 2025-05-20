import type React from "react"
interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
  change?: {
    value: string
    positive: boolean
  }
}

export default function StatCard({ title, value, icon, change }: StatCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              <span className={`text-xs font-medium ${change.positive ? "text-green-500" : "text-red-500"}`}>
                {change.positive ? "+" : "-"} {change.value}
              </span>
              <span className="text-xs text-gray-400 ml-1">vs. mês anterior</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-primary bg-opacity-20 rounded-full">
          <div className="text-primary">{icon}</div>
        </div>
      </div>
    </div>
  )
}
