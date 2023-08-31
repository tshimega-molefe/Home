"use client"

import { FC } from "react"
import { motion } from "framer-motion"

import ContactForm from "@/components/consultation-section/contact-form"
import Partners from "@/components/consultation-section/partners"
import VideoPlayer from "@/components/consultation-section/video-player"
import { Icons } from "@/components/icons"
import HoverCard from "@/components/product-section/hover-card"

interface ConsultationSectionProps {}

const ConsultationSection: FC<ConsultationSectionProps> = ({}) => {
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
      className="home-campaign-productivity container overflow-hidden px-4 pb-16 pt-8"
    >
      <motion.div className="flex space-x-3 md:space-x-10 md:pl-7">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <Icons.consultation className="h-6 w-6" />
            <span className="home-campaign-glowing-icon-glow-3 z-3 absolute left-0 top-0 h-full w-full"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            className=" mt-7 h-full w-[3px] rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent"
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="mb-24 md:w-10/12"
        >
          <h2
            className="js-build-in-item build-in-slideX-left build-in-animate mb-7 text-[20px] font-medium text-primary md:text-2xl"
            style={{ transitionDelay: "200ms" }}
          >
            Consultation
          </h2>
          <h3
            className="js-build-in-item build-in-slideX-left build-in-animate mb-7 text-[28px] font-medium text-primary max-lg:leading-10 max-md:leading-8 md:text-[40px] lg:text-5xl"
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
        <div className="mx-auto flex w-10/12 flex-col">
          <div className="p-6 text-[#7d8590]">
            <div className="font-medium">Company Details</div>
            <span className="f6 text-[12px]">[528491]:</span>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="relative mx-auto flex w-full flex-1 flex-col justify-between text-[17px] md:w-10/12 md:flex-row lg:my-10"
          >
            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="animate w-full"
            >
              <div className="box-shadow-mktg-sm mb-10 rounded-md md:mt-8">
                <ContactForm />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </HoverCard>
      <Partners />
      <VideoPlayer />
    </div>
  )
}

export default ConsultationSection
