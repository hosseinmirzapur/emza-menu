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
         <div className="text-center">
            <Categories branchID={branchID} />
         </div>
      </div>
   )
}

export default BranchPage
