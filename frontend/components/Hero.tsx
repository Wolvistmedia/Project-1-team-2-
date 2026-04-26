"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Cpu, Code2, BarChart3, Factory, ArrowDown, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import TeamSection from "./TeamSection"

import Footer from "./Footer"

const principles = [
    { number: "01", title: "OPEN MINDEDNESS", description: "Let go of dogma to see possibilities." },
    { number: "02", title: "PRAGMATISM", description: "I do. I learn." },
    { number: "03", title: "MERITOCRACY", description: "I make decisions — I'm closest to the answer." },
    { number: "04", title: "INTELLECTUAL HUMILITY", description: "Not looking for the right, but to find the right answers." },
    { number: "05", title: "FUN", description: "Problems are serious. We are not." },
]

const card = [
    {
        icon: <Cpu className="w-6 h-6 text-indigo-600" />,
        number: 1,
        id: "digital-engineering",
        title: "Digital Engineering",
        description: "We design and modernize digital solutions using advanced technologies to improve efficiency, scalability, and user experience.",
        step: <ArrowRight className="w-5 cursor-pointer h-5 text-indigo-600" />,
    },
    {
        icon: <Code2 className="w-6 h-6 text-indigo-600" />,
        number: 2,
        title: "Software Product Engineering",
        id: "software-product-engineering",
        description: "We build robust, scalable, and high-performance software products tailored to your business needs from idea to launch.",
        step: <ArrowRight className="w-5 cursor-pointer h-5 text-indigo-600" />,
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
        number: 3,
        title: "AI Led Business Insights",
        id: "ai-business-insights",
        description: "We leverage AI and data analytics to deliver actionable insights that help you make smarter and faster business decisions.",
        step: <ArrowRight className="w-5 cursor-pointer h-5 text-indigo-600" />,
    },
    {
        icon: <Factory className="w-6 h-6 text-indigo-600" />,
        number: 4,
        title: "Industrial Products",
        id: "industrial-products",
        description: "We develop innovative industrial solutions that optimize operations, enhance productivity, and ensure long-term reliability.",
        step: <ArrowRight className="w-5 cursor-pointer h-5 text-indigo-600" />,
    },
]

function Hero() {
    const router = useRouter()
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((c) => (c - 1 + card.length) % card.length)
    const next = () => setCurrent((c) => (c + 1) % card.length)

    return (
        <>
            <motion.div className="relative flex flex-col items-center justify-center h-screen text-center px-4 md:px-5 gap-6">
                <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source src="/hero1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
                </div>

                <div className="font-bold text-5xl sm:text-5xl md:text-8xl lg:text-8xl max-w-8xl mx-auto">
                    <motion.span initial={{ x: 30 }} animate={{ x: 0 }} transition={{ duration: 0.6 }} className="block text-black mt-2">
                        Unleashing the Potential of
                    </motion.span>
                    <motion.span initial={{ x: -30 }} animate={{ x: 0 }} transition={{ duration: 0.6 }} className="block bg-linear-to-r from-purple-700 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
                        The Most Impatient Mind
                    </motion.span>
                </div>

                <motion.p initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 0.8 }} className="font-medium text-xs sm:text-sm md:text-lg text-gray-800 md:pt-5 sm:pt-5 pt-0 max-w-xl leading-relaxed">
                    We solve problems through technology pragmatism and rigor. Your go-to partner for digital transformation, AI enablement, and scalable software solutions.
                </motion.p>

                <motion.button 
                    initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} onClick={() => router.push('/Services')} className="px-5 flex gap-2 items-center py-3 rounded-full text-white font-medium bg-linear-to-r from-[#3A1A86] to-[#6A51A5] shadow-md hover:scale-105 transition">
                    Explore Services
                    <ArrowRight className="text-xl" />
                </motion.button>

                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 1.2, repeat: Infinity }} className="absolute bottom-10 text-4xl text-black bg-white/20 backdrop-blur-lg border border-white/80 shadow-lg rounded-2xl p-1">
                    <ArrowDown className="text-xl" />
                </motion.div>
            </motion.div>

            <section className="relative w-full md:py-20 py-12 shadow-inner px-4 md:px-10 lg:px-20 overflow-hidden bg-[FAF7F3]/10">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
                    <p className="text-[#7c6fff] text-xs font-extrabold tracking-[0.2em] uppercase mb-4">Operating Principles</p>
                    <h2 className="text-black/80 font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
                        How We Think. <br /> How We Work.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 rounded-2xl overflow-hidden border border-white/10">
                    {principles.map((p, i) => (
                        <motion.div key={p.number} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative flex flex-col gap-3 p-3 md:p-8 py-8 bg-linear-to-r from-[#3A1A86] to-[#6A51A5] backdrop-blur-sm border-white/10 cursor-pointer">
                            <span className="text-white text-sm font-mono tracking-widest">{p.number}</span>
                            <h3 className="text-white/80 font-bold text-sm md:text-lg uppercase">{p.title}</h3>
                            <p className="text-white/40 text-xs md:text-md">{p.description}</p>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#7c6fff] to-[#c471ed] group-hover:w-full transition-all duration-500 rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </section>

            <motion.div className="flex flex-col items-center justify-center py-10 px-4 md:px-10 lg:px-20">
                <motion.p animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }} className="text-[#7c6fff] text-xs font-extrabold tracking-[0.2em] uppercase mb-4">
                    What we do
                </motion.p>
                <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-4xl uppercase text-black text-center mb-2">
                    Services & Technologies
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-6xl mx-auto mt-4 mb-10">

                    <div className="overflow-hidden rounded-2xl border cursor-pointer border-gray-200/80 shadow-sm">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {card.map((s, i) => (
                                <div
                                    key={i}
                                    className="min-w-full p-8 md:p-12 bg-linear-to-br from-white to-indigo-50/60 flex flex-col gap-4"
                                    onClick={() => router.push(`/Services#${s.id}`)}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                                            {s.icon}
                                        </div>
                                        <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                                            0{s.number}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900">{s.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{s.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 px-1">
                        <div className="flex gap-2">
                            {card.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-indigo-600 w-6" : "bg-gray-300"}`}
                                />
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-300 transition"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-300 transition"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className="flex flex-col items-center w-full justify-center py-8 px-4 sm:px-6 md:px-10 lg:px-20">
                <motion.p animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }} className="text-[#7c6fff] text-xs font-extrabold tracking-[0.2em] uppercase mb-4 text-center">
                    our impact
                </motion.p>

                <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl uppercase text-black text-center mb-6">
                    numbers that define us
                </motion.h2>

                <motion.div className="w-full">
                    <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8 md:gap-16 lg:gap-20">

                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
                            <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                875K
                            </span>
                            <span className="text-sm sm:text-base mt-2 text-[#7c6fff] font-bold text-center">
                                Patient lives improved
                            </span>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center max-w-xs">
                            <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                16%
                            </span>
                            <span className="text-sm sm:text-base mt-2 text-[#7c6fff] font-bold text-center">
                                Increase in healthcare professional efficiency
                            </span>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
                            <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                200K
                            </span>
                            <span className="text-sm sm:text-base mt-2 text-[#7c6fff] font-bold text-center">
                                Daily communications
                            </span>
                        </motion.div>

                    </div>
                </motion.div>
            </motion.div>

            <TeamSection />
            <Footer/>
        </>
    )
}

export default Hero