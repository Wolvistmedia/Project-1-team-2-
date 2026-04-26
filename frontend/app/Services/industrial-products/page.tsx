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
            className="relative w-full h-55 sm:h-75 md:h-100 rounded-2xl overflow-hidden mb-10 md:mt-0 sm:mt-0 mt-10"
          >
            <Image
              src="/img4.jpg"
              alt="Industrial Products"
              fill
              className="object-center w-full h-100"
              priority
            />
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#3A1A86] mb-6 leading-tight"
          >
            Industrial Products
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 mb-8"
          >
            The Industrial Products sector is undergoing rapid transformation driven by digital innovation,
            automation, and evolving global supply chains. Organizations must adapt to increasing demand for
            efficiency, precision, and scalability while maintaining high standards of quality and safety.
            By integrating modern technologies into industrial operations, businesses can enhance productivity,
            reduce costs, and remain competitive in a dynamic market environment.
          </motion.p>


          <div className="space-y-10">


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Smart Manufacturing and Automation
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Modern manufacturing is increasingly driven by automation, robotics, and intelligent systems that
                improve production efficiency and accuracy. Smart factories leverage real-time data to optimize
                operations and minimize downtime.
              </p>
              <p className="text-gray-700 leading-7">
                By adopting advanced manufacturing technologies, organizations can streamline workflows, enhance
                productivity, and ensure consistent product quality.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Supply Chain Optimization
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Efficient supply chain management is critical for ensuring timely delivery and cost control.
                Advanced analytics and digital tools enable better forecasting, inventory management, and logistics planning.
              </p>
              <p className="text-gray-700 leading-7">
                Optimized supply chains enhance visibility, reduce disruptions, and improve overall operational efficiency
                across the value chain.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Product Design and Engineering Innovation
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Innovative product design is essential for meeting evolving customer needs and industry standards.
                Digital engineering tools enable rapid prototyping, simulation, and testing of industrial products.
              </p>
              <p className="text-gray-700 leading-7">
                This accelerates development cycles, improves product quality, and ensures compliance with regulatory
                requirements.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Asset Management and Predictive Maintenance
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Industrial operations rely on critical assets that require regular monitoring and maintenance.
                Predictive maintenance uses data and AI to anticipate equipment failures before they occur.
              </p>
              <p className="text-gray-700 leading-7">
                This reduces downtime, lowers maintenance costs, and extends the lifespan of machinery and equipment.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Sustainability and Operational Efficiency
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Sustainability has become a key priority in industrial operations. Organizations are adopting
                energy-efficient processes and reducing waste to meet environmental goals.
              </p>
              <p className="text-gray-700 leading-7">
                By focusing on sustainable practices, businesses can improve efficiency, reduce environmental impact,
                and align with global regulatory standards.
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
            Industrial Products organizations are evolving by embracing digital transformation, automation, and
            data-driven decision-making. By integrating advanced technologies and optimizing operations, businesses
            can enhance productivity, improve product quality, and achieve sustainable growth in an increasingly
            competitive global market.
          </motion.p>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page