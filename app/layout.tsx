import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-cormorant",
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "7 КРАСОК - Bali&Thai SPA",
  description: "Мобильное приложение спа-салона 7 КРАСОК с балийским и тайским массажем",
  generator: "v0.app",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "7 КРАСОК SPA",
    startupImage: "/spa-mobile-splash.png",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "msapplication-TileColor": "#14b8a6",
    "msapplication-config": "none",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
      <head>
        <style>{`
html {
  font-family: ${montserrat.style.fontFamily};
  --font-sans: ${montserrat.variable};
  --font-serif: ${cormorant.variable};
}
        `}</style>
      </head>
      <body className="overscroll-none touch-pan-y bg-gray-100">
        <div className="min-h-screen max-w-sm mx-auto bg-white relative overflow-hidden shadow-xl">{children}</div>
      </body>
    </html>
  )
}
