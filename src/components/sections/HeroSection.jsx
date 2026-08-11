import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/HeroImage.webp";

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Luxury Skyline"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
          Live Above The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 drop-shadow-lg">Skyline</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-10 drop-shadow-md font-light">
          Discover ultra-luxury residences with breathtaking city views,
          premium interiors and world-class amenities.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/properties"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-10 py-4 rounded-full font-bold shadow-xl transition duration-300 block"
            >
              Explore Properties
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-black px-10 py-4 rounded-full font-bold shadow-xl transition duration-300 backdrop-blur-sm block"
            >
              Book a Visit
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;