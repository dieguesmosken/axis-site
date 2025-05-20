import { BarChart3, Droplets, Leaf, ThermometerSun } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import StatCard from "@/components/dashboard/stat-card"
import ChartCard from "@/components/dashboard/chart-card"
import AlertCard from "@/components/dashboard/alert-card"
import TaskList from "@/components/dashboard/task-list"
import WeatherCard from "@/components/dashboard/weather-card"

export default function DashboardPage() {
  // Dados simulados para tarefas
  const tasks = [
    {
      id: "1",
      title: "Aplicar tratamento preventivo",
      dueDate: "Hoje",
      priority: "high",
      completed: false,
    },
    {
      id: "2",
      title: "Verificar sistema de irrigação",
      dueDate: "Amanhã",
      priority: "medium",
      completed: false,
    },
    {
      id: "3",
      title: "Registrar crescimento das plantas",
      dueDate: "25/05/2023",
      priority: "low",
      completed: true,
    },
    {
      id: "4",
      title: "Analisar amostras de solo",
      dueDate: "27/05/2023",
      priority: "medium",
      completed: false,
    },
  ] as const

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Olá, João!</h1>
        <p className="text-gray-400">Bem-vindo ao seu painel de controle</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Área Total Plantada"
          value="12.5 hectares"
          icon={<Leaf className="h-6 w-6" />}
          change={{ value: "5%", positive: true }}
        />
        <StatCard
          title="Saúde da Plantação"
          value="87%"
          icon={<BarChart3 className="h-6 w-6" />}
          change={{ value: "3%", positive: true }}
        />
        <StatCard title="Temperatura Média" value="24°C" icon={<ThermometerSun className="h-6 w-6" />} />
        <StatCard
          title="Umidade do Solo"
          value="65%"
          icon={<Droplets className="h-6 w-6" />}
          change={{ value: "2%", positive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ChartCard title="Saúde da Plantação (Últimos 30 dias)" className="lg:col-span-2">
          <div className="h-64 flex items-center justify-center bg-gray-800 rounded-lg">
            <p className="text-gray-400">Gráfico de Saúde da Plantação</p>
          </div>
        </ChartCard>
        <WeatherCard location="Registro, SP" temperature={24} condition="sunny" humidity={65} wind={12} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TaskList tasks={tasks} />
        </div>
        <div className="space-y-6">
          <AlertCard
            type="warning"
            title="Alerta de Xanthomonas"
            message="Detectamos possíveis sinais de Xanthomonas na área sul da sua plantação. Recomendamos verificação imediata."
          />
          <AlertCard
            type="info"
            title="Previsão de Chuva"
            message="Há previsão de chuvas intensas nos próximos 3 dias. Considere ajustar seu cronograma de irrigação."
          />
          <AlertCard
            type="success"
            title="Tratamento Concluído"
            message="O tratamento preventivo aplicado na semana passada foi concluído com sucesso."
          />
        </div>
      </div>
    </DashboardLayout>
  )
}
