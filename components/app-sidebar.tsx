"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3Icon,
  BrainCircuitIcon,
  KeyIcon,
  LinkIcon,
  UsersIcon,
  WrenchIcon,
  TargetIcon,
  ClipboardListIcon,
  FileTextIcon,
  SettingsIcon,
  ExternalLinkIcon,
  MapPinIcon,
  StoreIcon,
  SparklesIcon,
  LayoutGridIcon,
  BellIcon,
  KanbanSquareIcon,
  BotIcon,
  PlusCircleIcon,
  CheckCheckIcon,
  SearchIcon,
  FileSearchIcon,
  ShareIcon,
  ZapIcon,
  TrendingUpIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const user = {
  name: "Sarah Chen",
  email: "sarah@seomaster.com",
  avatar: "/placeholder-user.jpg",
}

const navigation = [
  {
    title: "Ana Yönetim",
    items: [
      {
        title: "Kontrol Paneli",
        url: "/dashboard",
        icon: LayoutGridIcon,
      },
      {
        title: "Aksiyon Merkezi",
        url: "/dashboard/action-center",
        icon: CheckCheckIcon,
      },
    ],
  },
  {
    title: "Pazar Araştırması",
    items: [
      {
        title: "Rakip Analizi",
        url: "/dashboard/competitors",
        icon: UsersIcon,
      },
      {
        title: "Organik Araştırma",
        url: "/dashboard/organic-research",
        icon: TrendingUpIcon,
      },
      {
        title: "Anahtar Kelime Araştırması",
        url: "/dashboard/keywords",
        icon: KeyIcon,
      },
      {
        title: "Backlink Analizi",
        url: "/dashboard/backlinks",
        icon: LinkIcon,
      },
      {
        title: "Marka Monitörü",
        url: "/dashboard/brand-monitor",
        icon: BellIcon,
      },
    ],
  },
  {
    title: "Site Optimizasyonu",
    items: [
      {
        title: "Site Denetimi",
        url: "/dashboard/audit",
        icon: WrenchIcon,
      },
      {
        title: "Teknik SEO",
        url: "/dashboard/technical-seo",
        icon: WrenchIcon,
      },
      {
        title: "Core Web Vitals",
        url: "/dashboard/core-web-vitals",
        icon: ZapIcon,
      },
      {
        title: "Yerel SEO",
        url: "/dashboard/local-seo",
        icon: MapPinIcon,
      },
      {
        title: "Pazar Yeri SEO",
        url: "/dashboard/marketplace-seo",
        icon: StoreIcon,
      },
    ],
  },
  {
    title: "İçerik Stratejisi",
    items: [
      {
        title: "İçerik Kümesi Stratejisti",
        url: "/dashboard/content-clusters",
        icon: BrainCircuitIcon,
      },
      {
        title: "İçerik Boşluk Analizi",
        url: "/dashboard/content-gap-analysis",
        icon: FileSearchIcon,
      },
      {
        title: "Link Building Kampanyaları",
        url: "/dashboard/link-building-manager",
        icon: ShareIcon,
      },
      {
        title: "İçerik Takvimi",
        url: "/dashboard/content", // Assuming this is the calendar
        icon: FileTextIcon,
      },
    ],
  },
  {
    title: "Performans Takibi",
    items: [
      {
        title: "Sıra Takibi",
        url: "/dashboard/tracking",
        icon: TargetIcon,
      },
      {
        title: "SERP Analiz Merkezi",
        url: "/dashboard/serp-analyzer",
        icon: SearchIcon,
      },
      {
        title: "Tahminsel Simülatoru",
        url: "/dashboard/predictive-seo",
        icon: SparklesIcon,
      },
      {
        title: "Raporlar",
        url: "/dashboard/reports",
        icon: BarChart3Icon,
      },
    ],
  },
  {
    title: "Proje ve Ayarlar",
    items: [
      {
        title: "Proje Panosu",
        url: "/dashboard/project-management",
        icon: KanbanSquareIcon,
      },
      {
        title: "AI İçgörüleri",
        url: "/dashboard/ai-insights",
        icon: SparklesIcon,
      },
      {
        title: "Ayarlar",
        url: "/dashboard/settings",
        icon: SettingsIcon,
      },
      {
        title: "Yardım Merkezi",
        url: "/dashboard/help",
        icon: ExternalLinkIcon,
      },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/dashboard">
                <BrainCircuitIcon className="h-5 w-5 text-primary" />
                <span className="text-base font-semibold">Nova SEO</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain navigation={navigation} currentPath={pathname} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}