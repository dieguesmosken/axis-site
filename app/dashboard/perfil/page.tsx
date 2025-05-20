"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import DashboardLayout from "@/components/dashboard-layout"

export default function PerfilPage() {
  const [formData, setFormData] = useState({
    nome: "João Silva",
    email: "joao.silva@exemplo.com",
    telefone: "(13) 99999-9999",
    cidade: "Registro",
    estado: "SP",
    tipoProdutor: "medio",
    tamanhoPropriedade: "15",
    culturas: "Mandioca, Milho",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de salvamento
    alert("Perfil atualizado com sucesso!")
  }

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Perfil</h1>
        <p className="text-gray-400">Gerencie suas informações pessoais</p>
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-gray-800 border-b border-gray-700">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="relative w-24 h-24 mb-4 sm:mb-0 sm:mr-6">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="Avatar"
                fill
                className="rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-primary text-black p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h2 className="text-xl font-bold">{formData.nome}</h2>
              <p className="text-gray-400">{formData.email}</p>
              <p className="text-sm text-primary mt-1">Produtor desde Maio 2023</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nome" className="block mb-1 text-sm font-medium">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block mb-1 text-sm font-medium">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>

            <div>
              <label htmlFor="cidade" className="block mb-1 text-sm font-medium">
                Cidade
              </label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>

            <div>
              <label htmlFor="estado" className="block mb-1 text-sm font-medium">
                Estado
              </label>
              <input
                type="text"
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>

            <div>
              <label htmlFor="tipoProdutor" className="block mb-1 text-sm font-medium">
                Tipo de Produtor
              </label>
              <select
                id="tipoProdutor"
                name="tipoProdutor"
                value={formData.tipoProdutor}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
              >
                <option value="pequeno">Pequeno Produtor</option>
                <option value="medio">Médio Produtor</option>
                <option value="grande">Grande Produtor</option>
                <option value="cooperativa">Cooperativa</option>
              </select>
            </div>

            <div>
              <label htmlFor="tamanhoPropriedade" className="block mb-1 text-sm font-medium">
                Tamanho da Propriedade (hectares)
              </label>
              <input
                type="number"
                id="tamanhoPropriedade"
                name="tamanhoPropriedade"
                value={formData.tamanhoPropriedade}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="culturas" className="block mb-1 text-sm font-medium">
                Culturas Plantadas
              </label>
              <textarea
                id="culturas"
                name="culturas"
                value={formData.culturas}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
              ></textarea>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button type="button" className="px-4 py-2 mr-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-700">
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 rounded bg-primary text-black font-medium hover:bg-yellow-500">
              Salvar Alterações
            </button>
          </div>
        </form>

        <div className="p-6 bg-gray-800 border-t border-gray-700">
          <h3 className="text-lg font-medium mb-4">Segurança da Conta</h3>
          <div className="space-y-4">
            <button className="text-primary hover:underline">Alterar senha</button>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Autenticação de dois fatores</p>
                <p className="text-sm text-gray-400">Adicione uma camada extra de segurança</p>
              </div>
              <button className="px-4 py-2 rounded bg-gray-700 text-gray-300 hover:bg-gray-600">Ativar</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
