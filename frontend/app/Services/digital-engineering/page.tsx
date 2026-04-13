"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Footer from "@/components/Footer"

function Page() {
  return (
    <>
      <div className="bg-white text-black w-full overflow-x-hidden">

        <div className="max-w-8xl mx-auto px-5 sm:px-8 md:px-10 lg:px-15 py-10">


          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-55 sm:h-75 md:h-100 rounded-2xl overflow-hidden mb-10 md:mt-0 sm:mt-0 mt-12"
          >
            <Image
              src="/img1.jpg"
              alt="Digital Engineering"
              fill
              className="object-cover w-full h-100"
              priority
            />
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#3A1A86] mb-6 leading-tight"
          >
            Digital Engineering
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 mb-8"
          >
            Digital Engineering represents a comprehensive approach to designing, building, and managing digital systems
            that power modern enterprises. It extends beyond traditional software development by integrating advanced
            technologies, scalable architectures, and data-driven strategies to create efficient and high-performing
            digital ecosystems. Organizations today must operate with speed, adaptability, and a strong focus on user
            experience, and digital engineering provides the foundation to achieve these goals effectively.
          </motion.p>


          <div className="space-y-10">


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                End-to-End Digital Transformation
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Digital engineering enables organizations to transform their operations by delivering complete
                end-to-end solutions. From initial strategy and planning to development, deployment, and optimization,
                every stage is carefully designed to align with business objectives.
              </p>
              <p className="text-gray-700 leading-7">
                This holistic approach ensures seamless integration across systems while maintaining performance,
                scalability, and long-term sustainability.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Innovation and Agile Execution
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Organizations must continuously innovate to stay competitive. By adopting agile methodologies,
                digital engineering promotes rapid development cycles, iterative improvements, and faster delivery.
              </p>
              <p className="text-gray-700 leading-7">
                This enables businesses to respond quickly to market changes while maintaining quality, security,
                and reliability.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Data Integration and Scalable Systems
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                One of the key strengths of digital engineering lies in its ability to unify multiple data sources,
                tools, and processes into a single, cohesive framework.
              </p>
              <p className="text-gray-700 leading-7">
                This integration improves decision-making, enhances operational efficiency, and enables businesses
                to scale without disruption as their requirements grow.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                User-Centric Experience Design
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Delivering seamless user experiences is critical in today’s digital landscape. Digital engineering
                focuses on building intuitive and accessible platforms that enhance engagement and usability.
              </p>
              <p className="text-gray-700 leading-7">
                Whether it is customer-facing applications or internal tools, the goal is to simplify interactions
                and improve overall satisfaction.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Future-Ready Digital Ecosystems
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Digital engineering is not only about addressing current challenges but also preparing for future
                opportunities. Systems are designed to be flexible, resilient, and adaptable to emerging technologies.
              </p>
              <p className="text-gray-700 leading-7">
                This ensures that organizations remain competitive and capable of evolving in a rapidly changing
                digital environment.
              </p>
            </motion.div>

          </div>


          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 mt-10"
          >
            Digital Engineering serves as a strategic enabler for organizations aiming to enhance efficiency,
            improve customer experiences, and achieve sustainable growth. By combining modern technologies,
            structured processes, and innovative thinking, businesses can build a strong digital foundation
            that supports long-term success.
          </motion.p>

        </div>
      </div>
      <Footer />
    </>

  )
}

export default Page