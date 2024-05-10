"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const AppLogo = () => {
   // ** variables
   const router = useRouter()

   // ** functions
   const navigateHome = () => router.push("/")

   return (
      <Image
         src={"/icons/logo.svg"}
         alt="app-logo"
         width={100}
         height={100}
         className="w-[100px] md:w-[120px] lg-[140px] cursor-auto md:cursor-pointer"
         onClick={navigateHome}
      />
   )
}

export default AppLogo
