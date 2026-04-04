"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const images = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
]

export default function TeamSection() {
  const [current, setCurrent] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="w-full py-12 px-4 md:px-10 lg:px-20">

      {/* Heading */}
      <div className=" flex flex-col  w-full    px-4 sm:px-6 md:px-10 lg:px-20">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
          <p className="text-[#7c6fff] text-xs font-extrabold tracking-[0.2em] uppercase mb-4">Our dna</p>
          <h2 className="text-black/80 font-bold uppercase text-4xl sm:text-5xl md:text-6xl leading-tight">
            meet our team
          </h2>
        </motion.div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

        {/* LEFT - Carousel */}
        <motion.div
          animate={{ opacity: 1,  }} initial={{ opacity: 0, }} transition={{ duration: 0.6 }}
          className="relative w-full max-w-2xl">

          {/* Image */}
          <Image
            alt="team image"
            width={50}
            height={50}
            src={images[current]}
            className="w-full h-75 md:h-100 object-cover rounded-xl"
          />

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${current === i ? "bg-black" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </motion.div>


        {/* RIGHT - Text */}
        <motion.div
          animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }} transition={{ duration: 0.6 }}
          className="max-w-lg text-center lg:text-left">

          <p className="text-gray-500 mb-2">
            Solutions in our DNA
          </p>

          <h3 className="text-2xl md:text-4xl font-semibold text-black leading-snug">
            Listen. Empathize. Think. Provide!
          </h3>

          <button className="mt-6  bg-linear-to-r from-[#3A1A86] to-[#6A51A5] cursor-pointer text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
            Meet our Team
          </button>
        </motion.div>

      </div>
    </div>
  )
}