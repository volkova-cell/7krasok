"use client"
import { Search, Bell, User, Calendar, ShoppingCart, Grid3X3, Home } from "lucide-react"

interface Promotion {
  id: string
  title: string
  description: string
  image: string
  price?: string
}

interface Service {
  id: string
  name: string
  duration: string
  price: string
  image: string
  programs: number
}

interface Master {
  id: string
  name: string
  specialty: string
  image: string
  category: string
}

interface HomeScreenProps {
  onNavigateToProfile?: () => void
  onNavigateToCatalog?: () => void
  onNavigateToBooking?: () => void
}

const promotions: Promotion[] = [
  {
    id: "1",
    title: "Романтические встречи",
    description:
      'Познакомьтесь или влюбитесь снова в салонах "7 КРАСОК"! До 11 мая действуют специальные цены на все программы SPA для двоих.',
    price: "от 9 900₽",
    image: "https://7kpacok.ru/wp-content/uploads/2025/01/rv_vesna_25_Montazhnaya-oblast-1.jpg",
  },
  {
    id: "2",
    title: "Скидка -40% для новых гостей",
    description: 'Откройте для себя настоящий балийский и тайский массаж в "7 КРАСОК" со скидкой 40%!',
    image: "https://7kpacok.ru/wp-content/uploads/2024/08/pervyj-vizit-01.jpg",
  },
  {
    id: "3",
    title: "Клубные карты",
    description: "Самые выгодные абонементы! Посещайте SPA-программы с особой скидкой от 10% до 40%",
    image: "https://7kpacok.ru/wp-content/uploads/2025/01/klubnye_VESNA25__976h700.jpg",
  },
]

const services: Service[] = [
  {
    id: "1",
    name: "Oriental Relax",
    duration: "1-2 часа",
    price: "от 4 100 ₽",
    programs: 5,
    image: "https://7kpacok.ru/wp-content/uploads/2022/12/384h350-2-384x350.png",
  },
  {
    id: "2",
    name: "Thai Classic",
    duration: "1-2 часа",
    price: "от 4 100 ₽",
    programs: 5,
    image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-2-384x350.jpg",
  },
  {
    id: "3",
    name: "Хаммам",
    duration: "1.5-3 часа",
    price: "от 6 300 ₽",
    programs: 6,
    image: "https://7kpacok.ru/wp-content/uploads/2018/08/hammam-384x350.jpg",
  },
  {
    id: "4",
    name: "Spa для двоих",
    duration: "2-3 часа",
    price: "от 11 900 ₽",
    programs: 8,
    image: "https://7kpacok.ru/wp-content/uploads/2020/02/384X350-1-384x350.jpg",
  },
]

const masters: Master[] = [
  {
    id: "1",
    name: "Рэсту",
    specialty: "Гранд Мастер",
    category: "Балийский массаж",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restu.jpg-jaC3q5kdPPQNkcfbqj1ypBiOZZgl7I.jpeg",
  },
  {
    id: "2",
    name: "Хаяти",
    specialty: "Топ Мастер",
    category: "Балийский массаж",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restu.jpg-jaC3q5kdPPQNkcfbqj1ypBiOZZgl7I.jpeg",
  },
  {
    id: "3",
    name: "Деа",
    specialty: "Дипломированный Мастер",
    category: "Балийский массаж",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restu.jpg-jaC3q5kdPPQNkcfbqj1ypBiOZZgl7I.jpeg",
  },
  {
    id: "4",
    name: "Нана",
    specialty: "Дипломированный Мастер",
    category: "Тайский массаж",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restu.jpg-jaC3q5kdPPQNkcfbqj1ypBiOZZgl7I.jpeg",
  },
  {
    id: "5",
    name: "Миу",
    specialty: "Топ Мастер",
    category: "Тайский массаж",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restu.jpg-jaC3q5kdPPQNkcfbqj1ypBiOZZgl7I.jpeg",
  },
]

export default function HomeScreen({ onNavigateToProfile, onNavigateToCatalog, onNavigateToBooking }: HomeScreenProps) {
  return (
    <div className="h-screen bg-white text-dark-graphite overflow-hidden relative flex flex-col touch-pan-y">
      <div className="px-4 py-3 pt-6 bg-white border-b border-light-grey">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <div className="text-base font-medium tracking-wide text-dark-graphite">
              Bali<span className="text-soft-gold">&</span>Thai SPA
            </div>
            <div className="text-xs font-normal tracking-widest text-dark-graphite/60">7 КРАСОК</div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-3 -m-1 touch-manipulation">
              <Search className="w-5 h-5 text-dark-graphite" />
            </button>
            <button className="p-3 -m-1 touch-manipulation">
              <Bell className="w-5 h-5 text-dark-graphite" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto pb-safe bg-gray-50 overscroll-contain"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Promotions Section */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-dark-graphite">Акции и спецпредложения</h2>
          </div>
          <div
            className="flex gap-3 overflow-x-auto scrollbar-hide overscroll-x-contain"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="flex-shrink-0 w-72 rounded-xl overflow-hidden shadow-sm bg-white touch-manipulation"
              >
                <div className="h-36 relative overflow-hidden">
                  <img
                    src={promo.image || "/romantic-spa-massage.png"}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {promo.price && (
                    <div className="absolute top-3 right-3 bg-soft-gold text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {promo.price}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-dark-graphite text-base mb-2">{promo.title}</h3>
                  <p className="text-sm text-dark-graphite/70 line-clamp-2">{promo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-dark-graphite">Популярные услуги</h2>
            <button className="text-sm text-teal font-medium p-2 -m-2 touch-manipulation">Все</button>
          </div>
          <div
            className="flex gap-3 overflow-x-auto scrollbar-hide overscroll-x-contain"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0 w-48 rounded-xl overflow-hidden shadow-sm bg-white touch-manipulation"
              >
                <div className="h-28 relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg?height=112&width=192&query=spa massage therapy"}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-dark-graphite text-sm mb-2 text-center">{service.name}</h3>
                  <div className="text-center">
                    <span className="text-sm font-medium text-teal">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Masters Section */}
        <div className="px-4 py-4 pb-24">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-dark-graphite">Наши мастера</h2>
            <button className="text-sm text-teal font-medium p-2 -m-2 touch-manipulation">Все</button>
          </div>
          <div
            className="flex gap-3 overflow-x-auto scrollbar-hide overscroll-x-contain"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {masters.map((master) => (
              <div
                key={master.id}
                className="flex-shrink-0 w-36 rounded-xl overflow-hidden shadow-sm bg-white touch-manipulation"
              >
                <div className="h-36 relative overflow-hidden">
                  <img
                    src={master.image || "/placeholder.svg"}
                    alt={master.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-dark-graphite text-sm mb-1">{master.name}</h3>
                  <p className="text-xs text-dark-graphite/60 mb-1">{master.specialty}</p>
                  <p className="text-xs text-soft-gold font-medium">{master.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
