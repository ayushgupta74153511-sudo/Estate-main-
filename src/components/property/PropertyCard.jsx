import { FaBed, FaBath, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function PropertyCard({ property }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300"
    >

      {/* Property Image Container with Zoom effect */}
      <div className="relative overflow-hidden group">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">

        {/* Price */}
        <h2 className="text-xl font-bold text-blue-600 mb-2">
          ${property.price}
        </h2>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white transform transition duration-300 group-hover:text-blue-500">
          {property.title}
        </h3>

        {/* Location */}
        <p className="flex items-center text-gray-500 text-sm mt-1">
          <FaMapMarkerAlt className="mr-2" />
          {property.location}
        </p>

        {/* Features */}
        <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">

          <span className="flex items-center gap-1">
            <FaBed className="text-blue-500" /> {property.beds} Beds
          </span>

          <span className="flex items-center gap-1">
            <FaBath className="text-blue-500" /> {property.baths} Baths
          </span>

          <span className="font-medium text-gray-700 dark:text-gray-300">{property.area} sqft</span>

        </div>

      </div>

    </motion.div>
  );
}

export default PropertyCard;