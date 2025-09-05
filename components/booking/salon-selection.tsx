"use client"
import { ArrowLeft, MapPin } from "lucide-react"
import { useState } from "react"

interface SalonSelectionProps {
  onBack: () => void
  onSalonSelect: (salonId: string) => void
}

const salons = [
  {
    id: "salon-1",
    name: "7 КРАСОК на Арбате",
    address: "ул. Арбат, 15",
    metro: "Арбатская",
    coordinates: { lat: 55.7522, lng: 37.5989 },
  },
  {
    id: "salon-2",
    name: "7 КРАСОК на Тверской",
    address: "ул. Тверская, 25",
    metro: "Тверская",
    coordinates: { lat: 55.7558, lng: 37.6176 },
  },
  {
    id: "salon-3",
    name: "7 КРАСОК в ТЦ Европейский",
    address: "пл. Киевского Вокзала, 2",
    metro: "Киевская",
    coordinates: { lat: 55.7447, lng: 37.566 },
  },
]

export default function SalonSelection({ onBack, onSalonSelect }: SalonSelectionProps) {
  const [viewMode, setViewMode] = useState<"list" | "map">("list")

  return (
    <div className="h-screen bg-white text-dark-graphite overflow-hidden relative flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 pt-6 bg-white border-b border-light-grey relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onBack} className="p-2 -m-2 touch-manipulation">
            <ArrowLeft className="w-5 h-5 text-dark-graphite" />
          </button>
          <h1 className="text-lg font-semibold text-dark-graphite">Выбор салона</h1>
        </div>

        {/* View Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode("list")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              viewMode === "list" ? "bg-white text-dark-graphite shadow-sm" : "text-dark-graphite/60"
            }`}
          >
            Список
          </button>
          <button
            onClick={() => setViewMode("map")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              viewMode === "map" ? "bg-white text-dark-graphite shadow-sm" : "text-dark-graphite/60"
            }`}
          >
            На карте
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20" style={{ WebkitOverflowScrolling: "touch" }}>
        {viewMode === "list" ? (
          <div className="p-4 space-y-3">
            {salons.map((salon) => (
              <div
                key={salon.id}
                className="bg-white border border-light-grey rounded-xl p-4 touch-manipulation active:scale-98 transition-transform"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-dark-graphite mb-1">{salon.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-dark-graphite/60 mb-1">
                      <MapPin className="w-4 h-4" />
                      <span>{salon.address}</span>
                    </div>
                    <div className="text-sm text-teal font-medium">м. {salon.metro}</div>
                  </div>
                </div>
                <button
                  onClick={() => onSalonSelect(salon.id)}
                  className="w-full bg-teal text-white py-2 rounded-lg font-medium text-sm"
                >
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full bg-gray-100 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-teal mx-auto mb-4" />
              <p className="text-dark-graphite/60">Карта будет добавлена в следующей версии</p>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
