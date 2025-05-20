"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import DashboardLayout from "@/components/dashboard-layout"

interface Mensagem {
  id: number
  remetente: {
    nome: string
    avatar: string
    online?: boolean
  }
  conteudo: string
  data: string
  lida: boolean
}

export default function MensagensPage() {
  const [activeChat, setActiveChat] = useState<number | null>(1)
  const [mensagem, setMensagem] = useState("")

  const contatos = [
    {
      id: 1,
      nome: "Dr. Carlos Mendes",
      cargo: "Agrônomo",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
      ultimaMensagem: "Vamos analisar as amostras que você enviou.",
      horario: "09:45",
      naoLidas: 2,
    },
    {
      id: 2,
      nome: "Ana Souza",
      cargo: "Técnica Agrícola",
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
      ultimaMensagem: "Estarei visitando sua propriedade amanhã.",
      horario: "Ontem",
      naoLidas: 0,
    },
    {
      id: 3,
      nome: "Suporte Técnico",
      cargo: "Equipe Axis",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
      ultimaMensagem: "Como podemos ajudar com o aplicativo?",
      horario: "Seg",
      naoLidas: 0,
    },
  ]

  const mensagens: Record<number, Mensagem[]> = {
    1: [
      {
        id: 1,
        remetente: {
          nome: "Dr. Carlos Mendes",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        conteudo: "Olá João, como está a situação da sua plantação?",
        data: "09:30",
        lida: true,
      },
      {
        id: 2,
        remetente: {
          nome: "João Silva",
          avatar: "/placeholder.svg?height=40&width=40",
          online: true,
        },
        conteudo:
          "Olá Dr. Carlos, estou preocupado com algumas manchas que apareceram nas folhas da mandioca na área oeste.",
        data: "09:32",
        lida: true,
      },
      {
        id: 3,
        remetente: {
          nome: "Dr. Carlos Mendes",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        conteudo: "Você poderia enviar algumas fotos para que eu possa analisar?",
        data: "09:35",
        lida: true,
      },
      {
        id: 4,
        remetente: {
          nome: "João Silva",
          avatar: "/placeholder.svg?height=40&width=40",
          online: true,
        },
        conteudo: "Claro, acabei de enviar pelo aplicativo.",
        data: "09:40",
        lida: true,
      },
      {
        id: 5,
        remetente: {
          nome: "Dr. Carlos Mendes",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        conteudo:
          "Recebi as imagens. Vamos analisar as amostras que você enviou e te retorno ainda hoje com um diagnóstico preliminar.",
        data: "09:45",
        lida: false,
      },
      {
        id: 6,
        remetente: {
          nome: "Dr. Carlos Mendes",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        conteudo: "Enquanto isso, recomendo isolar a área afetada para evitar a propagação caso seja Xanthomonas.",
        data: "09:45",
        lida: false,
      },
    ],
    2: [
      {
        id: 1,
        remetente: {
          nome: "Ana Souza",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        conteudo: "Olá João, tudo bem?",
        data: "Ontem",
        lida: true,
      },
      {
        id: 2,
        remetente: {
          nome: "Ana Souza",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        conteudo: "Estarei visitando sua propriedade amanhã para fazer a inspeção de rotina.",
        data: "Ontem",
        lida: true,
      },
    ],
    3: [
      {
        id: 1,
        remetente: {
          nome: "Suporte Técnico",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        conteudo: "Olá João, bem-vindo ao aplicativo Axis!",
        data: "Seg",
        lida: true,
      },
      {
        id: 2,
        remetente: {
          nome: "Suporte Técnico",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        conteudo: "Como podemos ajudar com o aplicativo? Estamos à disposição para qualquer dúvida.",
        data: "Seg",
        lida: true,
      },
    ],
  }

  const handleEnviarMensagem = (e: React.FormEvent) => {
    e.preventDefault()
    if (!mensagem.trim() || !activeChat) return

    // Simulação de envio de mensagem
    const novaMensagem: Mensagem = {
      id: Date.now(),
      remetente: {
        nome: "João Silva",
        avatar: "/placeholder.svg?height=40&width=40",
        online: true,
      },
      conteudo: mensagem,
      data: "Agora",
      lida: true,
    }

    // Atualizar o estado (em uma aplicação real, isso seria feito via API)
    mensagens[activeChat] = [...(mensagens[activeChat] || []), novaMensagem]
    setMensagem("")
  }

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Mensagens</h1>
        <p className="text-gray-400">Converse com técnicos e especialistas</p>
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="flex h-[600px]">
          {/* Lista de contatos */}
          <div className="w-1/3 border-r border-gray-800">
            <div className="p-4 border-b border-gray-800">
              <input
                type="text"
                placeholder="Pesquisar contatos..."
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>
            <div className="overflow-y-auto h-[calc(600px-64px)]">
              {contatos.map((contato) => (
                <div
                  key={contato.id}
                  className={`p-4 border-b border-gray-800 cursor-pointer hover:bg-gray-800 ${
                    activeChat === contato.id ? "bg-gray-800" : ""
                  }`}
                  onClick={() => setActiveChat(contato.id)}
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <Image
                        src={contato.avatar || "/placeholder.svg"}
                        alt={contato.nome}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      {contato.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></span>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium">{contato.nome}</h3>
                        <span className="text-xs text-gray-400">{contato.horario}</span>
                      </div>
                      <p className="text-xs text-gray-400">{contato.cargo}</p>
                      <p className="text-xs truncate mt-1">{contato.ultimaMensagem}</p>
                    </div>
                    {contato.naoLidas > 0 && (
                      <span className="ml-2 bg-primary text-black text-xs font-medium px-2 py-0.5 rounded-full">
                        {contato.naoLidas}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Área de chat */}
          <div className="w-2/3 flex flex-col">
            {activeChat ? (
              <>
                {/* Cabeçalho do chat */}
                <div className="p-4 border-b border-gray-800 flex items-center">
                  <div className="relative">
                    <Image
                      src={
                        contatos.find((c) => c.id === activeChat)?.avatar ||
                        "/placeholder.svg?height=40&width=40" ||
                        "/placeholder.svg"
                      }
                      alt={contatos.find((c) => c.id === activeChat)?.nome || ""}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    {contatos.find((c) => c.id === activeChat)?.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></span>
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">{contatos.find((c) => c.id === activeChat)?.nome}</h3>
                    <p className="text-xs text-gray-400">{contatos.find((c) => c.id === activeChat)?.cargo}</p>
                  </div>
                </div>

                {/* Mensagens */}
                <div className="flex-1 p-4 overflow-y-auto">
                  {mensagens[activeChat]?.map((msg) => (
                    <div key={msg.id} className={`mb-4 flex ${msg.remetente.online ? "justify-end" : "justify-start"}`}>
                      {!msg.remetente.online && (
                        <div className="mr-2 flex-shrink-0">
                          <Image
                            src={msg.remetente.avatar || "/placeholder.svg"}
                            alt={msg.remetente.nome}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          msg.remetente.online ? "bg-primary text-black" : "bg-gray-800 text-white"
                        }`}
                      >
                        <p className="text-sm">{msg.conteudo}</p>
                        <p className="text-xs mt-1 opacity-70 text-right">{msg.data}</p>
                      </div>
                      {msg.remetente.online && (
                        <div className="ml-2 flex-shrink-0">
                          <Image
                            src={msg.remetente.avatar || "/placeholder.svg"}
                            alt={msg.remetente.nome}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Formulário de envio */}
                <form onSubmit={handleEnviarMensagem} className="p-4 border-t border-gray-800">
                  <div className="flex">
                    <button type="button" className="p-2 rounded-l bg-gray-800 text-gray-400 hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      placeholder="Digite sua mensagem..."
                      className="flex-1 px-4 py-2 bg-gray-800 border-y border-gray-700"
                    />
                    <button type="submit" className="p-2 rounded-r bg-primary text-black hover:bg-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Suas mensagens</h3>
                  <p className="text-sm text-gray-400">Selecione um contato para iniciar uma conversa</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
