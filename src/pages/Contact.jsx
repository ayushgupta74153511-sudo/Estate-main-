import React, { useState } from "react";
import { motion } from "framer-motion";

// Framer Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ⚠️ Yaha apna WhatsApp number daalna (without +)
  const phoneNumber = "916389720527";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const text = `
Hello Zenova Estates,

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 dark:bg-black text-gray-800 dark:text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] flex items-center justify-center text-center">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop"
          alt="Contact"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 px-4"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-lg mb-4">
            Contact Zenova Estates
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-gray-200 mt-3 font-light tracking-wide">
            Let’s build your dream home together.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24 px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">

          {/* ===== FORM ===== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInLeft}
            className="bg-white dark:bg-gray-900 p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 relative"
          >
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">Send via WhatsApp</h2>

            <form onSubmit={handleWhatsApp} className="space-y-6 relative z-10">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all shadow-inner"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all shadow-inner"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all shadow-inner resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold text-lg py-4 rounded-xl shadow-[0_10px_20px_rgba(34,197,94,0.3)] transition-all"
              >
                Send on WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* ===== CONTACT INFO ===== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8"
          >

            <motion.div variants={slideInRight} whileHover={{ y: -5 }} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500 transition-all hover:shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-yellow-600 dark:text-yellow-400">Office Address</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Mumbai, India</p>
            </motion.div>

            <motion.div variants={slideInRight} whileHover={{ y: -5 }} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500 transition-all hover:shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-yellow-600 dark:text-yellow-400">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">contact@zenova.com</p>
            </motion.div>

            <motion.div variants={slideInRight} whileHover={{ y: -5 }} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500 transition-all hover:shadow-xl">
              <h3 className="text-xl font-bold mb-2 text-yellow-600 dark:text-yellow-400">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">+91 98765 43210</p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 relative group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[280px]"
                loading="lazy"
              ></iframe>
            </motion.div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default Contact;