"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    lembrar: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  useEffect(() => {
    // Verificar se o usuário acabou de se cadastrar
    const registered = searchParams.get("registered")
    if (registered === "true") {
      setShowSuccessMessage(true)
      // Esconder a mensagem após 5 segundos
      const timer = setTimeout(() => {
        setShowSuccessMessage(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.senha) {
      newErrors.senha = "Senha é obrigatória"
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
      // Simulação de autenticação
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Login com:", formData)

      // Redirecionar para dashboard ou página inicial
      router.push("/")
    } catch (error) {
      console.error("Erro ao fazer login:", error)
      setErrors({ form: "Email ou senha incorretos. Tente novamente." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Header />

      <section className="flex-1 py-12 px-6 flex items-center justify-center">
        <div className="w-full max-w-md">
          {showSuccessMessage && (
            <div className="bg-green-600 text-white p-4 rounded mb-6 text-center">
              Cadastro realizado com sucesso! Faça login para continuar.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            {errors.form && <div className="bg-red-500 text-white p-3 rounded mb-4">{errors.form}</div>}

            <div className="space-y-4">
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
                  className={`w-full px-4 py-2 rounded bg-gray-800 border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

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
                  className={`w-full px-4 py-2 rounded bg-gray-800 border ${
                    errors.senha ? "border-red-500" : "border-gray-700"
                  }`}
                />
                {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha}</p>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="lembrar"
                    name="lembrar"
                    checked={formData.lembrar}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="lembrar" className="text-sm">
                    Lembrar de mim
                  </label>
                </div>
                <Link href="#" className="text-primary text-sm hover:underline">
                  Esqueceu a senha?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-black font-medium py-2 px-4 rounded hover:bg-yellow-500 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Entrando..." : "Entrar"}
              </button>
            </div>

            <div className="mt-6 text-center">
              <p>
                Não tem uma conta?{" "}
                <Link href="/cadastro" className="text-primary hover:underline">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-primary py-4 px-6 text-black text-center">
        <p>&copy; {new Date().getFullYear()} Axis Team - Todos os direitos reservados</p>
      </footer>
    </main>
  )
}
