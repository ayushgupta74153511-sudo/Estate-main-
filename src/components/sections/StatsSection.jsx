import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/luxry-bg.webp";

function Counter({ target, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

function StatsSection() {
  const stats = [
    { value: 150, label: "Projects Delivered" },
    { value: 80, label: "Luxury Villas" },
    { value: 1200, label: "Happy Clients" },
    { value: 15, label: "Years Experience" },
  ];

  return (
    <section
      className="relative py-28 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center text-white mb-20 tracking-wide"
        >
          Our Prestigious Achievements
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 border border-white/20 backdrop-blur-xl p-10 rounded-3xl text-center shadow-2xl hover:scale-105 hover:bg-white/20 transition duration-500"
            >
              {/* Gold Animated Number */}
              <h3 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                <Counter target={item.value} duration={2000} />+
              </h3>

              <p className="mt-6 text-gray-200 text-lg tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default StatsSection;