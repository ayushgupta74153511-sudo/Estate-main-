import React from "react";
import { motion } from "framer-motion";
import featuredBg from "../../assets/images/luxry-bg.webp";

const properties = [
  {
    id: 1,
    title: "Luxury Sky Villa",
    location: "Dubai Marina",
    price: "₹ 4.5 Cr",
    image: "/src/assets/images/property1.avif",
  },

  {
    id: 2,
    title: "Luxury Sky Villa",
    location: "Dubai Marina",
    price: "₹ 4.5 Cr",
    image: "/src/assets/images/property1.avif",
  },
  {
    id: 3,
    title: "Modern Glass House",
    location: "Beverly Hills",
    price: "₹ 7.2 Cr",
    image: "/src/assets/images/property2.avif",
  },
  {
    id: 4,
    title: "Premium Lake View Apartment",
    location: "Mumbai",
    price: "₹ 2.8 Cr",
    image: "/src/assets/images/property3.webp",
  },
  {
    id: 4,
    title: "Premium Lake View Apartment",
    location: "Mumbai",
    price: "₹ 2.8 Cr",
    image: "/src/assets/images/property3.webp",
  },
  {
    id: 4,
    title: "Premium Lake View Apartment",
    location: "Mumbai",
    price: "₹ 2.8 Cr",
    image: "/src/assets/images/property3.webp",
  },
];

function FeaturedProperties() {
  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${featuredBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-white">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            Featured Properties
          </h2>
          <p className="text-gray-300 mt-4">
            Discover our handpicked premium listings
          </p>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(234, 179, 8, 0.2)"
              }}
              className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl p-4 transition duration-500 hover:bg-white/15"
            >
              <div className="overflow-hidden rounded-2xl relative group">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={property.image}
                  alt={property.title}
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold">
                  {property.title}
                </h3>
                <p className="text-gray-300">
                  {property.location}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-yellow-400 text-xl font-bold">
                    {property.price}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-semibold shadow-lg transition"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default FeaturedProperties;