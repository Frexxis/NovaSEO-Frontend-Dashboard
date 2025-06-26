import { BrainCircuitIcon, SparklesIcon, TrendingUpIcon, AlertCircleIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface AIInsightCardProps {
  title: string
  insight: string
  confidence: number
  impact: "high" | "medium" | "low"
  category: "opportunity" | "warning" | "trend" | "recommendation"
  actionable?: boolean
  className?: string
}

export function AIInsightCard({
  title,
  insight,
  confidence,
  impact,
  category,
  actionable = false,
  className,
}: AIInsightCardProps) {
  const getIcon = () => {
    switch (category) {
      case "opportunity":
        return <TrendingUpIcon className="size-4 sm:size-5 text-green-600 dark:text-green-400 shrink-0" />
      case "warning":
        return <AlertCircleIcon className="size-4 sm:size-5 text-amber-600 dark:text-amber-400 shrink-0" />
      case "trend":
        return <SparklesIcon className="size-4 sm:size-5 text-blue-600 dark:text-blue-400 shrink-0" />
      default:
        return <BrainCircuitIcon className="size-4 sm:size-5 text-primary shrink-0" />
    }
  }

  const getImpactColor = () => {
    switch (impact) {
      case "high":
        return "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
      case "medium":
        return "bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
      case "low":
        return "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
    }
  }

  const translateImpact = (value: "high" | "medium" | "low") => {
    switch (value) {
      case "high":
        return "yüksek"
      case "medium":
        return "orta"
      case "low":
        return "düşük"
    }
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border bg-gradient-to-br from-card to-muted/30 p-4 sm:p-5 lg:p-6 transition-all hover:shadow-lg",
        actionable && "ai-pulse cursor-pointer hover:scale-[1.02]",
        className,
      )}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>
        <div className="flex-1 space-y-3 min-w-0">
          <div className="space-y-2">
            <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-2">
              <h4 className="font-semibold text-foreground text-sm sm:text-base leading-tight">{title}</h4>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 shrink-0">
                <Badge variant="outline" className={cn("text-xs", getImpactColor())}>
                  {translateImpact(impact)}
                </Badge>
                <Badge variant="secondary" className="font-mono text-[10px] sm:text-xs">
                  %{confidence}
                </Badge>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-4">{insight}</p>
          {actionable && (
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-primary">
              <SparklesIcon className="size-2.5 sm:size-3 shrink-0" />
              <span className="truncate">Detaylı öneriler için tıklayın</span>
            </div>
          )}
        </div>
      </div>
      {actionable && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity hover:opacity-100" />
      )}
    </div>
  )
}