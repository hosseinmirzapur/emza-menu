"use client"

import { api } from "@/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap"

import { motion } from "framer-motion"
import { SiCoffeescript } from "react-icons/si"
import Loader from "./Loader"

interface BranchData {
   id: number
   name: string
   address?: string
   type: string
}

const Branches = () => {
   // ** variables
   const [branches, setBranches] = useState<BranchData[]>()
   const [loading, setLoading] = useState(false)

   // ** functions
   const toggleLoading = () => setLoading(!loading)

   const getBranches = async () => {
      toggleLoading()
      const res = await api.get("/branch")
      const data: BranchData[] = res.data.branches

      const branchArray: BranchData[] = []
      data.map((branch) => {
         if (branch.type !== "STORE") {
            branchArray.push(branch)
         }
      })
      setBranches(branchArray)

      toggleLoading()
   }

   useEffect(() => {
      getBranches()
   }, [])

   return branches != null ? (
      branches.length > 0 ? (
         <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
               ease: "easeIn",
            }}
         >
            {branches.map((branch, index) => (
               <Card key={index} className="hover:shadow-xl transition-all">
                  <CardHeader className="flex gap-3 bg-yellow-500 font-bold align-middle">
                     <SiCoffeescript fontSize={24} className="text-[#9c614b]" />
                     {branch.name}
                  </CardHeader>
                  <CardBody className="h-[200px] md:h-[250px] overflow-auto">
                     {branch.address || "برای مشاهده منوی این شعبه کلیک کنید"}
                  </CardBody>
                  <CardFooter className="flex justify-center">
                     <Link href={`/branch/${branch.id}`}>
                        <Button className="bg-gradient-to-r from-[#9c614b] to-[#9c614b] text-slate-100 aria-pressed:animate-ping">
                           مشاهده منوی شعبه
                        </Button>
                     </Link>
                  </CardFooter>
               </Card>
            ))}
         </motion.div>
      ) : (
         <div className="flex justify-start">
            <p>هنوز شعبه ای به ثبت نرسیده است</p>
         </div>
      )
   ) : (
      <Loader />
   )
}

export default Branches
