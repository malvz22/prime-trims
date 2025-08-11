import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full max-w-full md:mx-auto flex flex-col items-center py-4 text-[#1f2937]">
      <div className="flex flex-col justify-between w-full max-w-[1024px] px-4">
        <div className="justify-start md:justify-between flex flex-col md:flex-row py-2 items-center gap-5">
          <img src="primetrims-logo.png" className="w-[80px]" />
          <div className="flex flex-col md:flex-row gap-3">
            <a
              href="#home"
              className=" text-[16px] hover:text-mint transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#about-us"
              className=" hover:text-mint transition-colors duration-300 font-medium"
            >
              About Us
            </a>
            <a
              href="#services"
              className=" text-[16px] hover:text-mint transition-colors duration-300 font-medium"
            >
              Services
            </a>
            <a
              href="#pricelist"
              className=" text-[16px] hover:text-mint transition-colors duration-300 font-medium"
            >
              Pricelist
            </a>
            <a
              href="#gallery"
              className=" text-[16px] hover:text-mint transition-colors duration-300 font-medium"
            >
              Gallery
            </a>
          </div>
          <a
            href="https://www.instagram.com/primetrims_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={24}
              className=" hover:text-mint transition-colors duration-300"
            />
          </a>
        </div>
        <hr className="border-t border-gray-300 my-3 w-full max-w-[1024px] px-4" />
      </div>
    </footer>
  );
};

export default Footer;
