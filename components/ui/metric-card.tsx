import type * as React from "react"
import { TrendingUpIcon, TrendingDownIcon, MinusIcon, InfoIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface MetricCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    period: string
    trend: "up" | "down" | "neutral"
  }
  icon?: React.ReactNode
  description?: string
  className?: string
  variant?: "default" | "primary" | "success" | "warning" | "danger"
}

export function MetricCard({
  title,
  value,
  change,
  icon,
  description,
  className,
  variant = "default",
}: MetricCardProps) {
  const getTrendIcon = () => {
    if (!change) return null
    switch (change.trend) {
      case "up":
        return <TrendingUpIcon className="size-3 sm:size-4 text-green-600 dark:text-green-400" />
      case "down":
        return <TrendingDownIcon className="size-3 sm:size-4 text-red-600 dark:text-red-400" />
      default:
        return <MinusIcon className="size-3 sm:size-4 text-muted-foreground" />
    }
  }

  const getTrendColor = () => {
    if (!change) return ""
    switch (change.trend) {
      case "up":
        return "text-green-600 dark:text-green-400"
      case "down":
        return "text-red-600 dark:text-red-400"
      default:
        return "text-muted-foreground"
    }
  }

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20"
      case "success":
        return "border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/50 dark:to-green-900/50"
      case "warning":
        return "border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/50 dark:to-amber-900/50"
      case "danger":
        return "border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950/50 dark:to-red-900/50"
      default:
        return "border bg-gradient-to-br from-card to-muted/30"
    }
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl p-4 sm:p-5 lg:p-6 transition-all hover:shadow-lg",
        getVariantStyles(),
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2 min-w-0 flex-1">
          <div className="flex items-center gap-2">
            {icon && <div className="text-muted-foreground shrink-0">{icon}</div>}
            <p className="text-xs sm:text-sm font-medium text-muted-foreground truncate">{title}</p>
            {description && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="size-3 text-muted-foreground shrink-0" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-xs">{description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight truncate">{value}</p>
            {change && (
              <div className={cn("flex items-center gap-1 text-xs sm:text-sm", getTrendColor())}>
                {getTrendIcon()}
                <span className="font-medium">
                  {change.value > 0 ? "+" : ""}
                  {change.value}%
                </span>
                <span className="text-muted-foreground hidden xs:inline">vs {change.period}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute -right-3 sm:-right-4 -top-3 sm:-top-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
    </div>
  )
}