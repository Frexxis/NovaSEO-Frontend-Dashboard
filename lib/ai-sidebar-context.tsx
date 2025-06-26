"use client"

import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"

type AISidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const AISidebarContext = React.createContext<AISidebarContext | null>(null)

export function useAISidebar() {
  const context = React.useContext(AISidebarContext)
  if (!context) {
    throw new Error("useAISidebar must be used within an AISidebarProvider.")
  }
  return context
}

const AISIDEBAR_COOKIE_NAME = "ai-sidebar:state"
const AISIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

export const AISidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = false,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // Cookie'den önceki durumu oku, ama varsayılan false olsun
    const getInitialState = React.useCallback(() => {
      if (typeof window === "undefined") return false // Server-side always false
      
      try {
        const cookie = document.cookie
          .split(";")
          .find(row => row.trim().startsWith(`${AISIDEBAR_COOKIE_NAME}=`))
        
        if (cookie) {
          const value = cookie.split("=")[1]
          return value === "true"
        }
      } catch (error) {
        console.warn("AI Sidebar cookie okuma hatası:", error)
      }
      
      return false // Açıkça false olarak döndür
    }, [])

    // Internal state of the AI sidebar - her zaman false başlasın
    const [_open, _setOpen] = React.useState(() => openProp ?? getInitialState())
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // Set cookie to keep the AI sidebar state
        try {
          document.cookie = `${AISIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${AISIDEBAR_COOKIE_MAX_AGE}`
        } catch (error) {
          console.warn("AI Sidebar cookie kaydetme hatası:", error)
        }
      },
      [setOpenProp, open]
    )

    // Helper to toggle the AI sidebar
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // State for styling
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<AISidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <AISidebarContext.Provider value={contextValue}>
        <div
          className={className}
          ref={ref}
          style={style}
          {...props}
        >
          {children}
        </div>
      </AISidebarContext.Provider>
    )
  }
)

AISidebarProvider.displayName = "AISidebarProvider"