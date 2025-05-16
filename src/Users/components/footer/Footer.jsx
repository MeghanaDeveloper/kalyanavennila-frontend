import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaWhatsappSquare,
  FaLinkedin
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="padding-lr text-white padding-tb bg-gradient-to-r from-[#F7641E] to-[#800000]">
      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline hover:text-gray-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Policies</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/privacy&policy"
                className="hover:underline hover:text-gray-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms&conditions"
                className="hover:underline hover:text-gray-400"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Get in Touch</h3>
          <p>
            {" "}
            <span className="font-bold">Email : </span>{" "}
            <Link
              to="mailto:info@kalyanavennila.com"
              className="hover:text-gray-400"
            >
              services@kalyanavennila.com
            </Link>
          </p>
          <p>
            <span className="font-bold">Phone : </span>+91 8331085410
          </p>
          <p>
            <span className="font-bold block">Address : </span>
            1205 Aspira Apartments, J.P.Nagar, Banglore,
            <span className="block">Karnataka - 560078</span>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Disclaimer</h3>
          <p className="text-sm">
            This website is for matrimonial purposes only.
          </p>
          <p className="text-sm">
            Our web services are purely on Family/Guardian dependency, and we
            don't provide individual consultations.
          </p>
          <p className="text-sm">
            Each registration has to be validated with Aadhaar Card 'upload' of
            the bride/groom while Family members/Guardian can apply on behalf as
            well.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Follow Us</h3>
          <div className="flex items-center space-x-3">
            <Link
              to="https://www.facebook.com/people/Kalyanavennila/61575497643118/?sk=about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
            </Link>
            <Link
              to="https://www.youtube.com/@Kalyanavennila"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutubeSquare className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
            </Link>
            <a
              href=" https://wa.me/918331085410 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
            </a>
            <Link
              to="https://www.instagram.com/kalyanavennila/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/kalyana-vennila-202574364/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
