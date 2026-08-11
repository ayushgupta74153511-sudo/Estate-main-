import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const { dark, setDark } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-gray-900 dark:text-gray-100 ${scrolled
          ? "backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-xl py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* ===== Logo ===== */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Zenova Estates"
            className={`transition-all duration-500 ${scrolled ? "h-8" : "h-10"
              }`}
          />

          <span className="text-2xl font-bold hidden sm:block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Zenova Estates
          </span>
        </Link>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex items-center space-x-8 font-medium">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative group transition ${location.pathname === link.path
                  ? "text-yellow-500"
                  : "hover:text-yellow-500"
                }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-500 transition-all duration-300 ${location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </Link>
          ))}

          {user ? (
            <button
              onClick={logout}
              className="hover:text-red-500 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold hover:scale-105 transition"
            >
              Login
            </Link>
          )}

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* ===== Mobile Button ===== */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-white dark:bg-gray-900 px-6 py-4 space-y-4 font-medium shadow-lg">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-yellow-500 transition"
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <button onClick={logout} className="block text-red-500">
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block bg-yellow-500 text-black text-center py-2 rounded-full"
            >
              Login
            </Link>
          )}

          <button
            onClick={() => setDark(!dark)}
            className="block w-full text-left"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;