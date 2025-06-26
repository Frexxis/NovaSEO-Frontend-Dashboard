"use client"

import Link from "next/link"
import { BotIcon, PlusCircleIcon, type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

interface NavGroup {
  title: string
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}

export function NavMain({
  navigation,
  currentPath,
}: {
  navigation: NavGroup[]
  currentPath?: string
}) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {/* AI Assistant Quick Action - Mobile Optimized */}
      <SidebarMenu>
        <SidebarMenuItem className="flex items-center gap-2">
          <SidebarMenuButton
            asChild
            tooltip="AI SEO Assistant"
            className="min-w-8 bg-primary text-primary-foreground hover:bg-primary/90 h-10 sm:h-11 touch-target"
          >
            <Link href="/dashboard/ai-assistant">
              <BotIcon className="size-4 sm:size-5" />
              <span className="font-medium">AI Assistant</span>
            </Link>
          </SidebarMenuButton>
          <Button 
            size="icon" 
            className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 group-data-[collapsible=icon]:opacity-0 touch-target" 
            variant="outline"
          >
            <PlusCircleIcon className="size-4 sm:size-5" />
            <span className="sr-only">Quick Actions</span>
          </Button>
        </SidebarMenuItem>
      </SidebarMenu>

      {/* Navigation Groups - Mobile Optimized */}
      {navigation.map((group) => (
        <SidebarGroup key={group.title}>
          <div className="px-3 text-[10px] sm:text-xs font-semibold uppercase text-muted-foreground tracking-wider">
            {group.title}
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className={cn(
                      "h-10 sm:h-11 touch-target transition-colors duration-200",
                      currentPath === item.url && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    )}
                  >
                    <Link href={item.url}>
                      {item.icon && <item.icon className="size-4 sm:size-5 shrink-0" />}
                      <span className="text-sm sm:text-base truncate">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </div>
  )
}