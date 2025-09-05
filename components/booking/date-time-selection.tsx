"use client"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface DateTimeSelectionProps {
  onBack: () => void
  onTimeSelect: (date: string, time: string) => void
}

const timeSlots = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30"]

const masters = [
  {
    id: "1",
    name: "Рэсту",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restu.jpg-jaC3q5kdPPQNkcfbqj1ypBiOZZgl7I.jpeg",
    availableTimes: ["10:00", "13:00", "16:00", "19:00"],
  },
  {
    id: "2",
    name: "Хаяти",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restu.jpg-jaC3q5kdPPQNkcfbqj1ypBiOZZgl7I.jpeg",
    availableTimes: ["11:30", "14:30", "17:30", "20:30"],
  },
  {
    id: "3",
    name: "Деа",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restu.jpg-jaC3q5kdPPQNkcfbqj1ypBiOZZgl7I.jpeg",
    availableTimes: ["10:00", "11:30", "14:30", "17:30"],
  },
  {
    id: "4",
    name: "Нана",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restu.jpg-jaC3q5kdPPQNkcfbqj1ypBiOZZgl7I.jpeg",
    availableTimes: ["13:00", "16:00", "19:00", "20:30"],
  },
]

export default function DateTimeSelection({ onBack, onTimeSelect }: DateTimeSelectionProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDate = new Date(year, month, day)
      const isAvailable = day > new Date().getDate() || month > new Date().getMonth()
      days.push({ day, date: dayDate, available: isAvailable })
    }

    return days
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
    })
  }

  const days = getDaysInMonth(currentMonth)

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
          <h1 className="text-lg font-semibold text-dark-graphite">Выбор даты и времени</h1>
        </div>
      </div>

      {/* Content */}
      <div
        className="flex-1 overflow-y-auto pb-20"
        style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="p-4">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
              className="p-2 touch-manipulation"
            >
              <ChevronLeft className="w-5 h-5 text-dark-graphite" />
            </button>
            <h2 className="text-lg font-semibold text-dark-graphite">{formatDate(currentMonth)}</h2>
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
              className="p-2 touch-manipulation"
            >
              <ChevronRight className="w-5 h-5 text-dark-graphite" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-6">
            {["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-dark-graphite/60 py-2">
                {day}
              </div>
            ))}
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => day?.available && setSelectedDate(day.date.toISOString().split("T")[0])}
                disabled={!day?.available}
                className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors ${
                  day?.available
                    ? selectedDate === day.date.toISOString().split("T")[0]
                      ? "bg-teal text-white"
                      : "bg-gray-50 text-dark-graphite hover:bg-gray-100"
                    : "text-dark-graphite/30"
                }`}
              >
                {day?.day}
              </button>
            ))}
          </div>

          {/* Time Slots with Masters */}
          {selectedDate && (
            <div>
              <h3 className="text-lg font-semibold text-dark-graphite mb-3">Доступное время</h3>
              <div className="space-y-3 mb-6">
                {timeSlots.map((time) => {
                  const availableMasters = masters.filter((master) => master.availableTimes.includes(time))

                  return (
                    <div key={time} className="bg-gray-50 rounded-lg p-3">
                      <button
                        onClick={() => setSelectedTime(time)}
                        className={`w-full flex items-center justify-between py-2 px-3 rounded-lg font-medium transition-colors ${
                          selectedTime === time ? "bg-teal text-white" : "bg-white text-dark-graphite hover:bg-gray-100"
                        }`}
                      >
                        <span>{time}</span>
                        <div className="flex -space-x-2">
                          {availableMasters.map((master) => (
                            <img
                              key={master.id}
                              src={master.avatar || "/placeholder.svg"}
                              alt={master.name}
                              className="w-8 h-8 rounded-full border-2 border-white object-cover"
                              title={master.name}
                            />
                          ))}
                        </div>
                      </button>
                      {availableMasters.length > 0 && (
                        <div className="mt-2 text-xs text-dark-graphite/60">
                          Доступны: {availableMasters.map((m) => m.name).join(", ")}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Continue Button */}
          {selectedDate && selectedTime && (
            <button
              onClick={() => onTimeSelect(selectedDate, selectedTime)}
              className="w-full bg-teal text-white py-3 rounded-xl font-semibold text-base touch-manipulation active:scale-98 transition-transform"
            >
              Продолжить
            </button>
          )}
        </div>
      </div>

    </div>
  )
}
