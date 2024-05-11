"use client"

import Image from "next/image"
import React from "react"
import { IoPricetagOutline } from "react-icons/io5"
import { RxFontSize } from "react-icons/rx"
import {
   Card,
   CardBody,
   CardFooter,
   CardTitle,
   Offcanvas,
   OffcanvasBody,
   OffcanvasHeader,
} from "reactstrap"

interface ComponentProps {
   open: boolean
   closeFunc: () => void
   products: any[]
}

const ProductOffCanvas: React.FC<ComponentProps> = ({
   open,
   closeFunc,
   products,
}) => {
   return (
      <Offcanvas
         isOpen={open}
         toggle={closeFunc}
         direction="end"
         className="bg-emzalight"
      >
         <OffcanvasHeader toggle={closeFunc} />
         <OffcanvasBody className="grid grid-cols-1 gap-3">
            {products.map((product, index) => (
               <Card key={index} className="hover:shadow-xl transition-all">
                  <CardTitle className="p-3 text-lg font-bold text-center">
                     {product.name}
                  </CardTitle>
                  <CardBody className="flex justify-center items-center">
                     <Image
                        src={product.image}
                        alt={product.name}
                        width={120}
                        height={120}
                        className="object-contain"
                     />
                  </CardBody>
                  <CardFooter className="flex flex-col gap-3 bg-coffeegray">
                     {product.sizes.map((s: any, i: any) => (
                        <div key={i} className="flex justify-around">
                           <div className="flex gap-2">
                              <RxFontSize fontSize={22} />
                              {s.size}
                           </div>
                           <div className="flex gap-2">
                              <IoPricetagOutline fontSize={22} />
                              {s.pivot.price} تومان
                           </div>
                        </div>
                     ))}
                  </CardFooter>
               </Card>
            ))}
         </OffcanvasBody>
      </Offcanvas>
   )
}

export default ProductOffCanvas
