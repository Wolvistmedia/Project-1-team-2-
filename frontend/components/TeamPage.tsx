'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Form from './Form'
import Footer from './Footer'

function TeamPage() {
    const members = [
        "/photo1.jpg",
        "/photo2.jpg",
        "/photo3.jpg",
        "/photo1.jpg",
        "/photo2.jpg",
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % members.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    const floatingImages = [
        { pos: "top-[10%] left-[10%]", delay: 0 },
        { pos: "top-[40%] right-[10%]", delay: 0.5 },
        { pos: "bottom-[10%] left-[25%]", delay: 1 },
    ]


    const teamPhotos = [
        { src: "/photo1.jpg", label: "Our People" },
        { src: "/photo2.jpg", label: "Leadership Team" },
        { src: "/photo3.jpg", label: "At Work" },
        { src: "/photo1.jpg", label: "Together" },
    ]

    return (
        <>
            {/* ===== HERO SECTION — same as before ===== */}
            <div className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-12 overflow-hidden">

                <div className="absolute top-0 w-full h-full -z-10 overflow-hidden">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source src="/hero1.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 mt-30 md:mt-8"
                >
                    <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                        <span className="w-8 h-0.5 bg-[#3A1A86] inline-block" />
                        <p className="text-xs uppercase tracking-[0.2em] text-[#3A1A86] font-semibold">
                            Our Team
                        </p>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.15] tracking-tight">
                        <span className="text-black">We are </span>
                        <span className="text-[#3A1A86]">impatient,</span>
                        <br />
                        <span className="text-black">creative </span>
                        <span className="text-[#3A1A86]">&</span>
                        <span className="text-black"> ambitious</span>
                        <br />
                        <span className="text-black/90 font-light italic text-3xl sm:text-4xl md:text-4xl">
                            by design.
                        </span>
                    </h1>

                    <div className="w-16 h-1 bg-[#3A1A86] rounded-full mt-6 mb-5 mx-auto md:mx-0" />

                    <p className="text-black/90 text-base md:text-lg max-w-sm leading-relaxed">
                        A passionate team crafting bold digital experiences — with purpose, precision, and a little obsession.
                    </p>

                    <div className="flex gap-8 mt-8 justify-center md:justify-start">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-2xl font-bold text-[#3A1A86]">50+</span>
                            <span className="text-xs text-black/90 mt-1">Team Members</span>
                        </div>
                        <div className="w-px bg-white/20" />
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-2xl font-bold text-[#3A1A86]">12+</span>
                            <span className="text-xs text-black/90 mt-1">Countries</span>
                        </div>
                        <div className="w-px bg-white/20" />
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-2xl font-bold text-[#3A1A86]">200+</span>
                            <span className="text-xs text-black/90 mt-1">Projects Done</span>
                        </div>
                    </div>

                    <motion.button
                        onClick={() => {
                            document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="mt-10 px-8 py-3.5 bg-linear-to-r from-[#3A1A86] to-[#6A51A5] text-white text-sm font-semibold rounded-full shadow-lg transition-all tracking-wide"
                    >
                        Join Our Team →
                    </motion.button>
                </motion.div>

                <div className="w-full md:w-1/2 relative h-80 md:h-120">
                    {floatingImages.map((item, i) => (
                        <motion.div
                            key={i}
                            className={`absolute ${item.pos}`}
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
                        >
                            <motion.div
                                key={index + i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={members[(index + i) % members.length]}
                                    alt="team member"
                                    width={130}
                                    height={130}
                                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-purple-900 object-cover shadow-md"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center">
                        <div className="w-65 h-65 md:w-95 md:h-95 rounded-full bg-blue-400/20 blur-2xl" />
                    </div>
                </div>
            </div>

            {/* ===== TAGLINE — same as before ===== */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='mt-10 px-4'>
                <motion.div
                    className="text-xl sm:text-3xl md:text-4xl font-bold text-center tracking-tight leading-[1.15]">
                    <span className='md:mb-0 mb-1 text-black'> We Take on <span className='text-[#3A1A86]'>Momentous Projects.</span></span><br />
                    &quot;The Bigger The Better. Big Data. <span className='text-[#3A1A86]'>Big Scale. Big Challenge</span>&quot;
                </motion.div>
            </motion.div>

            {/* ===== ✅ NEW — Team Photos Grid ===== */}
            <div className="px-4 md:px-16 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto"
                >
                    {teamPhotos.map((photo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative overflow-hidden rounded-xl group"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.label}
                                width={700}
                                height={450}
                                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Hover overlay with label */}
                            <div className="absolute inset-0 bg-[#3A1A86]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-semibold text-lg">{photo.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div id="form-section">
                <Form />
            </div>

            <Footer />
        </>
    )
}

export default TeamPage