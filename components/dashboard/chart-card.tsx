import type React from "react"
interface ChartCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function ChartCard({ title, children, className = "" }: ChartCardProps) {
  return (
    <div className={`bg-gray-900 rounded-lg p-6 shadow-lg ${className}`}>
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div>{children}</div>
    </div>
  )
}
