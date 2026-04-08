"use client"
import React from "react"
import { motion } from "framer-motion"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import Image from "next/image"
import Form from "./Form"
import Footer from "./Footer"

function ContactPage() {
  return (
    <>
      <div className="w-full min-h-screen bg-white/50 text-black px-4 sm:px-8 md:px-20 py-20 ">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto md:mt-11 sm:mt-11 mt-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight ">
            Let’s <span className="text-[#3A1A86]"> build</span> something <br /> great <span className="text-[#3A1A86]">together.</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row md:gap-2 sm:gap-2 gap-15   items-center sm:items-start md:items-start justify-around  mx-auto md:mt-32 sm:mt-32  mt-25 ">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-1 max-w-xs">
            <Image
              alt="address"
              width={100}
              height={100}
              src={'/AddressIcon.webp'} />
            <h2 className="text-[#3A1A86] text-3xl font-bold">Address</h2>
            <h4 className=""><span className="text-black font-bold text-md">US: </span>2510 E Sunset Road, Suite 5-971, Las Vegas NV 89110</h4>
            <p className=""><span className="text-black font-bold text-md">INDIA:</span> 3rd Floor, Tower B, NSL Techzone IT SEZ, Sector 144, Noida</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-1">
            <Image
              alt="contact"
              width={100}
              height={100}
              src={'/ContactIcon.webp'} />
            <h2 className="text-[#3A1A86] text-3xl font-bold">Contact</h2>
            <h4 className=""><span className="text-black font-bold text-md">Grievance Officer- </span>Data Privacy</h4>
            <h5 className=""><span className="text-black font-bold text-md">Name: </span>Aditya Mendiratta / Prashant Saraogi</h5>
            <p className=""><span className="text-black font-bold text-md">Designation:</span>
              AVP – IT Security</p>
            <p>uiuuiui@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2">

            <Image
              alt="folow us"
              width={100}
              height={100}
              src={'/Follow-UsIcon.webp'} />
            <h2 className="text-[#3A1A86] text-3xl font-bold mb-2 gap-1">Follow Us</h2>
            <p className=" flex  gap-4">
              <a href="https://linkedin.com" target="_blank">
                <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:scale-110 hover:text-black transition text-black/80 " />
              </a>
              <a href="https://facebook.com" target="_blank">
                <FaFacebookF className="w-5 h-5 cursor-pointer hover:scale-110 hover:text-black transition text-black/80 " />
              </a>
              <a href="https://x.com" target="_blank">
                <FaTwitter className="w-5 h-5 cursor-pointer hover:scale-110 hover:text-black transition text-black/80 " />
              </a>
              <a href="https://instagram.com" target="_blank">
                <FaInstagram className="w-5 h-5 cursor-pointer hover:scale-110 hover:text-black transition text-black/80 " />
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      <Form />
      <Footer />

    </>
  )
}

export default ContactPage