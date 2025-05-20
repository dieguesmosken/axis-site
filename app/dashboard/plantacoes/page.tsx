import Image from "next/image"
import DashboardLayout from "@/components/dashboard-layout"
import AlertCard from "@/components/dashboard/alert-card"

export default function PlantacoesPage() {
  const plantacoes = [
    {
      id: 1,
      nome: "Plantação Norte",
      area: "3.2 hectares",
      dataPlantio: "15/01/2023",
      previsaoColheita: "15/07/2023",
      status: "saudavel",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      nome: "Plantação Sul",
      area: "4.5 hectares",
      dataPlantio: "10/02/2023",
      previsaoColheita: "10/08/2023",
      status: "atencao",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      nome: "Plantação Leste",
      area: "2.8 hectares",
      dataPlantio: "05/03/2023",
      previsaoColheita: "05/09/2023",
      status: "saudavel",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      nome: "Plantação Oeste",
      area: "2.0 hectares",
      dataPlantio: "20/02/2023",
      previsaoColheita: "20/08/2023",
      status: "critico",
      imagem: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "saudavel":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-900 text-green-300">Saudável</span>
        )
      case "atencao":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-900 text-yellow-300">Atenção</span>
        )
      case "critico":
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-900 text-red-300">Crítico</span>
      default:
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-700 text-gray-300">Desconhecido</span>
        )
    }
  }

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Plantações</h1>
          <p className="text-gray-400">Gerencie suas áreas de plantio</p>
        </div>
        <button className="px-4 py-2 rounded bg-primary text-black font-medium hover:bg-yellow-500">
          Nova Plantação
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {plantacoes.map((plantacao) => (
          <div key={plantacao.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image src={plantacao.imagem || "/placeholder.svg"} alt={plantacao.nome} fill className="object-cover" />
              <div className="absolute top-2 right-2">{getStatusBadge(plantacao.status)}</div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">{plantacao.nome}</h3>
              <div className="mt-2 space-y-1">
                <p className="text-sm">
                  <span className="text-gray-400">Área:</span> {plantacao.area}
                </p>
                <p className="text-sm">
                  <span className="text-gray-400">Data de Plantio:</span> {plantacao.dataPlantio}
                </p>
                <p className="text-sm">
                  <span className="text-gray-400">Previsão de Colheita:</span> {plantacao.previsaoColheita}
                </p>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="px-3 py-1 text-sm rounded bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Detalhes
                </button>
                <button className="px-3 py-1 text-sm rounded bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Editar
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Card para adicionar nova plantação */}
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border-2 border-dashed border-gray-700 flex items-center justify-center h-[300px]">
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Adicionar Plantação</h3>
            <p className="text-sm text-gray-400 mb-4">Registre uma nova área de plantio para monitoramento</p>
            <button className="px-4 py-2 rounded bg-primary text-black font-medium hover:bg-yellow-500">
              Nova Plantação
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <AlertCard
          type="info"
          title="Dica de Plantio"
          message="O período ideal para o plantio de mandioca na região de Registro é entre setembro e novembro, aproveitando o início das chuvas."
        />
        <AlertCard
          type="warning"
          title="Alerta de Xanthomonas"
          message="Detectamos possíveis sinais de Xanthomonas na Plantação Oeste. Recomendamos verificação imediata."
        />
      </div>
    </DashboardLayout>
  )
}
