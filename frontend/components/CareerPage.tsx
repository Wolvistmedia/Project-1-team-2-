"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react"
import Form from "./Form"
import Footer from "./Footer"

function CareerPage() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const rafRef = useRef(0)
  const [isMobile, setIsMobile] = useState(false)
  const [index, setIndex] = useState(0)

  const images = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo2.jpg",
    "/photo1.jpg",
    "/photo3.jpg",
  ]
  const testimonials = [
    {
      title: "Two Years of Amazing Opportunities",
      desc: "Two amazing years of start-up experience with multiple opportunities to wear different hats, solve complicated problem statements, perform under pressure, and never stop learning..",
      name: "Harsh",
      role: "Senior Engineer",
      img: "/photo1.jpg",
    },
    {
      title: "A Journey of Growth & Learning",
      desc: "Working here has been an incredible experience. I got exposure to real-world challenges and worked with an amazing team that constantly pushes you to grow.",
      name: "Aman",
      role: "Software Developer",
      img: "/photo2.jpg",
    },
  ]

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const cardW = isMobile ? 160 : 240
    const gap = isMobile ? 10 : 16
    const singleSetW = images.length * (cardW + gap)

    posRef.current = 0

    const animate = () => {
      posRef.current += 0.6
      if (posRef.current >= singleSetW) posRef.current -= singleSetW
      track.style.transform = `translateX(-${posRef.current}px)`
      rafRef.current = requestAnimationFrame(animate)
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [images.length, isMobile])


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }

  const loopedImages = [...images, ...images, ...images, ...images]

  const cardWidth = isMobile ? 160 : 240
  const cardHeight = isMobile ? 220 : 320

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">

        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src="/hero1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30 " />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10">

          <div className="w-full overflow-hidden">
            <div
              ref={trackRef}
              className="flex will-change-transform py-2 mt-12"
              style={{ gap: isMobile ? "10px" : "16px" }}
            >
              {loopedImages.map((img, i) => (
                <div
                  key={i}
                  className="shrink-0 rounded-3xl overflow-hidden border border-white/20"
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    minWidth: `${cardWidth}px`,
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <Image src={img} alt="" fill sizes={`${cardWidth}px`} className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 w-full max-w-2xl px-4 mt-7">
            <div className="flex-1 h-0.5 rounded bg-linear-to-r from-transparent to-purple-500/60" />
            <motion.h2
              initial={{ opacity: 0,  }} whileInView={{ opacity: 1,  }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center whitespace-nowrap
            bg-linear-to-r from-purple-700 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Join Our Family
            </motion.h2>
            <div className="flex-1 h-0.5 rounded bg-linear-to-l from-transparent to-purple-500/60" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.7 }}
            className="mt-5 text-center font-medium text-black max-w-2xl text-sm sm:text-base md:text-lg">
            Work with passionate people, build impactful solutions, and grow in an
            environment where creativity meets technology.
          </motion.p>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="absolute md:bottom-5 sm:bottom-4 bottom-6 text-black bg-white/20 backdrop-blur-lg border border-white/80 shadow-lg rounded-2xl p-1"
          >
            <ArrowDown className="text-xl" />
          </motion.div>

        </div>
      </div>


      <motion.div
        className="w-full bg-[#f5f7fb] py-16 px-4 sm:px-8 md:px-16">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">

          <button
            onClick={prevSlide}
            className="z-20 absolute left-2 sm:left-4 md:-left-20 top-[90%] md:top-1/2 md:-translate-y-1/2 
  w-9 h-9 sm:w-10 sm:h-10 bg-white shadow-md border rounded-full 
  flex items-center justify-center hover:bg-gray-200 transition md:mr-2"
          >
            <ArrowLeft className="w-5 h-5 text-purple-900" />
          </button>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.7 }}
            className="flex-1 max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-[#3A1A86] to-[#6A51A5] bg-clip-text text-transparent mb-6">
              {testimonials[index].title}
            </h2>

            <p className="text-black text-sm sm:text-base mb-8">
              {testimonials[index].desc}
            </p>

            <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
              {testimonials[index].name}
            </h3>
            <p className="text-gray-500 mt-1">{testimonials[index].role}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.7 }}
            className="flex-1 flex justify-center">
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image src={testimonials[index].img} alt="" width={300} height={300} className="object-cover w-full h-full" />
            </div>
          </motion.div>

          <button
            onClick={nextSlide}
            className="z-20 absolute right-2 sm:right-4 md:-right-2 top-[90%] md:top-1/2 md:-translate-y-1/2 
  w-9 h-9 sm:w-10 sm:h-10 bg-white shadow-md border rounded-full 
  flex items-center justify-center hover:bg-gray-200 transition"
          >
            <ArrowRight className="w-5 h-5 text-purple-900" />
          </button>

        </div>
      </motion.div>


      <Form />
      <Footer />
    </>
  )
}

export default CareerPage