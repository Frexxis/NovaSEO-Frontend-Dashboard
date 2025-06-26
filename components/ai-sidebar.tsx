"use client"

import * as React from "react"
import {
  BrainCircuitIcon,
  SendIcon,
  MicIcon,
  SparklesIcon,
  UserIcon,
  BotIcon,
  MessageSquareIcon,
  WandIcon,
  BarChart3Icon,
  XIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useAISidebar } from "@/lib/ai-sidebar-context"

function AISidebarContent({ onClose }: { onClose?: () => void }) {
  const [inputMessage, setInputMessage] = React.useState("")

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return
    console.log("Sending message:", inputMessage)
    setInputMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-full w-full flex flex-col bg-sidebar">
      {/* Header */}
      <div className="shrink-0 h-14 flex items-center justify-between px-4 border-b border-sidebar-border bg-sidebar/95 backdrop-blur">
        <div className="flex items-center gap-2">
          <BrainCircuitIcon className="h-5 w-5 text-primary" />
          <h2 className="text-base font-semibold text-sidebar-foreground">NovaSEO AI</h2>
          <Badge variant="secondary" className="bg-primary/10 text-primary text-xs px-1.5 py-0.5">
            <SparklesIcon className="h-2.5 w-2.5 mr-1" />
            Beta
          </Badge>
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-9 w-9 p-0 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <XIcon className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <div className="p-4 pb-2 h-full">
          <Tabs defaultValue="chat" className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-3 h-10 bg-sidebar-accent shrink-0">
              <TabsTrigger value="chat" className="text-sm data-[state=active]:bg-sidebar data-[state=active]:text-sidebar-foreground">
                <MessageSquareIcon className="h-3 w-3 mr-1" />
                Sohbet
              </TabsTrigger>
              <TabsTrigger value="tools" className="text-sm data-[state=active]:bg-sidebar data-[state=active]:text-sidebar-foreground">
                <WandIcon className="h-3 w-3 mr-1" />
                Araçlar
              </TabsTrigger>
              <TabsTrigger value="metrics" className="text-sm data-[state=active]:bg-sidebar data-[state=active]:text-sidebar-foreground">
                <BarChart3Icon className="h-3 w-3 mr-1" />
                Metrikler
              </TabsTrigger>
            </TabsList>

            {/* Chat Tab */}
            <TabsContent value="chat" className="mt-3 flex-1 flex flex-col min-h-0">
              <ScrollArea className="flex-1 px-3">
                <div className="space-y-4 pb-3">
                  <div className="flex justify-start">
                    <div className="flex max-w-[85%]">
                      <Avatar className="h-7 w-7 mx-2 mt-1 shrink-0">
                        <AvatarFallback>
                          <BotIcon className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="rounded-lg p-3 bg-muted min-w-0">
                        <p className="text-sm leading-relaxed">
                          NovaSEO AI'ya hoş geldiniz! Ben sizin kişisel SEO uzmanınızım. Size nasıl yardımcı olabilirim?
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs opacity-70">10:30</span>
                          <Badge variant="outline" className="text-xs">
                            %98 güven
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <Button variant="outline" size="sm" className="text-xs h-6 px-2">
                            Site Auditi
                          </Button>
                          <Button variant="outline" size="sm" className="text-xs h-6 px-2">
                            Keyword
                          </Button>
                          <Button variant="outline" size="sm" className="text-xs h-6 px-2">
                            Rakip Analizi
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="flex max-w-[85%] flex-row-reverse">
                      <Avatar className="h-7 w-7 mx-2 mt-1 shrink-0">
                        <AvatarFallback>
                          <UserIcon className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="rounded-lg p-3 bg-primary text-primary-foreground min-w-0">
                        <p className="text-sm">
                          Site trafigimi nasıl artırabilirim?
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs opacity-70">10:32</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="flex max-w-[85%]">
                      <Avatar className="h-7 w-7 mx-2 mt-1 shrink-0">
                        <AvatarFallback>
                          <BotIcon className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="rounded-lg p-3 bg-muted min-w-0">
                        <p className="text-sm leading-relaxed">
                          Harika bir soru! Size özel bir SEO stratejisi hazırladım:
                          
                          🎯 **Öncelikli Aksiyonlar:**
                          • Anahtar kelime optimizasyonu
                          • İçerik kalitesi artırımı  
                          • Teknik SEO iyileştirmeleri
                          
                          📈 **Beklenen:** %40-60 artış (3-6 ay)
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs opacity-70">10:33</span>
                          <Badge variant="outline" className="text-xs">
                            %96 güven
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <Button variant="outline" size="sm" className="text-xs h-6 px-2">
                            Detaylı Plan
                          </Button>
                          <Button variant="outline" size="sm" className="text-xs h-6 px-2">
                            Başlat
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>

            {/* Tools Tab */}
            <TabsContent value="tools" className="mt-3 flex-1 min-h-0">
              <ScrollArea className="h-full px-3">
                <div className="space-y-3 pb-3">
                  <div className="p-3 border rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shrink-0">
                        <BrainCircuitIcon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium">AI Keyword Research</h4>
                        <p className="text-xs text-muted-foreground">Akıllı anahtar kelime analizi</p>
                        <div className="flex items-center justify-between mt-2">
                          <Badge variant="secondary" className="text-xs">Aktif</Badge>
                          <span className="text-xs text-muted-foreground">%96</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 border rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shrink-0">
                        <SendIcon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium">Content Optimizer</h4>
                        <p className="text-xs text-muted-foreground">SEO optimize içerik üretimi</p>
                        <div className="flex items-center justify-between mt-2">
                          <Badge variant="secondary" className="text-xs">Beta</Badge>
                          <span className="text-xs text-muted-foreground">%94</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>

            {/* Metrics Tab */}
            <TabsContent value="metrics" className="mt-3 flex-1 min-h-0">
              <ScrollArea className="h-full px-3">
                <div className="grid grid-cols-1 gap-3 pb-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex items-center justify-between">
                      <BrainCircuitIcon className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-green-600">+12</span>
                    </div>
                    <p className="text-sm font-medium mt-1">SEO Skoru</p>
                    <p className="text-lg font-bold">87/100</p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex items-center justify-between">
                      <BarChart3Icon className="h-4 w-4 text-green-600" />
                      <span className="text-xs text-green-600">+23</span>
                    </div>
                    <p className="text-sm font-medium mt-1">Yükselen Keywords</p>
                    <p className="text-lg font-bold">156</p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex items-center justify-between">
                      <SparklesIcon className="h-4 w-4 text-purple-600" />
                      <span className="text-xs text-green-600">+15.3%</span>
                    </div>
                    <p className="text-sm font-medium mt-1">AI Güveni</p>
                    <p className="text-lg font-bold">94%</p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex items-center justify-between">
                      <MessageSquareIcon className="h-4 w-4 text-orange-600" />
                      <span className="text-xs text-green-600">Live</span>
                    </div>
                    <p className="text-sm font-medium mt-1">Canlı Trafik</p>
                    <p className="text-lg font-bold">1,247</p>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Footer Input */}
      <div className="shrink-0 p-4 border-t border-sidebar-border bg-sidebar">
        <div className="flex items-end space-x-2">
          <div className="flex-1">
            <Textarea
              placeholder="SEO stratejiniz hakkında soru sorun..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="min-h-[40px] max-h-[80px] resize-none bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/70 focus:ring-1 focus:ring-primary text-base"
            />
          </div>
          <Button
            size="sm"
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="h-11 w-11 p-0"
          >
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export function AISidebar() {
  const { isMobile, open } = useAISidebar()

  // Mobile'da hiç gösterilmesin
  if (isMobile) {
    return null
  }

  // Desktop'ta sadece açık olduğunda göster
  if (!open) {
    return null
  }

  // Desktop version - Fixed position + placeholder div (Shadcn UI sidebar pattern)
  return (
    <div className="group peer text-sidebar-foreground">
      {/* Placeholder div - layout space tutar */}
      <div className="duration-200 relative h-svh w-80 bg-transparent transition-[width] ease-linear" />
      
      {/* Fixed sidebar - gerçek content */}
      <div className="duration-200 fixed inset-y-0 right-0 z-10 h-svh w-80 transition-[left,right,width] ease-linear flex border-l border-sidebar-border">
        <div className="flex h-full w-full flex-col bg-sidebar">
          <AISidebarContent />
        </div>
      </div>
    </div>
  )
}