import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Zenova Estates
          </h2>
          <p className="text-sm leading-6">
            Delivering premium luxury residential properties
            with modern architecture and world-class amenities.
          </p>

          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-primary transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/properties" className="hover:text-primary">Properties</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/book-visit" className="hover:text-primary">Book Visit</Link></li>
          </ul>
        </div>

        {/* Properties */}
        <div>
          <h3 className="text-white font-semibold mb-4">Property Types</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/properties" className="hover:text-primary">Villas</Link></li>
            <li><Link to="/properties" className="hover:text-primary">Apartments</Link></li>
            <li><Link to="/properties" className="hover:text-primary">Penthouses</Link></li>
            <li><Link to="/properties" className="hover:text-primary">Luxury Homes</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Subscribe to Newsletter
          </h3>
          <p className="text-sm mb-4">
            Get latest updates about new projects and offers.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary px-4 py-2 rounded-r text-white hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-6 text-sm">
            <p>Email: contact@zenova.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Mumbai, India</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Zenova Estates. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;