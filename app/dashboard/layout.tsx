"use client"

import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { AISidebar } from "@/components/ai-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AISidebarProvider } from "@/lib/ai-sidebar-context"

function DashboardContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh w-full">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset className="flex flex-col flex-1">
          <SiteHeader />
          <main className="flex-1 p-3 sm:p-4 lg:p-6">
            <div className="mx-auto max-w-full lg:max-w-[1600px] w-full">
              {children}
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
      
      {/* AI Sidebar - 3. sütun olarak normal layout */}
      <AISidebar />
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AISidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </AISidebarProvider>
  )
}