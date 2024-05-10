import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import "./globals.css"
import "react-multi-carousel/lib/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const inter = Vazirmatn({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "منوی کافه امضا",
   description: "کافه امضا | امضایت را بنوش!",
   icons: ["/icons/logo.svg"],
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body
            className={`${inter.className} bg-no-repeat bg-gradient-to-t from-white to-coffeegray`}
            dir="rtl"
         >
            <ToastContainer position="top-center" closeOnClick draggable />
            {children}
         </body>
      </html>
   )
}
