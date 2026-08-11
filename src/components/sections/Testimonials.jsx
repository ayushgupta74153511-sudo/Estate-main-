import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonialBg from "../../assets/images/testimonal-bg.webp";
import client1 from "../../assets/images/client1.avif";
import client2 from "../../assets/images/client2.jpg";
import client3 from "../../assets/images/client3.jpg";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Mehta",
    image: client1,
    review:
      "The experience was absolutely seamless. The luxury and attention to detail exceeded all expectations.",
  },
  {
    name: "Sophia Williams",
    image: client2,
    review:
      "Professional team, world-class amenities, and truly premium properties. Highly recommended!",
  },
  {
    name: "Rahul Kapoor",
    image: client3,
    review:
      "From consultation to handover, everything was handled with perfection and elegance.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500); // Increased interval to 4.5 seconds so people can actually read it
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-28 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${testimonialBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-white text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-wide"
        >
          Our Clients
        </motion.h2>

        <div className="relative h-[380px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 md:p-14 shadow-2xl w-full"
            >
              {/* Client Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center text-yellow-400 mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="drop-shadow-sm" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-200 mb-8 text-xl font-light italic leading-relaxed">
                "{testimonials[index].review}"
              </p>

              {/* Name */}
              <h4 className="text-2xl font-semibold text-yellow-400 drop-shadow-md">
                {testimonials[index].name}
              </h4>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;