"use client"
import { ArrowLeft } from "lucide-react"

interface ServiceCategory {
  id: string
  name: string
  description?: string
  image: string
  isFixed?: boolean
}

interface ServicesCatalogProps {
  onBack: () => void
  onCategorySelect: (categoryId: string, categoryName: string) => void
}

const fixedCategories: ServiceCategory[] = [
  {
    id: "certificates",
    name: "Электронные сертификаты",
    description: "Подарочные сертификаты на услуги",
    image: "/oriental-massage-certificate.png",
    isFixed: true,
  },
  {
    id: "gift-cards",
    name: "Подарочные карты",
    description: "Депозитные и подарочные карты",
    image: "/spa-gift-card-5000.png",
    isFixed: true,
  },
]

const categories: ServiceCategory[] = [
  {
    id: "1",
    name: "Тайский массаж",
    description: "Традиционные техники из Таиланда",
    image: "https://7kpacok.ru/wp-content/uploads/2022/12/384h350-2-384x350.png",
  },
  {
    id: "2",
    name: "Балийский массаж",
    description: "Расслабляющие программы с острова Бали",
    image: "https://7kpacok.ru/wp-content/uploads/2022/12/384h350-2-384x350.png",
  },
  {
    id: "3",
    name: "SPA для двоих",
    description: "Романтические программы для пар",
    image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-1-384x350.jpg",
  },
  {
    id: "4",
    name: "Хаммам",
    description: "Турецкая баня и очищающие ритуалы",
    image: "https://7kpacok.ru/wp-content/uploads/2018/08/hammam-384x350.jpg",
  },
  {
    id: "5",
    name: "Косметология",
    description: "Уход за лицом и телом",
    image: "/spa-facial-treatment.png",
  },
  {
    id: "6",
    name: "Wellness программы",
    description: "Комплексные оздоровительные курсы",
    image: "/wellness-spa-program.png",
  },
]

export default function ServicesCatalog({ onBack, onCategorySelect }: ServicesCatalogProps) {
  return (
    <div
      className="h-screen bg-gray-50 text-dark-graphite overflow-hidden relative flex flex-col"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Header */}
      <div className="px-4 py-3 pt-6 bg-white border-b border-light-grey">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -m-2 touch-manipulation">
            <ArrowLeft className="w-5 h-5 text-dark-graphite" />
          </button>
          <h1 className="text-lg font-semibold text-dark-graphite">Каталог услуг</h1>
        </div>
      </div>

      {/* Categories Grid */}
      <div
        className="flex-1 overflow-y-auto pb-safe"
        style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="p-4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-dark-graphite mb-3">Сертификаты и карты</h2>
            <div className="grid grid-cols-2 gap-4">
              {fixedCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategorySelect(category.id, category.name)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm touch-manipulation active:scale-95 transition-transform flex flex-col"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-semibold text-dark-graphite text-sm mb-1">{category.name}</h3>
                    {category.description && (
                      <p className="text-dark-graphite/60 text-xs line-clamp-2">{category.description}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-dark-graphite mb-3">SPA услуги</h2>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategorySelect(category.id, category.name)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm touch-manipulation active:scale-95 transition-transform flex flex-col"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-semibold text-dark-graphite text-sm mb-1">{category.name}</h3>
                    {category.description && (
                      <p className="text-dark-graphite/60 text-xs line-clamp-2">{category.description}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
