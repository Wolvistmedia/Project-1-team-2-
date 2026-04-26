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
              src="/img3.jpg"
              alt="AI & Business Insights"
              fill
              className="object-center"
              priority
            />
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#3A1A86] mb-6 leading-tight"
          >
            AI & Business Insights
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 mb-8"
          >
            AI & Business Insights focuses on leveraging artificial intelligence and advanced analytics to transform
            raw data into actionable intelligence. Organizations today generate vast amounts of data, and the ability
            to extract meaningful insights from this data is critical for strategic decision-making, operational
            efficiency, and competitive advantage.
          </motion.p>


          <div className="space-y-10">


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Data Intelligence and Analytics Strategy
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Businesses rely on structured and unstructured data to uncover patterns, trends, and opportunities.
                A well-defined analytics strategy ensures that data is collected, processed, and analyzed effectively.
              </p>
              <p className="text-gray-700 leading-7">
                This enables organizations to make data-driven decisions, reduce uncertainty, and improve overall
                business performance.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Predictive and Prescriptive Analytics
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Predictive analytics uses historical data and machine learning models to forecast future outcomes,
                while prescriptive analytics recommends the best possible actions.
              </p>
              <p className="text-gray-700 leading-7">
                Together, these capabilities help organizations anticipate risks, identify opportunities, and optimize
                decision-making processes across various business functions.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                AI-Driven Automation and Optimization
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Artificial intelligence enables automation of repetitive and complex processes, improving efficiency
                and reducing operational costs. From intelligent workflows to automated decision systems, AI enhances
                productivity across organizations.
              </p>
              <p className="text-gray-700 leading-7">
                This leads to faster execution, fewer errors, and better resource utilization, enabling businesses to
                focus on innovation and growth.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Business Intelligence and Visualization
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Data visualization tools transform complex datasets into intuitive dashboards and reports. Clear
                visual representation of data enables stakeholders to understand insights quickly and take informed
                actions.
              </p>
              <p className="text-gray-700 leading-7">
                Effective business intelligence solutions empower organizations with real-time visibility into key
                performance indicators and strategic metrics.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Continuous Learning and Intelligent Systems
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                AI systems continuously learn and improve from new data, making them more accurate and efficient over
                time. This adaptability allows businesses to stay ahead in dynamic market environments.
              </p>
              <p className="text-gray-700 leading-7">
                By integrating intelligent systems into core operations, organizations can drive innovation, enhance
                customer experiences, and achieve long-term strategic success.
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
            AI & Business Insights empowers organizations to harness the full potential of their data. By combining
            advanced analytics, machine learning, and intelligent automation, businesses can make smarter decisions,
            improve efficiency, and unlock new growth opportunities in an increasingly data-driven world.
          </motion.p>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Page