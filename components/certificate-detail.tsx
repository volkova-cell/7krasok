"use client"
import { ArrowLeft } from "lucide-react"

interface CertificateDetailProps {
  onBack: () => void
  certificate: any
}

export default function CertificateDetail({ onBack, certificate }: CertificateDetailProps) {
  if (!certificate) {
    return (
      <div className="h-screen bg-gray-50 flex items-center justify-center">
        <p>Сертификат не найден.</p>
      </div>
    )
  }

  return (
    <div className="h-screen bg-gray-50 text-dark-graphite overflow-hidden relative flex flex-col">
      <div className="px-4 py-3 pt-safe bg-white border-b border-light-grey">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -m-2 touch-manipulation">
            <ArrowLeft className="w-5 h-5 text-dark-graphite" />
          </button>
          <h1 className="text-lg font-semibold text-dark-graphite truncate">{certificate.name}</h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <img src={certificate.image} alt={certificate.name} className="w-full h-auto rounded-lg mb-4" />
        <h2 className="text-xl font-semibold mb-2">{certificate.name}</h2>
        <p className="text-teal text-lg font-medium mb-4">{certificate.price}</p>
        <p className="text-dark-graphite/80">{certificate.description}</p>
      </div>
    </div>
  )
}