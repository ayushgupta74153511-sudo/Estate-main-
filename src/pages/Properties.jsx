// import React, { useState } from "react";
// import propertiesData from "../data/propertiesData";

// function Properties() {
//   const [search, setSearch] = useState("");
//   const [typeFilter, setTypeFilter] = useState("All");

//   const filteredProperties = propertiesData
//     .filter((property) =>
//       property.title.toLowerCase().includes(search.toLowerCase())
//     )
//     .filter((property) =>
//       typeFilter === "All" ? true : property.type === typeFilter
//     );

//   return (
//    <div className="pt-10">
//      <div className="bg-gray-50 dark:bg-black min-h-screen p-6 md:p-12">

//       {/* Page Title */}
//       <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
//         Explore Our Properties
//       </h1>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row gap-4 mb-10">
//         <input
//           type="text"
//           placeholder="Search by title..."
//           className="p-3 rounded-lg border w-full"
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="p-3 rounded-lg border"
//           onChange={(e) => setTypeFilter(e.target.value)}
//         >
//           <option value="All">All Types</option>
//           <option value="Villa">Villa</option>
//           <option value="Apartment">Apartment</option>
//           <option value="Penthouse">Penthouse</option>
//           <option value="Studio">Studio</option>
//           <option value="Duplex">Duplex</option>
//         </select>
//       </div>

//       {/* Property Cards */}
//       <div className="grid md:grid-cols-3 gap-8">
//         {filteredProperties.map((property) => (
//           <div
//             key={property.id}
//             className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
//           >
//             <img
//               src={property.image}
//               alt={property.title}
//               className="h-56 w-full object-cover"
//             />

//             <div className="p-6">
//               <h2 className="text-xl font-bold mb-2 dark:text-white">
//                 {property.title}
//               </h2>

//               <p className="text-yellow-600 font-semibold mb-2">
//                 ₹{property.price.toLocaleString("en-IN")}
//               </p>

//               <p className="text-sm text-gray-500 mb-4">
//                 Type: {property.type}
//               </p>

//               <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg transition">
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//    </div>
//   );
// }

// export default Properties;





import { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../components/property/PropertyCard";
import propertiesData from "../data/propertiesData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  }
};

function Properties() {

  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 6;

  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;

  const currentProperties = propertiesData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(propertiesData.length / propertiesPerPage);

  return (
    <div className="container mx-auto px-6 py-10">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Our Properties
      </motion.h1>

      {/* Properties Grid */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {currentProperties.map((property) => (
          <motion.div key={property.id} variants={itemVariants}>
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </motion.div>


      {/* Pagination */}

      <div className="flex justify-center mt-10 gap-3">

        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded ${currentPage === index + 1
              ? "bg-black text-white"
              : "bg-gray-200"
              }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Properties;