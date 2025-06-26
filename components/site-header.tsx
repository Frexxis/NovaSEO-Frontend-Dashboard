"use client"

import * as React from "react"
import { BrainCircuitIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

import { useAISidebar } from "@/lib/ai-sidebar-context"

export function SiteHeader() {
  const { toggleSidebar, open } = useAISidebar()

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-14 flex h-14 sm:h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-2 px-3 sm:gap-1 sm:px-4 lg:gap-2 lg:px-6">
        {/* Mobile Optimized Sidebar Trigger */}
        <SidebarTrigger className="-ml-1 h-9 w-9 sm:h-7 sm:w-7" />
        <Separator orientation="vertical" className="mx-1 sm:mx-2 data-[orientation=vertical]:h-4" />
        
        {/* Responsive Title Section */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <h1 className="text-sm font-medium sm:text-base">
            <span className="sm:hidden">Nova SEO</span>
            <span className="hidden sm:inline">SEO Paneli</span>
          </h1>
          <Badge 
            variant="secondary" 
            className="text-[10px] px-1.5 py-0.5 sm:text-xs sm:px-2 sm:py-1"
          >
            <span className="sm:hidden">AI</span>
            <span className="hidden sm:inline">AI Destekli</span>
          </Badge>
        </div>

        {/* Mobile-Optimized AI Assistant Button */}
        <div className="ml-auto flex items-center">
          <Button 
            variant="outline" 
            size="sm" 
            className={`gap-1.5 h-8 px-2 sm:gap-2 sm:h-9 sm:px-3 lg:px-4 hover:bg-blue-50 dark:hover:bg-blue-950/50 border-blue-200 dark:border-blue-800 transition-colors ${
              open ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300' : ''
            }`}
            onClick={toggleSidebar}
          >
            <BrainCircuitIcon className="size-3.5 sm:size-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span className="hidden xs:inline text-xs sm:text-sm">AI</span>
            <span className="hidden sm:inline text-xs sm:text-sm">Assistant</span>
            <Badge 
              variant="secondary" 
              className="bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 text-[9px] px-1 py-0 sm:text-[10px] sm:px-1.5 sm:py-0.5 shrink-0"
            >
              {open ? 'Açık' : 'Live'}
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  )
}