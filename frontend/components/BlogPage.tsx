'use client'
import Image from 'next/image'
import Footer from './Footer'
import { motion } from "framer-motion"

function BlogPage() {
  const blogSections = [
    {
      image: "/photo1.jpg",
      heading1: "Data-Driven Insights & Big Data Analytics:",
      heading2: "Clean Technologies Leading the Way:",
      description1:
        "Big data analytics play an instrumental role in managing the vast troves of ESG-related data. Through data-driven analysis, organizations gain profound insights into their environmental impact, enabling them to make informed decisions regarding sustainability strategies. This capability allows businesses to move beyond intuition and anecdotal evidence, ensuring that their ESG initiatives are grounded in empirical evidence, leading to more effective strategies for sustainability.",
      description2: "Renewable energy sources, energy-efficient appliances, electric vehicles, and carbon capture and storage mechanisms have emerged as formidable weapons in the fight against environmental degradation. These technologies empower companies to significantly reduce their carbon emissions and resource consumption. Transitioning to clean technologies not only mitigates environmental harm but also aligns with ESG goals related to environmental impact reduction.",
    },
    {
      image: "/photo2.jpg",
      heading1: "Advanced Data Analysis & AI & Machine Learning:",
      heading2: "Interactive Stakeholder Engagement through VR and AR:",
      description:
        "Artificial Intelligence (AI) and Machine Learning (ML) bring another layer of data analysis capabilities to the ESG landscape. These technologies excel at processing vast volumes of ESG data, uncovering intricate patterns and insights that might elude human detection. AI and ML algorithms have the unique ability to identify trends and correlations within ESG data, enabling companies to proactively predict and address emerging risks and seize opportunities for improvement.",
      description2: "Virtual Reality (VR) and Augmented Reality (AR) platforms offer interactive and immersive experiences focused on ESG issues. These experiences cultivate awareness among employees, customers, and stakeholders, actively involving them in a company’s ESG initiatives. This engagement not only fosters a sense of shared responsibility but also strengthens a company’s social equity and governance practices.",
    },
    {
      image: "/photo3.jpg",
      heading1: "Real-Time Monitoring with IoT Devices:",
      heading2: "Blockchain for Transparency and Traceability:",
      description:
        "Internet of Things (IoT) devices enable the real-time monitoring of various environmental parameters, including energy consumption, emissions, and waste generation. This continuous data stream equips organizations with the information needed to pinpoint areas where they can reduce their environmental impact. As a result, businesses can drive sustainable practices by responding proactively to evolving environmental challenges.",
      description2: "Blockchain technology is elevating transparency and traceability within supply chains. This empowerment allows companies to validate the sustainability and ethicality of their products—a critical aspect of meeting ESG objectives and building consumer trust. Blockchain not only enhances governance standards but also supports the responsible sourcing of materials and products.",
    },
    {
      image: "/photo3.jpg",
      heading1: "Optimizing Sustainability with Digital Twins:",
      heading2: "Environmental Monitoring with Drones and Satellites:",
      description:
        "Digital twin technology creates virtual replicas of real-world systems, enabling organizations to model and optimize energy efficiency, resource utilization, and overall sustainability. This innovation plays a pivotal role in achieving environmental sustainability objectives, providing a sophisticated tool for fine-tuning sustainability efforts.",
      description2: "Drone and satellite technologies provide invaluable tools for monitoring and assessing environmental conditions. They can detect and combat illegal activities such as deforestation or overfishing. Additionally, satellite imaging can assess the regional impact of climate change, further aiding in environmental preservation. In conclusion, emerging technologies are assuming a pivotal role in strengthening Environmental, Social, and Governance (ESG) initiatives, significantly influencing how organizations approach sustainability and responsible corporate practices. This impact extends to the core vision and mission of these organizations",
    },
  ]
  return (
    <>
      <div className="w-full px-4 sm:px-8 md:px-20 py-16 bg-white text-black">


        <motion.h1
          initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3A1A86]  md:max-w-4xl  sm:max-w-4xl mt-10 leading-snug mb-12 ">
          THE TRANSFORMATIVE IMPACT OF EMERGING TECHNOLOGIES ON ESG INITIATIVES
        </motion.h1>


        <div className="space-y-16">

          {blogSections.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start"
            >

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 relative h-50 sm:h-70 md:h-100 rounded-xl overflow-hidden">
                <Image
                  src={blog.image}
                  alt="blog"
                  fill
                  className="object-cover"
                />
              </motion.div>


              <motion.div

                className="w-full md:w-1/2 space-y-5">

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >

                  <h3 className="text-lg sm:text-2xl font-bold text-[#3A1A86]">
                    {blog.heading1}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                    {blog.description || blog.description1}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg sm:text-2xl font-bold text-[#3A1A86]">
                    {blog.heading2}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                    {blog.description2}
                  </p>
                </motion.div>

              </motion.div>
            </div>
          ))}

        </div>

      </div>
      <Footer />
    </>
  )
}

export default BlogPage