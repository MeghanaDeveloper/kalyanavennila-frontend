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
            <li>
              <Link to="/blogs/how-to-write-a-perfect-matrimonial-profile" className="hover:underline hover:text-gray-400">
               Blogs
              </Link>
            </li>
            <li>
              <Link to="/faq's" className="hover:underline hover:text-gray-400">
                FAQ
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
           87, Phase 1,Emerald park, Annojiguda, 
            <span className="block">Hyderabad - 500088</span>
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
              aria-label="Visit our Facebook page"
            >
              <FaFacebookSquare className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
            </Link>
            <Link
              to="https://www.youtube.com/@Kalyanavennila"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our You Tube page"
            >
              <FaYoutubeSquare className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
            </Link>
            <a
              href=" https://wa.me/918331085410 "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our What's UP page"
            >
              <FaWhatsappSquare className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
            </a>
            <Link
              to="https://www.instagram.com/kalyanavennila/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <FaInstagramSquare className="w-8 h-8 transition-transform duration-300 hover:scale-125" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/kalyana-vennila-202574364/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
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
