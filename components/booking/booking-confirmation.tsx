"use client"
import { ArrowLeft, Check } from "lucide-react"
import { useState } from "react"

interface BookingConfirmationProps {
  onBack: () => void
  onConfirm: () => void
  bookingData: {
    salon: string
    service: string
    date: string
    time: string
    price: string
  }
}

export default function BookingConfirmation({ onBack, onConfirm, bookingData }: BookingConfirmationProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [paymentMethod, setPaymentMethod] = useState<"sbp" | "online">("sbp")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleConfirm = () => {
    setIsConfirmed(true)
    setTimeout(() => {
      onConfirm()
    }, 2000)
  }

  if (isConfirmed) {
    return (
      <div className="h-screen bg-white text-dark-graphite flex flex-col items-center justify-center p-8">
        <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-dark-graphite mb-4 text-center">Успешно!</h1>
        <p className="text-dark-graphite/60 text-center mb-8">Вы записаны на процедуру</p>

        <div className="bg-gray-50 rounded-xl p-4 w-full max-w-sm mb-8">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-dark-graphite/60">Услуга:</span>
              <span className="font-medium">{bookingData.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-graphite/60">Дата:</span>
              <span className="font-medium">{new Date(bookingData.date).toLocaleDateString("ru-RU")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark-graphite/60">Время:</span>
              <span className="font-medium">{bookingData.time}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 w-full max-w-sm">
          <button className="w-full bg-teal text-white py-3 rounded-xl font-semibold">В мои записи</button>
          <button onClick={onConfirm} className="w-full bg-gray-100 text-dark-graphite py-3 rounded-xl font-semibold">
            На главный экран
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-white text-dark-graphite overflow-hidden relative flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 pt-6 bg-white border-b border-light-grey relative z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -m-2 touch-manipulation">
            <ArrowLeft className="w-5 h-5 text-dark-graphite" />
          </button>
          <h1 className="text-lg font-semibold text-dark-graphite">Подтверждение записи</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20" style={{ WebkitOverflowScrolling: "touch" }}>
        <div className="p-4 space-y-6">
          {/* Booking Summary */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h2 className="font-semibold text-dark-graphite mb-3">Детали записи</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-dark-graphite/60">Салон:</span>
                <span className="font-medium">{bookingData.salon}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-graphite/60">Услуга:</span>
                <span className="font-medium">{bookingData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-graphite/60">Дата:</span>
                <span className="font-medium">{new Date(bookingData.date).toLocaleDateString("ru-RU")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-graphite/60">Время:</span>
                <span className="font-medium">{bookingData.time}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-light-grey">
                <span className="font-semibold">Итого:</span>
                <span className="font-bold text-soft-gold">{bookingData.price}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-semibold text-dark-graphite mb-3">Контактные данные</h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border border-light-grey rounded-lg focus:outline-none focus:border-teal"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border border-light-grey rounded-lg focus:outline-none focus:border-teal"
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 border border-light-grey rounded-lg focus:outline-none focus:border-teal"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="font-semibold text-dark-graphite mb-3">Способ оплаты</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 border border-light-grey rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="sbp"
                  checked={paymentMethod === "sbp"}
                  onChange={(e) => setPaymentMethod(e.target.value as "sbp")}
                  className="text-teal"
                />
                <span>СБП</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-light-grey rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={(e) => setPaymentMethod(e.target.value as "online")}
                  className="text-teal"
                />
                <span>Картой онлайн</span>
              </label>
            </div>
          </div>

          {/* Terms Agreement */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 text-teal"
            />
            <span className="text-sm text-dark-graphite/80">Я согласен на обработку персональных данных</span>
          </label>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            disabled={!formData.name || !formData.phone || !agreedToTerms}
            className="w-full bg-teal text-white py-3 rounded-xl font-semibold text-base touch-manipulation active:scale-98 transition-transform disabled:bg-gray-300 disabled:text-gray-500"
          >
            Записаться
          </button>
        </div>
      </div>

    </div>
  )
}
