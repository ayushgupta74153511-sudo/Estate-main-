import React from "react";
import { motion } from "framer-motion";
import amenitiesBg from "../../assets/images/aminities.jpg";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaWifi,
  FaParking,
  FaTree,
  FaShieldAlt,
} from "react-icons/fa";

const amenities = [
  { icon: <FaSwimmingPool size={28} />, title: "Infinity Swimming Pool" },
  { icon: <FaDumbbell size={28} />, title: "Modern Fitness Center" },
  { icon: <FaWifi size={28} />, title: "High-Speed WiFi" },
  { icon: <FaParking size={28} />, title: "Secure Parking" },
  { icon: <FaTree size={28} />, title: "Landscaped Gardens" },
  { icon: <FaShieldAlt size={28} />, title: "24/7 Security" },
];

function AmenitiesSection() {
  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${amenitiesBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 text-white max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          World-Class Amenities
        </h2>

        {/* Amenities Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(234, 179, 8, 0.15)"
              }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl transition-colors duration-500 hover:bg-white/20 group cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-6 text-yellow-400 drop-shadow-md group-hover:text-yellow-300"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold tracking-wide">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default AmenitiesSection;