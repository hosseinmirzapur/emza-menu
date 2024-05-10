"use client"

import React from "react"
import Header from "../builders/Header"

interface BranchProps {
   branchID: number | string
}

const BranchPage: React.FC<BranchProps> = ({ branchID }) => {
   return (
      <div>
         <Header />
         <div className="text-center">{branchID}</div>
      </div>
   )
}

export default BranchPage
