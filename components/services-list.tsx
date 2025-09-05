"use client"
import { ArrowLeft } from "lucide-react"
import BottomTabBar from "./bottom-tab-bar"

interface Service {
  id: string
  name: string
  price: string
  duration: string
  image: string
  description: string
}

interface ServicesListProps {
  categoryId: string
  categoryName: string
  onBack: () => void
  onServiceSelect: (serviceId: string) => void
}

const servicesByCategory: Record<string, Service[]> = {
  "1": [
    // Тайский массаж
    {
      id: "thai-1",
      name: "Thai Classic",
      price: "от 4 100 ₽",
      duration: "60-90 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-2-384x350.jpg",
      description: "Традиционный тайский массаж всего тела с элементами йоги",
    },
    {
      id: "thai-2",
      name: "Thai Royal",
      price: "от 6 500 ₽",
      duration: "90-120 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-2-384x350.jpg",
      description: "Королевский тайский массаж с травяными мешочками",
    },
    {
      id: "thai-3",
      name: "Thai Oil Massage",
      price: "от 5 200 ₽",
      duration: "75-90 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-2-384x350.jpg",
      description: "Тайский массаж с ароматическими маслами",
    },
    {
      id: "thai-4",
      name: "Thai Foot Massage",
      price: "от 2 800 ₽",
      duration: "45-60 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-2-384x350.jpg",
      description: "Традиционный массаж стоп и голеней",
    },
  ],
  "2": [
    // Балийский массаж
    {
      id: "bali-1",
      name: "Oriental Relax",
      price: "от 4 100 ₽",
      duration: "60-90 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2022/12/384h350-2-384x350.png",
      description: "Расслабляющий балийский массаж с кокосовым маслом",
    },
    {
      id: "bali-2",
      name: "Balinese Deep Tissue",
      price: "от 5 400 ₽",
      duration: "75-90 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2022/12/384h350-2-384x350.png",
      description: "Глубокий балийский массаж для снятия мышечного напряжения",
    },
    {
      id: "bali-3",
      name: "Balinese Hot Stone",
      price: "от 6 800 ₽",
      duration: "90-120 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2022/12/384h350-2-384x350.png",
      description: "Балийский массаж горячими камнями",
    },
  ],
  "3": [
    // SPA для двоих
    {
      id: "couple-1",
      name: "Романтический SPA",
      price: "от 11 900 ₽",
      duration: "120-180 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-1-384x350.jpg",
      description: "SPA-программа для двоих с массажем и ритуалами",
    },
    {
      id: "couple-2",
      name: "Медовый месяц",
      price: "от 15 600 ₽",
      duration: "180-240 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-1-384x350.jpg",
      description: "Роскошная программа для влюбленных с шампанским",
    },
    {
      id: "couple-3",
      name: "Тайский дуэт",
      price: "от 9 800 ₽",
      duration: "90-120 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-1-384x350.jpg",
      description: "Синхронный тайский массаж для двоих",
    },
  ],
  "4": [
    // Хаммам
    {
      id: "hammam-1",
      name: "Классический хаммам",
      price: "от 6 300 ₽",
      duration: "90-180 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2018/08/hammam-384x350.jpg",
      description: "Турецкая баня с пилингом и массажем",
    },
    {
      id: "hammam-2",
      name: "Королевский хаммам",
      price: "от 8 900 ₽",
      duration: "120-180 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2018/08/hammam-384x350.jpg",
      description: "Премиальная программа хаммама с масляным массажем",
    },
    {
      id: "hammam-3",
      name: "Хаммам для двоих",
      price: "от 12 600 ₽",
      duration: "120-180 мин",
      image: "https://7kpacok.ru/wp-content/uploads/2018/08/hammam-384x350.jpg",
      description: "Романтический хаммам для пары",
    },
  ],
  "5": [
    // Косметология
    {
      id: "cosm-1",
      name: "Классическая чистка лица",
      price: "от 3 500 ₽",
      duration: "60-90 мин",
      image: "/spa-facial-treatment.png",
      description: "Глубокое очищение и увлажнение кожи лица",
    },
    {
      id: "cosm-2",
      name: "Антивозрастной уход",
      price: "от 5 800 ₽",
      duration: "75-90 мин",
      image: "/spa-facial-treatment.png",
      description: "Комплексный уход против признаков старения",
    },
    {
      id: "cosm-3",
      name: "Гидрафейшл",
      price: "от 4 200 ₽",
      duration: "45-60 мин",
      image: "/spa-facial-treatment.png",
      description: "Аппаратная чистка и увлажнение кожи",
    },
  ],
  "6": [
    // Wellness программы
    {
      id: "well-1",
      name: "Детокс программа",
      price: "от 8 500 ₽",
      duration: "180-240 мин",
      image: "/wellness-spa-program.png",
      description: "Комплексная программа очищения организма",
    },
    {
      id: "well-2",
      name: "Антистресс терапия",
      price: "от 6 900 ₽",
      duration: "120-150 мин",
      image: "/wellness-spa-program.png",
      description: "Программа для снятия стресса и восстановления",
    },
    {
      id: "well-3",
      name: "Энергетический баланс",
      price: "от 7 800 ₽",
      duration: "150-180 мин",
      image: "/wellness-spa-program.png",
      description: "Восстановление энергетического баланса организма",
    },
  ],
}

export default function ServicesList({ categoryId, categoryName, onBack, onServiceSelect }: ServicesListProps) {
  const services = servicesByCategory[categoryId] || []

  return (
    <div className="h-screen bg-gray-50 text-dark-graphite overflow-hidden relative flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 pt-safe bg-white border-b border-light-grey">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -m-2 touch-manipulation">
            <ArrowLeft className="w-5 h-5 text-dark-graphite" />
          </button>
          <h1 className="text-lg font-semibold text-dark-graphite">{categoryName}</h1>
        </div>
      </div>

      {/* Services List */}
      <div className="flex-1 overflow-y-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        {services.length === 0 ? (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <p className="text-dark-graphite/60 mb-4">В этой категории пока нет доступных программ</p>
              <button
                onClick={onBack}
                className="px-6 py-2 bg-teal text-white rounded-lg font-medium touch-manipulation"
              >
                Назад к категориям
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-4 pb-20">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => onServiceSelect(service.id)}
                className="w-full bg-white rounded-xl p-4 shadow-sm touch-manipulation active:scale-98 transition-transform flex items-center gap-4"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-dark-graphite text-base mb-1">{service.name}</h3>
                  <p className="text-sm text-dark-graphite/60 mb-2">{service.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-soft-gold font-semibold">{service.price}</span>
                    <span className="text-sm text-dark-graphite/60">{service.duration}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab="catalog" onTabChange={() => {}} />
    </div>
  )
}
