"use client"

import { FC, useState } from "react"
import { motion } from "framer-motion"

import ContactForm from "@/components/consultation-section/contact-form"
import { Icons } from "@/components/icons"
import HoverCard from "@/components/product-section/hover-card"

interface ConsultationSectionProps {}

const ConsultationSection: FC<ConsultationSectionProps> = ({}) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered1, setHovered1] = useState<boolean>(false)
  const [hovered2, setHovered2] = useState<boolean>(false)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  }
  return (
    <div
      id="consultation"
      className="home-campaign-productivity container px-4 pt-8 pb-16 overflow-hidden"
    >
      <motion.div className="flex md:pl-7 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <Icons.consultation className="w-6 h-6" />
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent"
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="md:w-10/12 mb-24"
        >
          <h2
            className="text-[20px] md:text-2xl mb-7 font-medium text-primary js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Consultation
          </h2>
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-primary js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-[#939aff]">
              Book&nbsp;
              <span className="text-primary">your free consultation now.</span>
            </p>
            <span className="text-2xl text-[#7d8590] max-lg:text-[18px]">
              Let&apos;s discuss your business, about us, and your next steps.
              <br />
              <span className="text-xl max-lg:text-sm">
                Schedule a 30 min call:
              </span>
            </span>
          </h3>
        </motion.div>
      </motion.div>
      <HoverCard backgroundColor="#939aff" direction="" left="0">
        <div className="flex w-10/12 flex-col mx-auto">
          <div className="text-[#7d8590] p-6">
            <div className="font-medium">Company Details</div>
            <span className="text-[12px] f6">Enter:</span>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="relative flex text-[17px] flex-col md:flex-row lg:my-10 flex-1 justify-between w-10/12 mx-auto md:gap-10"
          >
            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="animate w-full"
            >
              <div
                className="p-6 md:mt-8 mb-10 box-shadow-mktg-xl rounded-md"
                style={{ background: "rgba(235, 245, 255, 0.2)" }}
              >
                <ContactForm />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </HoverCard>
    </div>
  )
}

export default ConsultationSection
