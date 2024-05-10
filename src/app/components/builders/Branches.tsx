"use client"

import { api } from "@/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
   Button,
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Spinner,
} from "reactstrap"

import { motion } from "framer-motion"
import { SiCoffeescript } from "react-icons/si"
import Loader from "./Loader"

interface BranchData {
   id: number
   name: string
   note?: string
}

const fakeData: BranchData[] = [
   {
      id: 1,
      name: "اصلی",
   },
   {
      id: 2,
      name: "فرعی",
      note: "کافه امضا با فضایی دلنشین و آرام، شما را از هیاهوی بیرون دور می‌کند. در اینجا می‌توانید با یک فنجان قهوه‌ی خوش‌عطر و باکیفیت، انرژی دوباره بگیرید و یا با یک نوشیدنی گرم و دلچسب، لحظات آرامش‌بخشی را برای خود رقم بزنید.",
   },
   {
      id: 3,
      name: "شعبه سعادت آباد",
      note: `
      خسته‌ی شلوغی‌های روزمره هستید و دلتان یک استراحت واقعی می‌خواهد؟ پس به کافه امضا پناه بیاورید!

      کافه امضا با فضایی دلنشین و آرام، شما را از هیاهوی بیرون دور می‌کند. در اینجا می‌توانید با یک فنجان قهوه‌ی خوش‌عطر و باکیفیت، انرژی دوباره بگیرید و یا با یک نوشیدنی گرم و دلچسب، لحظات آرامش‌بخشی را برای خود رقم بزنید.
      
      ما در کافه امضا به کیفیت مواد اولیه اهمیت ویژه‌ای می‌دهیم و با استفاده از بهترین و تازه‌ترین مواد، طعم بی‌نظیری را برای نوشیدنی‌ها و خوراکی‌هایمان خلق می‌کنیم. فرقی نمی‌کند طرفدار قهوه باشید یا چای، دمنوش‌های گیاهی را ترجیح دهید یا اسموتی‌های خنک، در منوی متنوع کافه امضا، گزینه‌ای ایده‌آل برای هر سلیقه‌ای پیدا خواهید کرد.
      
      کافه امضا، پاتوقی دنج برای دورهمی‌های دوستانه و گپ‌وگفت‌های صمیمی است. همچنین فضایی آرام و مناسب برای مطالعه و کار در اختیار شما قرار می‌دهد.
      
      ما با تمام وجود تلاش می‌کنیم تا با ارائه‌ی خدماتی باکیفیت و فضایی دلنشین، لحظات خوشی را برای شما رقم بزنیم. پس برای فرار از روزمرگی و تجربه‌ی آرامش، به کافه امضا سر بزنید.
      `,
   },
   {
      id: 4,
      name: "شعبه ستارخان",
      note: "این  شعبه در ستارخان واقع شده است",
   },
]

const Branches = () => {
   // ** variables
   const [branches, setBranches] = useState<BranchData[]>()
   const [loading, setLoading] = useState(false)

   // ** functions
   const toggleLoading = () => setLoading(!loading)

   const getBranches = async () => {
      toggleLoading()
      // const res = await api.get("/user-branches")
      // const data: BranchData[] = res.data.branches
      // setBranches(data)
      setBranches(fakeData)

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
                  <CardBody className="h-[300px] md:h-[350px] overflow-auto">
                     {branch.note || "برای مشاهده منوی این شعبه کلیک کنید"}
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
