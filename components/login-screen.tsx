"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LoginScreenProps {
  onSuccess: (phoneNumber: string) => void
}

export default function LoginScreen({ onSuccess }: LoginScreenProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isValid, setIsValid] = useState(false)

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "")

    // Remove leading 7 or 8 if present
    const cleanDigits = digits.replace(/^[78]/, "")

    // Limit to 10 digits
    const limitedDigits = cleanDigits.slice(0, 10)

    // Format as +7 (XXX) XXX-XX-XX
    let formatted = "+7"
    if (limitedDigits.length > 0) {
      formatted += ` (${limitedDigits.slice(0, 3)}`
      if (limitedDigits.length > 3) {
        formatted += `) ${limitedDigits.slice(3, 6)}`
        if (limitedDigits.length > 6) {
          formatted += `-${limitedDigits.slice(6, 8)}`
          if (limitedDigits.length > 8) {
            formatted += `-${limitedDigits.slice(8, 10)}`
          }
        }
      }
    }

    return formatted
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhoneNumber(formatted)

    // Check if phone number is complete (10 digits after +7)
    const digits = e.target.value.replace(/\D/g, "").replace(/^[78]/, "")
    setIsValid(digits.length === 10)
  }

  const handleContinue = () => {
    if (isValid) {
      // Here would be the API call to send SMS
      console.log("Sending SMS to:", phoneNumber)
      // Navigate to code verification screen
      onSuccess(phoneNumber)
    }
  }

  return (
    <div className="h-full bg-white flex flex-col justify-center px-8">
      <div className="text-center mb-12">
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-2xl font-light text-dark-graphite tracking-wide leading-tight">
            Bali <span className="text-soft-gold">&</span> Thai SPA
          </h1>
          <h2 className="font-serif text-3xl font-normal text-dark-graphite tracking-[0.2em] mt-1">
            <span className="text-3xl">7</span> КРАСОК
          </h2>
        </div>
        <p className="text-sm text-dark-graphite/60 mt-3">SPA-салон премиум класса</p>
      </div>

      <div className="space-y-8">
        <h2 className="font-serif text-xl text-center text-dark-graphite">Вход или регистрация</h2>

        <div className="space-y-6">
          <Input
            id="phone"
            type="tel"
            inputMode="numeric"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="+7 (___) ___-__-__"
            className="w-full h-12 text-base rounded-lg border border-light-grey bg-transparent text-dark-graphite placeholder:text-dark-graphite/50 focus:border-teal focus:outline-none transition-colors"
          />

          <Button
            onClick={handleContinue}
            disabled={!isValid}
            className="w-full h-12 text-base font-medium rounded-lg bg-teal hover:bg-teal/90 text-white disabled:bg-gray-200 disabled:text-gray-600 transition-colors"
          >
            Продолжить
          </Button>
        </div>

        <p className="text-xs text-center text-dark-graphite/60 leading-relaxed">
          Продолжая, вы соглашаетесь с{" "}
          <a href="#" className="text-teal underline">
            политикой конфиденциальности
          </a>
        </p>
      </div>
    </div>
  )
}
