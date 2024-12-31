"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title:"Phone", desc: "(+1) 408-210-1582" },
  { icon: <FaEnvelope />, title:"Email", desc: "kanu.s@northeastern.edu" },
  { icon: <FaMapMarkerAlt />, title:"Location", desc: "Boston, Massachusetts" }
  ]

const Contacts = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: {delay: 2.4, duration: 1.4, ease: "easeIn"} 
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Looking for Summer Internship  2025!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstName" placeholder="First Name" />
                <Input type="lastName" placeholder="Last Name" />
                <Input type="emai" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              <Textarea className="h-[200px]" placeholder="Type your message here." />

              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded-md bg-[#27272c] text-accent flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.desc}</h3>
                  </div>
                </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contacts