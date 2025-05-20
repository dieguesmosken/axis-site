import DashboardLayout from "@/components/dashboard-layout"
import ChartCard from "@/components/dashboard/chart-card"
import AlertCard from "@/components/dashboard/alert-card"

export default function MonitoramentoPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Monitoramento</h1>
        <p className="text-gray-400">Acompanhe os indicadores da sua plantação</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Saúde da Plantação por Área">
          <div className="h-80 flex items-center justify-center bg-gray-800 rounded-lg">
            <p className="text-gray-400">Gráfico de Saúde por Área</p>
          </div>
        </ChartCard>
        <ChartCard title="Histórico de Detecções">
          <div className="h-80 flex items-center justify-center bg-gray-800 rounded-lg">
            <p className="text-gray-400">Gráfico de Histórico de Detecções</p>
          </div>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ChartCard title="Umidade do Solo">
          <div className="h-64 flex items-center justify-center bg-gray-800 rounded-lg">
            <p className="text-gray-400">Gráfico de Umidade do Solo</p>
          </div>
        </ChartCard>
        <ChartCard title="Temperatura">
          <div className="h-64 flex items-center justify-center bg-gray-800 rounded-lg">
            <p className="text-gray-400">Gráfico de Temperatura</p>
          </div>
        </ChartCard>
        <ChartCard title="Precipitação">
          <div className="h-64 flex items-center justify-center bg-gray-800 rounded-lg">
            <p className="text-gray-400">Gráfico de Precipitação</p>
          </div>
        </ChartCard>
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">Áreas Monitoradas</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Área</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Tamanho
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Saúde
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Última Verificação
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Área Norte</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">3.2 hectares</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                    <span className="ml-2">92%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Hoje, 08:30</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                    Saudável
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Área Sul</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">4.5 hectares</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                    <span className="ml-2">78%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Hoje, 09:15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900 text-yellow-300">
                    Atenção
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Área Leste</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">2.8 hectares</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="ml-2">85%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Ontem, 16:45</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                    Saudável
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Área Oeste</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">2.0 hectares</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                    <span className="ml-2">45%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Hoje, 07:30</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900 text-red-300">
                    Crítico
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-6">
        <AlertCard
          type="warning"
          title="Alerta de Xanthomonas"
          message="Detectamos possíveis sinais de Xanthomonas na Área Oeste. Recomendamos verificação imediata e aplicação do tratamento recomendado."
        />
      </div>
    </DashboardLayout>
  )
}
