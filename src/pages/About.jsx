import { motion } from "framer-motion";

/* ================= DATA OBJECT ================= */

const aboutData = {
  heroImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",

  companyImage:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",

  team: [
    {
      name: "Arjun Mehta",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Riya Kapoor",
      role: "Managing Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Vikram Shah",
      role: "Chief Architect",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
  ],

  stats: [
    { number: "15+", label: "Years of Experience" },
    { number: "120+", label: "Luxury Projects" },
    { number: "5000+", label: "Happy Clients" },
    { number: "10+", label: "Cities Presence" },
  ],
};

// Framer Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

function About() {
  return (
    <div className="bg-gray-50 dark:bg-black text-gray-800 dark:text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] flex items-center justify-center text-center">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={aboutData.heroImage}
          alt="About Zenova"
          className="absolute w-full h-full object-cover"
        />

        {/* Stronger Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 px-6"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            About Zenova Estates
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-2xl mx-auto text-lg text-gray-200 drop-shadow-md">
            Redefining luxury living with world-class architecture and unmatched elegance.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= COMPANY STORY ================= */}
      <section className="py-24 px-6 md:px-20 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            src={aboutData.companyImage}
            alt="Company"
            className="rounded-2xl shadow-2xl"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mb-5">
              Founded with a passion for architectural excellence, Zenova Estates
              has emerged as a trusted name in premium residential development.
              Our journey began with a simple vision — to create homes that
              combine innovation, luxury, and long-term value.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mb-5">
              Over the years, we have delivered landmark projects that redefine
              urban living. Every Zenova development reflects meticulous design,
              sustainable construction practices, and world-class amenities.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              Today, we continue to shape skylines and transform lifestyles —
              building not just properties, but communities built on trust,
              transparency, and timeless elegance.
            </p>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition shadow-lg"
              >
                Discover Our Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-20"
        >
          {aboutData.stats.map((stat, index) => (
            <motion.div key={index} variants={fadeUp}>
              <h3 className="text-5xl font-extrabold text-yellow-500 mb-2">
                {stat.number}
              </h3>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-20 bg-gray-50 dark:bg-black text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeUp}
          className="text-4xl font-bold mb-12"
        >
          Meet Our Leadership
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20"
        >
          {aboutData.team.map((member, index) => (
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="relative mx-auto w-32 h-32 mb-6 overflow-hidden rounded-full shadow-inner">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-xl mb-1">{member.name}</h4>
              <p className="text-yellow-600 font-medium text-sm tracking-wide uppercase">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-black text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-yellow-500/5 blur-[100px] rounded-full"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Experience Luxury Living with Zenova
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-4 rounded-full transition shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
          >
            Explore Properties
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
}

export default About;