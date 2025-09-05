"use client"
import { ArrowLeft } from "lucide-react"
import BottomTabBar from "./bottom-tab-bar"

interface DepositCardDetailProps {
  onBack: () => void
  card: {
    id: string
    name: string
    description: string
    price: number
    image: string
  }
}

export default function DepositCardDetail({ onBack, card }: DepositCardDetailProps) {
  const benefits =
    card.id === "dep-1"
      ? [
          "Скидка 25% на все услуги салона",
          "Действует 12 месяцев с момента активации",
          "Можно использовать частями",
          "Возможность дарить и передавать",
          "Приоритетная запись на услуги",
        ]
      : [
          "Скидка 40% на все услуги салона",
          "Действует 18 месяцев с момента активации",
          "Можно использовать частями",
          "Возможность дарить и передавать",
          "Приоритетная запись на услуги",
          "Персональный менеджер",
          "Комплименты от салона",
        ]

  return (
    <div className="h-screen bg-white text-dark-graphite overflow-hidden relative flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 pt-safe bg-white border-b border-light-grey">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -m-2 touch-manipulation">
            <ArrowLeft className="w-5 h-5 text-dark-graphite" />
          </button>
          <h1 className="text-lg font-semibold text-dark-graphite">Детали карты</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-safe">
        <div className="p-4">
          <div className="bg-white rounded-2xl shadow-sm border border-light-grey overflow-hidden mb-6">
            <img src={card.image || "/placeholder.svg"} alt={card.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-dark-graphite mb-2">{card.name}</h2>
              <p className="text-dark-graphite/60 mb-4">{card.description}</p>
              <div className="text-2xl font-bold text-teal">{card.price.toLocaleString()} ₽</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-light-grey p-4 mb-6">
            <h3 className="text-lg font-semibold text-dark-graphite mb-4">Преимущества карты</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-dark-graphite/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full bg-teal text-white py-3 px-4 rounded-lg font-medium text-base touch-manipulation active:scale-98 transition-transform">
            Добавить в корзину
          </button>
        </div>
      </div>

      <BottomTabBar activeTab="catalog" onTabChange={() => {}} />
    </div>
  )
}
