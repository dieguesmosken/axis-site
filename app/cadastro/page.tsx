"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import { useRouter } from "next/navigation"

export default function CadastroPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    cidade: "",
    estado: "",
    tipoProdutor: "pequeno",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.senha) {
      newErrors.senha = "Senha é obrigatória"
    } else if (formData.senha.length < 6) {
      newErrors.senha = "A senha deve ter pelo menos 6 caracteres"
    }

    if (formData.senha !== formData.confirmarSenha) {
      newErrors.confirmarSenha = "As senhas não coincidem"
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório"
    }

    if (!formData.cidade.trim()) {
      newErrors.cidade = "Cidade é obrigatória"
    }

    if (!formData.estado.trim()) {
      newErrors.estado = "Estado é obrigatório"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulação de envio para API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Dados enviados:", formData)

      // Redirecionar para página de sucesso ou login
      router.push("/login?registered=true")
    } catch (error) {
      console.error("Erro ao cadastrar:", error)
      setErrors({ form: "Ocorreu um erro ao processar seu cadastro. Tente novamente." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Header />

      <section className="flex-1 py-12 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>

          {errors.form && <div className="bg-red-500 text-white p-3 rounded mb-4">{errors.form}</div>}

          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-8"
          >
            <div>
              <label htmlFor="nome" className="block mb-1 font-medium">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded bg-gray-700 border ${
                  errors.nome ? "border-red-500" : "border-gray-600"
                }`}
              />
              {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded bg-gray-700 border ${
                  errors.email ? "border-red-500" : "border-gray-600"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="senha" className="block mb-1 font-medium">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded bg-gray-700 border ${
                    errors.senha ? "border-red-500" : "border-gray-600"
                  }`}
                />
                {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha}</p>}
              </div>

              <div>
                <label htmlFor="confirmarSenha" className="block mb-1 font-medium">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded bg-gray-700 border ${
                    errors.confirmarSenha ? "border-red-500" : "border-gray-600"
                  }`}
                />
                {errors.confirmarSenha && <p className="text-red-500 text-sm mt-1">{errors.confirmarSenha}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="telefone" className="block mb-1 font-medium">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded bg-gray-700 border ${
                  errors.telefone ? "border-red-500" : "border-gray-600"
                }`}
              />
              {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cidade" className="block mb-1 font-medium">
                  Cidade
                </label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded bg-gray-700 border ${
                    errors.cidade ? "border-red-500" : "border-gray-600"
                  }`}
                />
                {errors.cidade && <p className="text-red-500 text-sm mt-1">{errors.cidade}</p>}
              </div>

              <div>
                <label htmlFor="estado" className="block mb-1 font-medium">
                  Estado
                </label>
                <input
                  type="text"
                  id="estado"
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded bg-gray-700 border ${
                    errors.estado ? "border-red-500" : "border-gray-600"
                  }`}
                />
                {errors.estado && <p className="text-red-500 text-sm mt-1">{errors.estado}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="tipoProdutor" className="block mb-1 font-medium">
                Tipo de Produtor
              </label>
              <select
                id="tipoProdutor"
                name="tipoProdutor"
                value={formData.tipoProdutor}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600"
              >
                <option value="pequeno">Pequeno Produtor</option>
                <option value="medio">Médio Produtor</option>
                <option value="grande">Grande Produtor</option>
                <option value="cooperativa">Cooperativa</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-black font-medium py-2 px-4 rounded hover:bg-yellow-500 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? "Processando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-primary py-4 px-6 text-black text-center">
        <p>&copy; {new Date().getFullYear()} Axis Team - Todos os direitos reservados</p>
      </footer>
    </main>
  )
}
