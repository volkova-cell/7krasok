"use client"
import { ArrowLeft, Clock } from "lucide-react"
import { useState } from "react"

interface ServiceSelectionProps {
  onBack: () => void
  onServiceSelect: (serviceId: string) => void
}

const serviceCategories = [
  {
    id: "massage",
    name: "Массаж",
    services: [
      {
        id: "thai-classic",
        name: "Thai Classic",
        duration: "60-90 мин",
        price: "4 100 ₽",
        image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-2-384x350.jpg",
      },
      {
        id: "oriental-relax",
        name: "Oriental Relax",
        duration: "90 мин",
        price: "5 500 ₽",
        image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-2-384x350.jpg",
      },
    ],
  },
  {
    id: "spa-programs",
    name: "SPA-программы",
    services: [
      {
        id: "hammam",
        name: "Хаммам",
        duration: "120 мин",
        price: "6 800 ₽",
        image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-2-384x350.jpg",
      },
      {
        id: "spa-couple",
        name: "Spa для двоих",
        duration: "90 мин",
        price: "8 200 ₽",
        image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-2-384x350.jpg",
      },
    ],
  },
]

export default function ServiceSelection({ onBack, onServiceSelect }: ServiceSelectionProps) {
  const [activeCategory, setActiveCategory] = useState("massage")

  return (
    <div className="h-screen bg-white text-dark-graphite overflow-hidden relative flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 pt-6 bg-white border-b border-light-grey relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onBack} className="p-2 -m-2 touch-manipulation">
            <ArrowLeft className="w-5 h-5 text-dark-graphite" />
          </button>
          <h1 className="text-lg font-semibold text-dark-graphite">Выбор услуги</h1>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category.id ? "bg-teal text-white" : "bg-gray-100 text-dark-graphite/60"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20" style={{ WebkitOverflowScrolling: "touch" }}>
        <div className="p-4 space-y-3">
          {serviceCategories
            .find((cat) => cat.id === activeCategory)
            ?.services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-light-grey rounded-xl overflow-hidden touch-manipulation active:scale-98 transition-transform"
              >
                <div className="flex">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <h3 className="font-semibold text-dark-graphite mb-1">{service.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-dark-graphite/60 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-soft-gold">{service.price}</span>
                      <button
                        onClick={() => onServiceSelect(service.id)}
                        className="bg-teal text-white px-4 py-2 rounded-lg font-medium text-sm"
                      >
                        Выбрать
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

    </div>
  )
}
