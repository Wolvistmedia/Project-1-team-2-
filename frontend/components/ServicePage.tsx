'use client'

import { motion } from "framer-motion"
import Image from "next/image";


import { useEffect, useState } from 'react'
import Footer from "./Footer";
import Form from "./Form";

const Hero = () => {
    const slides = [
        {
            id: 1,
            title: "Digital Engineering",
            btn: "Learn More",
            desc: "We help businesses transform digitally by building scalable, secure, and high-performance solutions tailored to modern technological needs."
        },
        {
            id: 2,
            title: "Software Product Engineering",
            btn: "Learn More",
            desc: "From idea to deployment, we design and develop innovative software products that deliver seamless user experiences and business growth."
        },
        {
            id: 3,
            title: "AI Lead Business Insights",
            btn: "Learn More",
            desc: "Leverage the power of artificial intelligence to unlock data-driven insights, improve decision-making, and drive smarter business strategies."
        },
        {
            id: 4,
            title: "Industry Products",
            btn: "Learn More",
            desc: "Enhance operational efficiency with smart automation, optimized workflows, and technology-driven solutions for maximum productivity."
        },
    ];
    const Content = [
        {
            id: "digital-engineering",
            title: "Digital Engineering",
            img: "/img2.webp",
            desc: "777 is a strategic partner for end-to-end digitalization support, collaborating with our clients to deliver customized solutions. Propelled by innovation and agility, we drive digital transformation for our clients, enabling them to meet the dynamic demands of the digital consumer, while supporting their most critical goals, including business growth and operational efficiency. We bring together the disparate data sources, models, tools, and processes into a common framework, streamlining the implementation process while positioning for future scalability and flexibility. From creating a digital front door for patients to enabling physician – patient collaboration, we are at the forefront of transforming the consumer experience."

        },
        {
            id: "software-product-engineering",
            title: "Software Product Engineering",
            img: "/img1.webp",
            desc: "777 partners with software product providers, delivering engineering services to bring products to market faster. Services include product management, software development, quality assurance, and project management. Veersa helps clients navigate the entire product development process to deliver on time and with high quality. Our team goes beyond features and backlogs, providing expertise in innovating, designing, developing, testing, deploying and maintaining software product. With a keen eye toward exceptional user experience, our engagements span from technical debt elimination, to modernizing products from their legacy architecture, to enhancing product functionality, scalability and performance."
        },
        {
            id: "ai-business-insights",
            title: "AI Lead Business Insights",
            img: "/img3.webp",
            desc: "777 uses big data analytics and AI to empower organizations to make timely data-driven decisions with compassion and intelligence. We help clients harness big data for business growth and positive social impact through deep subject matter knowledge, combined with practical expertise in leading edge data analytics and AI technologies. supporting them in their digital transformation journey. Throughout our engagements, we remain focused on our clients’ endgame – enabling informed decision-making for meaningful outcomes."
        },
        {
            id: "industrial-products",
            title: "Industry Products",
            img: "/img4.webp",
            desc: "777 offers Industry specific technology frameworks, tools and products to help build scalable customized solutions that support key business functions, while reducing time to maket. These frameworks and SaaS based solutions can be implemented as-is or readily configured and customized to meet unique client needs, while accelerating implementation timelines."
        },
    ];

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [slides.length])

    return (
        <>
            <div className='relative flex flex-col w-full  overflow-hidden h-[95vh]  mt-2 items-center justify-center  text-center px-4 md:px-5 gap-6'>


                <div className="absolute top-0  w-full h-full -z-10 overflow-hidden rounded-2xl">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source src="/hero1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
                </div>
                {/* Content */}
                <motion.div
                    initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
                    className='flex flex-col absolute items-center gap-5 justify-center inset-0 text-white z-10 mb-5'>

                    <motion.div
                        key={slides[current].title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='font-bold text-3xl sm:text-5xl md:text-8xl lg:text-8xl text-center bg-linear-to-r from-purple-700 via-indigo-500 to-pink-500   bg-clip-text text-transparent'
                    >
                        {slides[current].title}
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className=" font-medium text-md sm:text-sm md:text-lg max-w-sm text-gray-800 md:pt-5 sm:pt-5 pt-0 md:max-w-xl leading-relaxed"
                    >
                        {slides[current].desc}

                    </motion.button>

                    {/* Dots */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${current === index
                                    ? "bg-white scale-125"
                                    : "bg-black/50"
                                    }`}
                            ></span>
                        ))}
                    </div>

                </motion.div>




            </div>

            <div className="flex flex-col items-center justify-center py-10 px-4 gap-12  md:px-8">

                {Content.map((con, index) => (
                    <div
                        key={index}
                        className="w-full max-w-6xl flex flex-col gap-6 md:gap-12 mb-5"
                    >

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                            className="text-2xl sm:text-3xl md:text-5xl font-bold text-center uppercase bg-linear-to-r from-[#3A1A86] to-[#6A51A5] bg-clip-text text-transparent">
                            {con.title}
                        </motion.h2>

                        {/* Content Section */}
                        <div
                            id={con.id}
                            className="flex flex-col md:flex-row  gap-6 md:gap-12">

                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.7 }}
                                className="w-full md:w-1/2">
                                <Image
                                    alt="service"
                                    src={con.img}
                                    width={600}
                                    height={400}
                                    className="w-full h-55 sm:h-70 md:h-90 object-cover rounded-sm"
                                />
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.7 }}
                                className="w-full md:w-1/2">
                                <p className="text-black text-[16px]  sm:text-[15px] md:text-[18px] leading-relaxed text-justify">
                                    {con.desc}
                                </p>
                            </motion.div>

                        </div>
                    </div>
                ))}

            </div>
            <Form />
            <Footer />
        </>

    )
}

export default Hero