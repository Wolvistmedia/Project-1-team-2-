"use client"
import Footer from "@/components/Footer"
import React from "react"
import { motion } from "framer-motion"

function Page() {

  const sectionAnimation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  }

  return (
    <>
      <div className="bg-white text-black px-4 sm:px-8 md:px-20 py-16 flex flex-col items-center">

        {/* 🔥 TITLE */}
        <motion.h1
          {...sectionAnimation}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A1A86] mb-10 mt-10 text-center max-w-4xl"
        >
          PRIVACY POLICY
        </motion.h1>

        {/* 🔥 CONTENT */}
        <div className="w-full max-w-3xl space-y-10 text-gray-700 leading-8 text-[15px] sm:text-[16px]">

          {/* INTRO */}
          <motion.p {...sectionAnimation}>
            At 777, we take your privacy seriously and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information about you when you use our software, website, and other services (collectively, “Services”).
          </motion.p>

          {/* SECTION 1 */}
          <motion.div {...sectionAnimation}>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
              What information do we collect?
            </h2>
            <p>
              We collect information that you provide to us when you use our Services, such as your name, email address, and phone number. We also collect information about your use of our Services, such as the pages you visit and the features you use.
            </p>
          </motion.div>

          {/* SECTION 2 */}
          <motion.div {...sectionAnimation}>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
              How do we use your information?
            </h2>
            <p>
              We use your information to provide and improve our Services, to communicate with you about our Services, and to personalize your experience. We may also use your information for research and analytics purposes.
            </p>
          </motion.div>

          {/* SECTION 3 */}
          <motion.div {...sectionAnimation}>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
              How do we share your information?
            </h2>
            <p>
              We may share your information with third-party service providers who help us provide our Services. We may also share your information with our partners or affiliates for marketing and promotional purposes. We will not sell your information to third parties for their own marketing purposes.
            </p>
          </motion.div>

          {/* SECTION 4 */}
          <motion.div {...sectionAnimation}>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
              How do we protect your information?
            </h2>
            <p>
              We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee its absolute security.
            </p>
          </motion.div>

          {/* SECTION 5 */}
          <motion.div {...sectionAnimation}>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
              Your rights
            </h2>
            <p>
              You have the right to access, correct, and delete your personal information. You can also object to our processing of your personal information or request that we restrict our processing. To exercise any of these rights, please contact us at{" "}
              <span className="text-blue-600">privacy@777.com</span>.
            </p>
          </motion.div>

          {/* SECTION 6 */}
          <motion.div {...sectionAnimation}>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the effective date of the changes.
            </p>
          </motion.div>

          {/* COOKIES */}
          <motion.div {...sectionAnimation}>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
              Cookies
            </h2>

            <p className="mb-4">
              We use cookies to improve your experience when you use our website and services. We use both session cookies and persistent cookies. Session cookies are deleted when you close your browser, while persistent cookies remain on your device until they expire or you delete them.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential cookies:</strong> These cookies are necessary to provide our Services and enable you to access certain features.</li>
              <li><strong>Analytics cookies:</strong> These cookies allow us to analyze how our Services are used and to improve their performance.</li>
              <li><strong>Advertising cookies:</strong> These cookies are used to show you relevant ads based on your browsing behavior.</li>
              <li><strong>Social media cookies:</strong> These cookies allow you to share content from our Services on social media platforms.</li>
            </ul>
          </motion.div>

          {/* ISMS */}
          <motion.div {...sectionAnimation}>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
              777 ISMS CERTIFICATION
            </h2>
            <p>
              777 is committed to achieve the information security objectives of preservation of Confidentiality, Integrity and Availability of information assets. This would help attain the operational and administrative goal of business.
            </p>
            <p className="mt-2">
              777 is also committed to meet all applicable legal and contractual requirements, and continually improve the Information Security Management System to the satisfaction of all stakeholders.
            </p>
          </motion.div>

          {/* CONTACT */}
          <motion.div {...sectionAnimation}>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#3A1A86] mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns about our Privacy Policy, please contact us at{" "}
              <span className="text-blue-600">privacy@777.com</span>
            </p>
          </motion.div>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Page