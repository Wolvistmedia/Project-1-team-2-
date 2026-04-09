'use client'
import { motion } from "framer-motion"
import { useState } from "react"

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch("http://localhost:8080/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json()
            console.log(data)

            alert("Message sent ✅")

           
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            })

        } catch (err) {
            console.log(err)
            alert("Error ❌")
        }
    }
    return (
        <div
            id="form"
            className="w-full py-24 px-4 md:px-10 lg:px-20 bg-white">


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
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 "
            >


                <input
                    type="text"
                    name="name" onChange={handleChange}
                    placeholder="Your Name"
                    className="col-span-1 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-black transition"
                />


                <input
                    type="email"
                    name="email" onChange={handleChange}
                    placeholder="Your Email"
                    className="col-span-1 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-black transition"
                />

                <input
                    type="tel"
                    name="phone" onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="col-span-2 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-black transition"
                />

                <textarea
                    rows={5}
                    name="message" onChange={handleChange}
                    placeholder="Your Message"
                    className="col-span-2 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-black resize-none transition"
                ></textarea>


                <div className="col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="bg-linear-to-r from-[#3A1A86] to-[#6A51A5] text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition cursor-pointer"
                    >
                        Send Message
                    </button>
                </div>

            </motion.form>
        </div>
    )
}

export default Form