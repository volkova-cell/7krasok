"use client"

import { useState } from "react"
import LoginScreen from "./login-screen"
import VerificationScreen from "./verification-screen"
import HomeScreen from "./home-screen"
import ProfileScreen from "./profile-screen"
import ServicesCatalog from "./services-catalog"
import ServicesList from "./services-list"
import ServiceDetail from "./service-detail"
import CertificatesGifts from "./certificates-gifts"
import DepositCardDetail from "./deposit-card-detail"
import CertificateDetail from "./certificate-detail"
import SalonSelection from "./booking/salon-selection"
import ServiceSelection from "./booking/service-selection"
import DateTimeSelection from "./booking/date-time-selection"
import BookingConfirmation from "./booking/booking-confirmation"
import BottomTabBar from "./bottom-tab-bar"
import CartScreen from "./cart-screen"

type Screen =
  | "login"
  | "verification"
  | "home"
  | "profile"
  | "cart"
  | "catalog"
  | "services-list"
  | "service-detail"
  | "certificates-gifts"
  | "certificate-detail"
  | "deposit-card-detail"
  | "booking-salon"
  | "booking-service"
  | "booking-datetime"
  | "booking-confirmation"

type Tab = "home" | "catalog" | "booking" | "cart" | "profile"

type BookingScreen = Extract<Screen, `booking-${string}`>

