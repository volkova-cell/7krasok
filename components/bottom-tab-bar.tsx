"use client"
import { Home, Search, Calendar, ShoppingCart, User } from "lucide-react"

interface BottomTabBarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function BottomTabBar({ activeTab, onTabChange }: BottomTabBarProps) {
  const tabs = [
    { id: "home", label: "Главная", icon: Home },
    { id: "catalog", label: "Каталог", icon: Search },
    { id: "booking", label: "Запись", icon: Calendar },
    { id: "cart", label: "Корзина", icon: ShoppingCart },
    { id: "profile", label: "Профиль", icon: User },
  ]

  return (
    <div className="bg-white border-t border-light-grey pb-safe">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center py-2 px-3 touch-manipulation"
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? "text-teal" : "text-dark-graphite/60"}`} />
              <span className={`text-xs ${isActive ? "text-teal font-medium" : "text-dark-graphite/60"}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
