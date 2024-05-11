"use client"

import React from "react"
import Header from "../builders/Header"
import Categories from "../builders/Categories"

interface BranchProps {
   branchID: number | string
}

const BranchPage: React.FC<BranchProps> = ({ branchID }) => {
   return (
      <div>
         <Header />
         <p className="text-center text-xl font-bold pt-4">دسته بندی محصولات</p>
         <div>
            <Categories branchID={branchID} />
         </div>
      </div>
   )
}

export default BranchPage
