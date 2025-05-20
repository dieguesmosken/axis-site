import { AlertCircle, CheckCircle, Info } from "lucide-react"

type AlertType = "info" | "warning" | "success"

interface AlertCardProps {
  type: AlertType
  title: string
  message: string
}

export default function AlertCard({ type, title, message }: AlertCardProps) {
  const getIcon = () => {
    switch (type) {
      case "info":
        return <Info className="h-5 w-5 text-blue-400" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-400" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-400" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case "info":
        return "bg-blue-900 bg-opacity-20"
      case "warning":
        return "bg-yellow-900 bg-opacity-20"
      case "success":
        return "bg-green-900 bg-opacity-20"
    }
  }

  return (
    <div className={`rounded-lg p-4 ${getBgColor()}`}>
      <div className="flex">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div className="ml-3">
          <h3 className="text-sm font-medium">{title}</h3>
          <div className="mt-2 text-sm opacity-80">{message}</div>
        </div>
      </div>
    </div>
  )
}