export default function SpaApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login")
  const [activeTab, setActiveTab] = useState<Tab>("home")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState("")
  const [selectedCategoryName, setSelectedCategoryName] = useState("")
  const [selectedServiceId, setSelectedServiceId] = useState("")
  const [selectedDepositCard, setSelectedDepositCard] = useState<any>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)
  const [bookingData, setBookingData] = useState({
    salon: "",
    service: "",
    date: "",
    time: "",
    price: "4 100 ₽",
  })

  const handleLoginSuccess = (phone: string) => {
    setPhoneNumber(phone)
    setCurrentScreen("verification")
  }

  const handleVerificationBack = () => {
    setCurrentScreen("login")
  }

  const handleVerificationSuccess = () => {
    setCurrentScreen("home")
  }

  const handleNavigateToProfile = () => {
    setCurrentScreen("profile")
    setActiveTab("profile")
  }

  const handleNavigateToHome = () => {
    setCurrentScreen("home")
    setActiveTab("home")
  }

  const handleNavigateToCatalog = () => {
    setCurrentScreen("catalog")
    setActiveTab("catalog")
  }

  const handleNavigateToBooking = () => {
    setCurrentScreen("booking-salon")
    setActiveTab("booking")
  }

  const handleCategorySelect = (categoryId: string, categoryName: string) => {
    setSelectedCategoryId(categoryId)
    setSelectedCategoryName(categoryName)

    if (categoryId === "certificates" || categoryId === "gift-cards") {
      setCurrentScreen("certificates-gifts")
    } else {
      setCurrentScreen("services-list")
    }
  }

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId)
    setCurrentScreen("service-detail")
  }

  const handleBackToCatalog = () => {
    setCurrentScreen("catalog")
  }

  const handleBackToServicesList = () => {
    setCurrentScreen("services-list")
  }

  const handleProfileNavigation = (screen: string) => {
    if (screen === "login") {
      setCurrentScreen("login")
    } else {
      console.log("Navigate to:", screen)
    }
  }

  const handleStartBooking = () => {
    setCurrentScreen("booking-salon")
  }

  const handleSalonSelect = (salonId: string) => {
    const salonNames: Record<string, string> = {
      "salon-1": "7 КРАСОК на Арбате",
      "salon-2": "7 КРАСОК на Тверской",
      "salon-3": "7 КРАСОК в ТЦ Европейский",
    }
    setBookingData((prev) => ({ ...prev, salon: salonNames[salonId] || salonId }))
    setCurrentScreen("booking-service")
  }

  const handleBookingServiceSelect = (serviceId: string) => {
    const serviceNames: Record<string, string> = {
      "thai-classic": "Thai Classic",
      "oriental-relax": "Oriental Relax",
      hammam: "Хаммам",
      "spa-couple": "Spa для двоих",
    }
    setBookingData((prev) => ({ ...prev, service: serviceNames[serviceId] || serviceId }))
    setCurrentScreen("booking-datetime")
  }

  const handleTimeSelect = (date: string, time: string) => {
    setBookingData((prev) => ({ ...prev, date, time }))
    setCurrentScreen("booking-confirmation")
  }

  const handleBookingConfirm = () => {
    setCurrentScreen("home")
  }

  const handleBackFromBooking = () => {
    const screenMap: Record<BookingScreen, Screen> = {
      "booking-salon": "service-detail",
      "booking-service": "booking-salon",
      "booking-datetime": "booking-service",
      "booking-confirmation": "booking-datetime",
    }
    setCurrentScreen(screenMap[currentScreen as BookingScreen] || "home")
  }

  const handleNavigateToDepositDetail = (card: any) => {
    setSelectedDepositCard(card)
    setCurrentScreen("deposit-card-detail")
  }

  const handleBackFromDepositDetail = () => {
    setCurrentScreen("certificates-gifts")
  }

  const handleNavigateToCertificateDetail = (certificate: any) => {
    setSelectedCertificate(certificate)
    setCurrentScreen("certificate-detail")
  }

  const handleBackFromCertificateDetail = () => {
    setCurrentScreen("certificates-gifts")
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return <LoginScreen onSuccess={handleLoginSuccess} />
      case "verification":
        return (
          <VerificationScreen
            phoneNumber={phoneNumber}
            onBack={handleVerificationBack}
            onSuccess={handleVerificationSuccess}
          />
        )
      case "home":
        return (
          <HomeScreen
            onNavigateToProfile={handleNavigateToProfile}
            onNavigateToCatalog={handleNavigateToCatalog}
            onNavigateToBooking={handleNavigateToBooking}
          />
        )
      case "profile":
        return (
          <ProfileScreen
            onNavigate={handleProfileNavigation}
            onNavigateToHome={handleNavigateToHome}
            onNavigateToCatalog={handleNavigateToCatalog}
            onNavigateToBooking={handleNavigateToBooking}
          />
        )
      case "cart":
        return <CartScreen onBack={handleNavigateToHome} />
      case "catalog":
        return <ServicesCatalog onBack={handleNavigateToHome} onCategorySelect={handleCategorySelect} />
      case "services-list":
        return (
          <ServicesList
            categoryId={selectedCategoryId}
            categoryName={selectedCategoryName}
            onBack={handleBackToCatalog}
            onServiceSelect={handleServiceSelect}
          />
        )
      case "service-detail":
        return (
          <ServiceDetail
            serviceId={selectedServiceId}
            onBack={handleBackToServicesList}
            onBooking={handleStartBooking}
          />
        )
      case "certificates-gifts":
        return (
          <CertificatesGifts
            categoryId={selectedCategoryId}
            categoryName={selectedCategoryName}
            onBack={handleBackToCatalog}
            onNavigateToDepositDetail={handleNavigateToDepositDetail}
            onNavigateToCertificateDetail={handleNavigateToCertificateDetail}
          />
        )
      case "certificate-detail":
        return <CertificateDetail onBack={handleBackFromCertificateDetail} certificate={selectedCertificate} />
      case "deposit-card-detail":
        return <DepositCardDetail onBack={handleBackFromDepositDetail} card={selectedDepositCard} />
      case "booking-salon":
        return <SalonSelection onBack={handleBackFromBooking} onSalonSelect={handleSalonSelect} />
      case "booking-service":
        return <ServiceSelection onBack={handleBackFromBooking} onServiceSelect={handleBookingServiceSelect} />
      case "booking-datetime":
        return <DateTimeSelection onBack={handleBackFromBooking} onTimeSelect={handleTimeSelect} />
      case "booking-confirmation":
        return (
          <BookingConfirmation
            onBack={handleBackFromBooking}
            onConfirm={handleBookingConfirm}
            bookingData={bookingData}
          />
        )
      default:
        return <LoginScreen onSuccess={handleLoginSuccess} />
    }
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as Tab)
    if (tab === "home") setCurrentScreen("home")
    if (tab === "catalog") setCurrentScreen("catalog")
    if (tab === "booking") setCurrentScreen("booking-salon")
    if (tab === "profile") setCurrentScreen("profile")
    if (tab === "cart") setCurrentScreen("cart")
  }

  const showTabBar =
    currentScreen !== "login" &&
    currentScreen !== "verification"

  return (
    <div className="h-dvh w-full max-w-[400px] mx-auto bg-white grid grid-rows-[1fr_auto]">
      <div className="overflow-y-auto min-h-0">
        {renderScreen()}
      </div>
      <div>
        {showTabBar && <BottomTabBar activeTab={activeTab} onTabChange={handleTabChange} />}
      </div>
    </div>
  )
}
