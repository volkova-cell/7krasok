"use client"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { useState } from "react"

interface CertificatesGiftsProps {
  onBack: () => void
  categoryId: string
  categoryName: string
  onNavigateToDepositDetail: (item: any) => void
  onNavigateToCertificateDetail: (item: any) => void
}

const certificatesData = {
  certificates: [
    {
      id: "cert-1",
      name: "Сертификат на Thai Classic",
      description: "Подарочный сертификат на традиционный тайский массаж",
      price: 4100,
      image: "/placeholder-578ce.png",
    },
    {
      id: "cert-2",
      name: "Сертификат на Oriental Relax",
      description: "Расслабляющий восточный массаж",
      price: 3800,
      image: "/oriental-massage-certificate.png",
    },
    {
      id: "cert-3",
      name: "Сертификат на Хаммам",
      description: "Турецкая баня с пилингом",
      price: 5200,
      image: "/placeholder-23ofb.png",
    },
  ],
  "gift-cards": [
    {
      id: "card-1",
      name: "Подарочная карта 3000₽",
      description: "Универсальная карта на любые услуги",
      price: 3000,
      image: "/spa-gift-card-3000.png",
    },
    {
      id: "card-2",
      name: "Подарочная карта 5000₽",
      description: "Универсальная карта на любые услуги",
      price: 5000,
      image: "/spa-gift-card-5000.png",
    },
    {
      id: "card-3",
      name: "Подарочная карта 10000₽",
      description: "Универсальная карта на любые услуги",
      price: 10000,
      image: "/spa-gift-card-ten-thousand.png",
    },
    {
      id: "dep-1",
      name: "Депозитная карта Premium",
      description: "Скидка 25% на все услуги",
      price: 15000,
      image: "/placeholder-2ah20.png",
    },
    {
      id: "dep-2",
      name: "Депозитная карта Elite",
      description: "Скидка 40% на все услуги",
      price: 25000,
      image: "/placeholder-eg9uu.png",
    },
  ],
}

export default function CertificatesGifts({
  onBack,
  categoryId,
  categoryName,
  onNavigateToDepositDetail,
  onNavigateToCertificateDetail,
}: CertificatesGiftsProps) {
  const [cartNotification, setCartNotification] = useState<string | null>(null)

  const items = certificatesData[categoryId as keyof typeof certificatesData] || []

  const addToCart = (itemName: string) => {
    setCartNotification(`${itemName} добавлен в корзину`)
    setTimeout(() => setCartNotification(null), 2000)
  }

  const handleItemClick = (item: any) => {
    if (item.id.startsWith("dep-")) {
      onNavigateToDepositDetail(item)
    } else if (item.id.startsWith("cert-")) {
      onNavigateToCertificateDetail(item)
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
      <div className="px-4 py-3 pt-safe bg-white border-b border-light-grey">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -m-2 touch-manipulation">
            <ArrowLeft className="w-5 h-5 text-dark-graphite" />
          </button>
          <h1 className="text-lg font-semibold text-dark-graphite">{categoryName}</h1>
        </div>
      </div>

      {/* Items List */}
      <div
        className="flex-1 overflow-y-auto pb-safe"
        style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="p-4 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-light-grey overflow-hidden">
              <div
                className={`flex ${item.id.startsWith("dep-") ? "cursor-pointer" : ""}`}
                onClick={() => handleItemClick(item)}
              >
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-dark-graphite text-base mb-1">{item.name}</h3>
                    <p className="text-dark-graphite/60 text-sm mb-2">{item.description}</p>
                    <div className="text-lg font-bold text-dark-graphite">{item.price.toLocaleString()} ₽</div>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4">
                <button
                  onClick={() => addToCart(item.name)}
                  className="w-full bg-teal text-white py-2 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 touch-manipulation active:scale-98 transition-transform"
                >
                  <ShoppingCart className="w-4 h-4" />В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Notification */}
      {cartNotification && (
        <div className="absolute top-20 left-4 right-4 bg-teal text-white px-4 py-2 rounded-lg text-center font-medium z-50">
          {cartNotification}
        </div>
      )}

    </div>
  )
}
