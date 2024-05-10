"use client"

import { Spinner } from "reactstrap"

const Loader = () => {
   return (
      <div className="flex justify-center items-center">
         <Spinner className="text-coffeelight" />
      </div>
   )
}

export default Loader
