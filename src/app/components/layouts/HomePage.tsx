"use client"

import Branches from "../builders/Branches"
import Header from "../builders/Header"

const HomePage = () => {
   return (
      <div className="flex flex-col gap-10 mb-10">
         <Header />
         <div className="w-10/12 mx-auto">
            <Branches />
         </div>
      </div>
   )
}

export default HomePage
