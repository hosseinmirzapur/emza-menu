"use client"

import { api } from "@/utils"
import { useState } from "react"
import Carousel from "react-multi-carousel"

interface Category {
   id: number | string
   name: string
   icon: string
   image: string
}

interface PageProps {
   branchID: number | string
}

const Categories: React.FC<PageProps> = ({ branchID }) => {
   // ** variables
   const [categories, setCategories] = useState<Category[]>()

   // ** functions
   const getCatefories = async () => {
      const res = await api.get(`/branch/${branchID}/categories`)
      const data: Category[] = res.data.categories
      setCategories(data)
   }

   return (
      <>
         <Carousel
            additionalTransfrom={0}
            arrows
            centerMode={false}
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
               desktop: {
                  breakpoint: {
                     max: 3000,
                     min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
               },
               mobile: {
                  breakpoint: {
                     max: 464,
                     min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
               },
               tablet: {
                  breakpoint: {
                     max: 1024,
                     min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
               },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
         >
            <div></div>
         </Carousel>
      </>
   )
}

export default Categories
