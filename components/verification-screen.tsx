"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface VerificationScreenProps {
  phoneNumber: string
  onBack: () => void
  onSuccess: () => void
}

export default function VerificationScreen({ phoneNumber, onBack, onSuccess }: VerificationScreenProps) {
  const [code, setCode] = useState(["", "", "", ""])
  const [error, setError] = useState("")
  const [timer, setTimer] = useState(60)
  const [isResendDisabled, setIsResendDisabled] = useState(true)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setIsResendDisabled(false)
    }
  }, [timer])

  // Auto-submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleVerification()
    }
  }, [code])

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return // Only allow digits

    const newCode = [...code]
    newCode[index] = value.slice(-1) // Take only the last digit
    setCode(newCode)
    setError("")

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerification = async () => {
    const enteredCode = code.join("")

    // Simulate API call
    try {
      if (enteredCode === "0000") {
        onSuccess()
      } else {
        setError("Неверный код, попробуйте еще раз")
        setCode(["", "", "", ""])
        inputRefs.current[0]?.focus()
      }
    } catch (err) {
      setError("Ошибка при проверке кода")
    }
  }

  const handleResendCode = () => {
    setTimer(60)
    setIsResendDisabled(true)
    setError("")
    // In real app, this would trigger SMS resend
  }

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-2 text-dark-graphite hover:text-teal transition-colors rounded-lg hover:bg-light-grey/50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Назад</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-8 pb-16">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="text-dark-graphite">
            <div className="text-2xl font-light tracking-wider mb-1">
              Bali <span className="text-soft-gold">&</span> Thai SPA
            </div>
            <div className="text-2xl font-light tracking-[0.2em]">7 КРАСОК</div>
          </div>
        </div>

        {/* Title and Instructions */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-medium text-dark-graphite mb-4">Введите код подтверждения</h1>
          <p className="text-dark-graphite/70 text-sm leading-relaxed">
            Код отправлен на номер
            <br />
            <span className="font-medium">{phoneNumber}</span>
          </p>
        </div>

        {/* Code Input */}
        <div className="mb-6">
          <div className="flex justify-center gap-3 mb-4">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-12 h-12 text-center text-xl font-medium border-2 rounded-lg bg-white text-dark-graphite transition-colors ${
                  error ? "border-red-500 focus:border-red-500" : "border-light-grey focus:border-teal"
                } focus:outline-none focus:ring-2 focus:ring-teal/20`}
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>

        {/* Resend Code */}
        <div className="text-center">
          {isResendDisabled ? (
            <p className="text-dark-graphite/50 text-sm">Отправить код повторно через {formatTimer(timer)}</p>
          ) : (
            <button
              onClick={handleResendCode}
              className="text-teal text-sm font-medium hover:underline transition-colors"
            >
              Отправить код повторно
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
