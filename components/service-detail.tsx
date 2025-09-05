"use client"
import { ArrowLeft, Clock } from "lucide-react"
import { useState } from "react"
import BottomTabBar from "./bottom-tab-bar"

interface ServiceDetailProps {
  serviceId: string
  onBack: () => void
  onBooking?: () => void // Added optional booking handler
}

const serviceDetails: Record<string, any> = {
  "thai-1": {
    name: "Thai Classic",
    price: "4 100 ₽",
    duration: "60-90 мин",
    images: ["https://7kpacok.ru/wp-content/uploads/2020/02/384X350-2-384x350.jpg"],
    description:
      "Традиционный тайский массаж всего тела с использованием древних техник. Массаж выполняется на специальном матрасе на полу, что позволяет мастеру использовать вес своего тела для более глубокого воздействия.",
    benefits:
      "Улучшает кровообращение, снимает мышечное напряжение, повышает гибкость суставов, способствует глубокому расслаблению и восстановлению энергии.",
    process:
      "Массаж начинается с разминки стоп, затем мастер прорабатывает все тело, используя ладони, локти и колени. Особое внимание уделяется энергетическим линиям тела.",
    certificate: {
      name: "Сертификат на Thai Classic",
      price: "4 100 ₽",
      description: "Подарочный сертификат на традиционный тайский массаж",
    },
    giftCards: [
      { id: 1, name: "Подарочная карта 3000 ₽", price: "3 000 ₽", value: 3000 },
      { id: 2, name: "Подарочная карта 5000 ₽", price: "5 000 ₽", value: 5000 },
      { id: 3, name: "Подарочная карта 10000 ₽", price: "10 000 ₽", value: 10000 },
    ],
  },
}

export default function ServiceDetail({ serviceId, onBack, onBooking }: ServiceDetailProps) {
  const [showToast, setShowToast] = useState(false)
  const service = serviceDetails[serviceId]

  if (!service) {
    return (
      <div className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-dark-graphite/60 mb-4">Услуга не найдена</p>
          <button onClick={onBack} className="px-6 py-2 bg-teal text-white rounded-lg font-medium touch-manipulation">
            Назад
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = (type: "certificate" | "gift", item?: any) => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const handleOnlineBooking = () => {
    if (onBooking) {
      onBooking()
    } else {
      console.log("Navigate to online booking")
    }
  }

  return (
    <div
      className="h-screen bg-white text-dark-graphite overflow-hidden relative flex flex-col"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Header */}
      <div className="px-4 py-3 pt-6 bg-white border-b border-light-grey relative z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -m-2 touch-manipulation">
            <ArrowLeft className="w-5 h-5 text-dark-graphite" />
          </button>
          <h1 className="text-lg font-semibold text-dark-graphite">Детали услуги</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-4" style={{ WebkitOverflowScrolling: "touch" }}>
        {/* Image Gallery */}
        <div className="w-full h-64 relative overflow-hidden">
          <img
            src={service.images[0] || "/placeholder.svg"}
            alt={service.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Service Info */}
        <div className="p-4">
          <h1 className="text-2xl font-bold text-dark-graphite mb-4">{service.name}</h1>

          {/* Key Parameters */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal" />
                <span className="text-dark-graphite font-medium">Длительность</span>
              </div>
              <span className="text-dark-graphite">{service.duration}</span>
            </div>

            <div className="mt-4 space-y-4">
              {/* Premium Elite Subscription */}
              <div className="border-l-4 border-soft-gold pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-soft-gold bg-soft-gold/10 px-2 py-1 rounded">
                    Premium Elite
                  </span>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Абонемент -40%</span>
                </div>
                <div className="text-xs text-dark-graphite/60 mb-2">
                  СТОИМОСТЬ ПРИ ОПЛАТЕ
                  <br />
                  <span className="font-medium">КЛУБНЫМИ КАРТАМИ</span>
                  <br />
                  (скидка до 40% от цены)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-soft-gold">5350 ₽</span>
                  <span className="text-sm text-dark-graphite/50 line-through">8100 ₽</span>
                </div>
              </div>

              {/* Morning Time Slot */}
              <div className="border-l-4 border-teal pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-teal bg-teal/10 px-2 py-1 rounded">Утро -20%</span>
                  <span className="text-xs text-dark-graphite/60">(10:00 - 14:00)</span>
                </div>
                <div className="text-xs text-dark-graphite/60 mb-2">
                  ВРЕМЯ ПОСЕЩЕНИЯ
                  <br />
                  <span className="font-medium">ЕЖЕДНЕВНО 10:00-14:00</span>
                  <br />
                  (скидка 20% от цены)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-teal">7150 ₽</span>
                  <span className="text-sm text-dark-graphite/50 line-through">10800 ₽</span>
                </div>
              </div>

              {/* Regular Price */}
              <div className="border-l-4 border-dark-graphite pl-4">
                <div className="text-xs font-medium text-dark-graphite mb-1">Цена (14:00 - 22:00)</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-dark-graphite">8950 ₽</span>
                  <span className="text-sm text-dark-graphite/50 line-through">13500 ₽</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleOnlineBooking}
            className="w-full bg-teal text-white py-3 rounded-xl font-semibold text-base mb-6 touch-manipulation active:scale-98 transition-transform"
          >
            Записаться онлайн
          </button>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-dark-graphite mb-3">Описание</h2>
            <p className="text-dark-graphite/80 leading-relaxed">{service.description}</p>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-dark-graphite mb-3">Польза</h2>
            <p className="text-dark-graphite/80 leading-relaxed">{service.benefits}</p>
          </div>

          {/* Process */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-dark-graphite mb-3">Как проходит процедура</h2>
            <p className="text-dark-graphite/80 leading-relaxed">{service.process}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-dark-graphite mb-3">Сертификат</h2>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 pr-4">
                  <h3 className="font-medium text-dark-graphite leading-tight">{service.certificate.name}</h3>
                  <p className="text-sm text-dark-graphite/60 mt-1">{service.certificate.description}</p>
                </div>
                <span className="text-soft-gold font-bold text-lg whitespace-nowrap">{service.certificate.price}</span>
              </div>
              <button
                onClick={() => handleAddToCart("certificate", service.certificate)}
                className="w-full bg-teal text-white py-2 rounded-lg font-medium text-sm touch-manipulation active:scale-98 transition-transform"
              >
                В корзину
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-dark-graphite mb-3">Подарочные карты</h2>
            <div className="space-y-3">
              {service.giftCards.map((card: any) => (
                <div key={card.id} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-dark-graphite">{card.name}</h3>
                      <p className="text-sm text-dark-graphite/60">Номинал {card.value.toLocaleString()} ₽</p>
                    </div>
                    <span className="text-soft-gold font-bold">{card.price}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart("gift", card)}
                    className="w-full bg-teal text-white py-2 rounded-lg font-medium text-sm touch-manipulation active:scale-98 transition-transform"
                  >
                    В корзину
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab="catalog" onTabChange={() => {}} />

      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-20 left-4 right-4 bg-teal text-white p-4 rounded-xl shadow-lg z-50 animate-in slide-in-from-top">
          <p className="text-center font-medium">Товар добавлен в корзину</p>
        </div>
      )}
    </div>
  )
}
