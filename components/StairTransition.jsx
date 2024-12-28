"use client";

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

//componenets
import Stairs from "./Stairs"

const StairTransition = () => {
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none initial={{optio}}" />

        </div>
      </AnimatePresence>
    </>
  )
}

export default StairTransition