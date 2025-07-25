
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Book Vibe</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for all kinds of books. We offer the best collection at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Books</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">New Releases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MdLocationOn className="mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-400">123 Book Street, Literary City, LC 12345</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2" />
                <span className="text-gray-400">info@bookhaven.com</span>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Newsletter</h4>
            <p className="text-gray-400 mb-3">Subscribe to get updates on new arrivals and special offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Book Haven. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <img src="/src/assets/206684_visa_method_card_payment_icon.png" alt="Visa" className="h-8" />
            <img src="/src/assets/358103_card_maestro_payment_icon.png" alt="Mastercard" className="h-8" />
            <img src="/src/assets/206675_paypal_method_payment_icon.png" alt="PayPal" className="h-8" />
            <img src="/src/assets/2416660_amazon_online payment_online transaction_payment method_icon.png" alt="Amazon Pay" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;