import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="padding-lr text-white padding-tb bg-gradient-to-r from-[#F7641E] to-[#800000]">
      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-11">

        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:underline hover:text-gray-400">Find Your Match</Link></li>
            <li><Link to="#" className="hover:underline hover:text-gray-400">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Policies</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:underline hover:text-gray-400">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:underline hover:text-gray-400">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Get in Touch</h3>
          <p>Email: <Link to="mailto:info@kalyanavennila.com" className="hover:text-gray-400">info@kalyanavennila.com</Link></p>
          <p>Phone: +91 8331085410</p>
          <p>Timings: 10:30 AM - 7:30 PM IST</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Disclaimer</h3>
          <p className="text-sm">
            This website is for matrimonial purposes only.
          </p>
          <p className="text-sm">Our web services are purely on Family/Guardian dependency, and we don't provide individual consultations.
          </p>
          <p className="text-sm">
            Each registration has to be validated with Aadhaar Card 'upload' of the bride/groom while Family members/Guardian can apply on behalf as well.
          </p>
        </div>

       <div>
  <h3 className="text-lg font-bold mb-3">Follow Us</h3>
  <div className="flex items-center space-x-3">
    <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookSquare className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
    </Link>
    <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitterSquare className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
    </Link>
    <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagramSquare className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
    </Link>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
