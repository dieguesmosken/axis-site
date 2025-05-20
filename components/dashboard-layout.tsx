"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { BarChart3, Home, Leaf, LogOut, Menu, MessageSquare, Settings, User, X } from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Início", href: "/dashboard", icon: Home },
    { name: "Monitoramento", href: "/dashboard/monitoramento", icon: BarChart3 },
    { name: "Plantações", href: "/dashboard/plantacoes", icon: Leaf },
    { name: "Mensagens", href: "/dashboard/mensagens", icon: MessageSquare },
    { name: "Perfil", href: "/dashboard/perfil", icon: User },
    { name: "Configurações", href: "/dashboard/configuracoes", icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-dark">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-70 transition-opacity lg:hidden ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
          <div className="flex items-center">
            <div className="relative w-8 h-8 mr-2">
              <Image src="/placeholder.svg?height=32&width=32" alt="Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold tracking-wider text-white">AXIS</span>
          </div>
          <button
            className="p-1 rounded-md text-gray-400 hover:text-white lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-2 py-4">
          <div className="px-4 py-3 mb-6 bg-gray-800 rounded-lg">
            <div className="flex items-center">
              <div className="relative w-10 h-10 mr-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Avatar"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-white">João Silva</p>
                <p className="text-xs text-gray-400">Produtor</p>
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    isActive ? "bg-primary text-black" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
          <Link
            href="/login"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-800 hover:text-white"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Sair
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-gray-900 shadow-md">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              className="p-1 rounded-md text-gray-400 hover:text-white lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center">
              <span className="text-white font-medium lg:hidden">Dashboard</span>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-400 hover:text-white">
                <span className="sr-only">Notificações</span>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-dark p-4">{children}</main>
      </div>
    </div>
  )
}
