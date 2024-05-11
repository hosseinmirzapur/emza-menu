"use client"

import { api } from "@/utils"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardTitle } from "reactstrap"
import Loader from "./Loader"

import { motion } from "framer-motion"
import ProductOffCanvas from "./OffCanvas"

interface Category {
   id: number | string
   title: string
   active_image: string
   passive_image: string
}

interface PageProps {
   branchID: number | string
}

const Categories: React.FC<PageProps> = ({ branchID }) => {
   // ** variables
   const [categories, setCategories] = useState<Category[] | any[]>()
   const [selectedProducts, setSelectedProducts] = useState<any[]>([])
   const [canvas, setCanvas] = useState(false)

   // ** functions
   const getCategories = async () => {
      const res = await api.get(`/get-branch-${branchID}-products`)
      setCategories(res.data.categories)
   }

   const toggleOffCanvas = () => setCanvas(!canvas)

   useEffect(() => {
      getCategories()
   }, [])

   return categories != null ? (
      categories.length > 0 ? (
         <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
               ease: "easeIn",
            }}
         >
            {categories.map((cat, index) => (
               <Card
                  key={index}
                  className="
                     flex
                     justify-center
                     items-center
                     w-10/12
                     mx-auto
                     py-3
                     md:cursor-pointer
                     hover:shadow-lg
                     transition-all
                     bg-yellow-100
                     min-h-[150px]
                  "
                  onClick={() => {
                     toggleOffCanvas()
                     setSelectedProducts(cat.products)
                  }}
               >
                  <CardTitle className="flex gap-3 justify-center items-center font-bold">
                     <Image
                        src={cat.passive_image || cat.active_image}
                        alt={`icon-${cat.title}`}
                        width={50}
                        height={50}
                     />
                     {cat.title}
                  </CardTitle>
               </Card>
            ))}

            <ProductOffCanvas
               open={canvas}
               closeFunc={toggleOffCanvas}
               products={selectedProducts}
            />
         </motion.div>
      ) : (
         <div>هنوز دسته بندی ثبت شده ای در این شعبه موجود نیست</div>
      )
   ) : (
      <Loader />
   )
}

export default Categories
