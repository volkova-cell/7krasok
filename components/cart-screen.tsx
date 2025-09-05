"use client"
import { ArrowLeft, ShoppingCart } from "lucide-react"

interface CartScreenProps {
  onBack: () => void
}

export default function CartScreen({ onBack }: CartScreenProps) {
  return (
    <div className="h-screen bg-gray-50 text-dark-graphite overflow-hidden relative flex flex-col">
      <div className="px-4 py-3 pt-6 bg-white border-b border-light-grey">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -m-2 touch-manipulation">
            <ArrowLeft className="w-5 h-5 text-dark-graphite" />
          </button>
          <h1 className="text-lg font-semibold text-dark-graphite">Корзина</h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center justify-center text-center">
        <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-xl font-semibold text-dark-graphite mb-2">Ваша корзина пуста</h2>
        <p className="text-dark-graphite/60">Услуги еще не добавлены в корзину.</p>
      </div>
    </div>
  )
}