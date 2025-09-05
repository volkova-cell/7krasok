"use client"
import {
  User,
  ChevronRight,
  Calendar,
  CreditCard,
  Crown,
  Clock,
  ShoppingBag,
  Settings,
  MessageCircle,
  LogOut,
  Edit,
} from "lucide-react"

interface ProfileScreenProps {
  onNavigate: (screen: string) => void
  onNavigateToHome: () => void
  onNavigateToCatalog: () => void
  onNavigateToBooking: () => void
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const menuItems = [
    { id: "appointments", label: "Мои записи", icon: Calendar },
    { id: "deposit-card", label: "Депозитная карта", icon: CreditCard },
    { id: "subscription", label: "Моя подписка", icon: Crown },
    { id: "visit-history", label: "История визитов", icon: Clock },
    { id: "purchase-history", label: "История покупок", icon: ShoppingBag },
    { id: "settings", label: "Настройки", icon: Settings },
    { id: "support", label: "Поддержка", icon: MessageCircle },
  ]

  const handleLogout = () => {
    // Логика выхода из аккаунта
    onNavigate("login")
  }

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 py-6 border-b border-gray-100">
        <h1 className="text-xl font-semibold text-gray-900 text-center">Профиль</h1>
      </div>

      {/* User Info Block */}
      <div className="px-4 py-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Анна Иванова</h2>
              <p className="text-gray-500">+7 (999) 123-45-67</p>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Edit className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 px-4 py-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="w-full flex items-center justify-between py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <IconComponent className="w-5 h-5 text-gray-400" />
                <span className="text-gray-900 font-medium">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </button>
          )
        })}
      </div>

      {/* Logout Button */}
      <div className="px-4 py-6 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Выход</span>
        </button>
      </div>
    </div>
  )
}
