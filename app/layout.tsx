import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="flex flex-col h-screen w-screen">
        <div className="" id="modal"></div>
        {/* <div className=""> */}
        <Navigation />
        <div className="">{children}</div>
        <Footer />
        {/* </div> */}
      </body>
    </html>
  )
}
