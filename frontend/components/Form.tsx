'use client'
import { motion } from "framer-motion"

function Form() {
    return (
        <div className="w-full py-24 px-4 md:px-10 lg:px-20 bg-white">

           
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Let’s get in touch
                </h2>
                <p className="text-gray-500 mt-3 text-sm md:text-base">
                    We’d love to hear from you. Fill out the form and we’ll get back to you.
                </p>
            </motion.div>

         
            <motion.form
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 "
            >

                
                <input
                    type="text"
                    placeholder="Your Name"
                    className="col-span-1 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-black transition"
                />

              
                <input
                    type="email"
                    placeholder="Your Email"
                    className="col-span-1 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-black transition"
                />

                <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="col-span-2 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-black transition"
                />

                <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="col-span-2 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-black resize-none transition"
                ></textarea>

               
                <div className="col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="bg-linear-to-r from-[#3A1A86] to-[#6A51A5] text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition"
                    >
                        Send Message
                    </button>
                </div>

            </motion.form>
        </div>
    )
}

export default Form