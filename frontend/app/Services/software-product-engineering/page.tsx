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
              src="/img2.jpg"
              alt="Software Product Engineering"
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
            Software Product Engineering
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 mb-8"
          >
            Software Product Engineering is a strategic discipline focused on designing, building, and evolving digital
            products that deliver measurable business value. It combines engineering excellence, product thinking, and
            modern development practices to create scalable, reliable, and user-centric applications. In an increasingly
            competitive digital environment, organizations must continuously innovate and refine their products to meet
            user expectations and achieve sustainable growth.
          </motion.p>


          <div className="space-y-10">


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Product Lifecycle Engineering
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Successful software products are built through a well-defined lifecycle that includes ideation,
                architecture design, development, testing, deployment, and continuous enhancement. Each phase is aligned
                with business objectives to ensure consistency and long-term success.
              </p>
              <p className="text-gray-700 leading-7">
                This lifecycle-driven approach ensures that products remain adaptable, maintainable, and capable of
                evolving with changing market needs.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Agile Product Development and Delivery
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Agile methodologies enable faster development cycles and continuous delivery of features. Teams work in
                iterative sprints, allowing them to incorporate feedback quickly and deliver value incrementally.
              </p>
              <p className="text-gray-700 leading-7">
                This approach minimizes risks, improves product quality, and ensures that the final solution aligns
                closely with user and business requirements.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Scalable Architecture and Performance Engineering
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                A strong architectural foundation ensures that software products can handle growth and increasing
                user demands. Systems are designed with scalability, performance optimization, and reliability in mind.
              </p>
              <p className="text-gray-700 leading-7">
                By leveraging cloud infrastructure and modern frameworks, products can scale seamlessly while maintaining
                high performance and system stability.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                User Experience and Product Design
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                User experience plays a critical role in the success of any software product. Designing intuitive,
                accessible, and engaging interfaces ensures higher adoption and better user satisfaction.
              </p>
              <p className="text-gray-700 leading-7">
                A user-first approach helps organizations create meaningful digital experiences that differentiate
                their products in the market.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
                Continuous Evolution and Product Innovation
              </h2>
              <p className="text-gray-700 leading-7 mb-3">
                Software products require continuous updates and enhancements to remain competitive. Through monitoring,
                analytics, and user feedback, organizations can identify improvement areas and introduce new features.
              </p>
              <p className="text-gray-700 leading-7">
                This continuous evolution ensures that products stay relevant, innovative, and aligned with emerging
                technologies and market trends.
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
            Software Product Engineering enables organizations to build high-quality, scalable, and future-ready
            digital products. By combining structured development processes, modern technologies, and a strong focus
            on user needs, businesses can deliver solutions that drive innovation, efficiency, and long-term growth.
          </motion.p>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Page