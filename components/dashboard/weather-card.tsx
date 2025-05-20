import { Cloud, CloudRain, Sun } from "lucide-react"

interface WeatherCardProps {
  location: string
  temperature: number
  condition: "sunny" | "cloudy" | "rainy"
  humidity: number
  wind: number
}

export default function WeatherCard({ location, temperature, condition, humidity, wind }: WeatherCardProps) {
  const getWeatherIcon = () => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-10 w-10 text-yellow-400" />
      case "cloudy":
        return <Cloud className="h-10 w-10 text-gray-400" />
      case "rainy":
        return <CloudRain className="h-10 w-10 text-blue-400" />
    }
  }

  const getConditionText = () => {
    switch (condition) {
      case "sunny":
        return "Ensolarado"
      case "cloudy":
        return "Nublado"
      case "rainy":
        return "Chuvoso"
    }
  }

  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Clima</h3>
        <span className="text-sm text-gray-400">{location}</span>
      </div>
      <div className="flex items-center">
        {getWeatherIcon()}
        <div className="ml-4">
          <div className="text-3xl font-bold">{temperature}°C</div>
          <div className="text-sm text-gray-400">{getConditionText()}</div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-400">Umidade</p>
          <p className="text-lg font-medium">{humidity}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Vento</p>
          <p className="text-lg font-medium">{wind} km/h</p>
        </div>
      </div>
    </div>
  )
}
