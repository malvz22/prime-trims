import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import service from "./data/service.jsx";
import ServiceCard from "./components/Cards/ServiceCard.jsx";
import price from "./data/price.jsx";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { RxScissors } from "react-icons/rx";
import Gallery from "./components/Containers/Gallery.jsx";
import { motion as Motion } from "motion/react";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <section id="home" className="">
          <div className="bg-[url(/hero-bg.webp)] bg-center bg-no-repeat w-full max-w-full min-h-screen">
            <div className="flex flex-col items-center justify-center text-center h-screen text-white shadow-lg px-4">
              <img src="/primetrims-logo.png" className="mb-6" />
              <h1 className="mb-2 text-shadow animate-fadeIn">
                Haircuts for Everyone!
              </h1>
              <h2
                className="mb-6 animate-fadeIn delay-300 opacity-0"
                style={{ animationDelay: "0.3s" }}
              >
                Transform your look with us!
              </h2>
              <a
                href="https://linktr.ee/primetrims?utm_source=linktree_profile_share&ltsid=7f35900f-0d17-413a-b3c3-44d1ec13c5f1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="opacity-0 animate-fadeIn delay-[600ms]"
                  style={{ animationDelay: "0.6s" }}
                >
                  Book Now!
                </button>
              </a>
            </div>
          </div>
        </section>
        <section
          id="about-us"
          className="text-center flex items-center justify-center scroll-mt-22 bg-lavender"
        >
          <div className="flex flex-col section-container">
            <h1>Welcome to PRIME TRIMS</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-full gap-6">
              <img
                src="/barber.jpg"
                className="w-full md:w-[50%] object-cover rounded-2xl"
              />
              <p className="text-start">
                At Prime Trims, we believe a great haircut does more than just
                change your look — it boosts your confidence. Our dedicated
                stylist combines precision techniques with the latest trends to
                give you a style that’s uniquely yours. From sharp fades to
                timeless classics, every cut is crafted with care in a relaxed,
                friendly space. Whether you’re here for a quick trim or a
                complete transformation, we’re ready to make you look and feel
                your best.
              </p>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="text-center flex flex-col justify-center scroll-mt-22 w-full max-w-full relative overflow-hidden"
        >
          <div className="section-container z-20">
            <h1>Services</h1>
            <p className="mb-4">
              At Prime Trims, we believe in providing top-notch grooming
              services that cater to your unique style and preferences. Our
              skilled barbers are dedicated to delivering exceptional haircuts,
              shaves, and grooming experiences that leave you looking sharp and
              feeling confident.
            </p>
            <Motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      index === service.length - 1 && service.length % 2 !== 0
                        ? "md:col-span-2 md:w-1/2 md:mx-auto"
                        : ""
                    }`}
                  >
                    <ServiceCard
                      icon={item.icon}
                      name={item.name}
                      description={item.description}
                      bgColor={item.bgColor}
                      textColor={item.textColor}
                    />
                  </div>
                ))}
              </div>
            </Motion.div>
          </div>

          <RxScissors
            size={320}
            className="absolute top-0 left-0 text-black/20 rotate-45"
          />
          <RxScissors
            size={320}
            className="absolute bottom-0 right-0 text-black/20 rotate-240"
          />
        </section>
        <section
          id="pricelist"
          className="text-center flex flex-col justify-center scroll-mt-22 min-h-screen text-white bg-deepIndigo relative overflow-hidden"
        >
          <div className="flex flex-col section-container z-50">
            <Motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
            >
              Price List
            </Motion.h1>
            <Motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { staggerChildren: 0.3 } }}
              className="flex flex-col mb-12"
              viewport={{ once: false }}
            >
              {price.map((item, index) => (
                <Motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: false }}
                  key={index}
                  className="flex flex-col"
                >
                  <div className="flex flex-row justify-between items-start">
                    <h2 className="font-semibold text-start">{item.name}</h2>
                    <h2 className="font-bold">{item.price}</h2>
                  </div>
                  {index < price.length - 1 && (
                    <Motion.hr
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: false }}
                      className="border-t border-gray-300 my-3"
                    />
                  )}
                </Motion.div>
              ))}
            </Motion.div>
            <a
              href="https://linktr.ee/primetrims?utm_source=linktree_profile_share&ltsid=7f35900f-0d17-413a-b3c3-44d1ec13c5f1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                viewport={{ once: false }}
              >
                Book Now!
              </Motion.button>
            </a>
          </div>

          {/* Background Elements */}

          <div className="absolute bottom-[-55%] left-19 translate-x-[-50%] translate-y-[-50%] w-[800px] h-[800px]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#302E76"
                d="M45.1,-66.4C56.5,-53.7,62.6,-38,65.5,-22.8C68.4,-7.5,68.2,7.3,63.7,20.6C59.3,34,50.6,45.9,39.3,55.4C28,65,14,72.1,-0.8,73.3C-15.7,74.4,-31.3,69.6,-46.7,61.3C-62,53.1,-76.9,41.5,-79.7,27.2C-82.5,13,-73.1,-3.8,-67,-21.5C-60.9,-39.2,-58.1,-57.7,-47.5,-70.7C-36.9,-83.7,-18.5,-91.1,-0.8,-90C16.8,-88.9,33.6,-79.2,45.1,-66.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="absolute bottom-[-35%] left-[-120px] translate-x-[-50%] translate-y-[-50%] w-[700px] h-[700px]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="none"
                stroke="#72ffb6"
                stroke-width="1.5"
                d="M40.3,-34.6C56.5,-24.2,76.7,-12.1,78.3,1.7C80,15.4,63.1,30.9,47,39.4C30.9,48,15.4,49.7,0.9,48.7C-13.5,47.8,-27.1,44.2,-39,35.6C-51,27.1,-61.4,13.5,-61.6,-0.2C-61.7,-13.9,-51.7,-27.8,-39.7,-38.1C-27.8,-48.5,-13.9,-55.3,-0.9,-54.4C12.1,-53.5,24.2,-44.9,40.3,-34.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="absolute top-[30%] left-1 translate-x-[-50%] translate-y-[-50%] w-[500px] h-[500px]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#302E76"
                d="M45.1,-66.4C56.5,-53.7,62.6,-38,65.5,-22.8C68.4,-7.5,68.2,7.3,63.7,20.6C59.3,34,50.6,45.9,39.3,55.4C28,65,14,72.1,-0.8,73.3C-15.7,74.4,-31.3,69.6,-46.7,61.3C-62,53.1,-76.9,41.5,-79.7,27.2C-82.5,13,-73.1,-3.8,-67,-21.5C-60.9,-39.2,-58.1,-57.7,-47.5,-70.7C-36.9,-83.7,-18.5,-91.1,-0.8,-90C16.8,-88.9,33.6,-79.2,45.1,-66.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="absolute top-[10%] right-[-16%] translate-y-[-50%] w-[600px] h-[600px]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#302E76"
                d="M38.2,-58.7C47.7,-53.3,52.4,-39.7,54.1,-27.3C55.8,-14.9,54.5,-3.6,56.8,11.1C59.2,25.7,65.3,43.8,59.1,51.5C52.9,59.3,34.4,56.6,19.4,56.6C4.5,56.6,-6.8,59.2,-16,55.8C-25.2,52.5,-32.3,43.3,-42.6,34.9C-52.9,26.5,-66.4,19,-70.5,8.5C-74.5,-2,-69,-15.5,-63.8,-30.1C-58.7,-44.8,-53.9,-60.5,-43.3,-65.5C-32.7,-70.4,-16.3,-64.4,-1,-62.9C14.3,-61.3,28.7,-64.1,38.2,-58.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="absolute top-[-5%] right-[-8%] translate-y-[-50%] w-[550px] h-[550px] z-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="none"
                stroke="#72ffb6"
                stroke-width="1.5"
                d="M48.6,-73.1C62.4,-66.7,72.7,-52.3,77.8,-36.8C82.9,-21.3,82.8,-4.7,79.9,11.1C76.9,26.8,71.2,41.8,61,52.1C50.9,62.4,36.2,68,20.9,73.6C5.6,79.1,-10.4,84.6,-24.1,81.1C-37.9,77.6,-49.3,65.1,-59.2,52.1C-69.2,39.2,-77.8,25.8,-81.8,10.6C-85.9,-4.7,-85.4,-21.7,-79.5,-36.9C-73.5,-52.1,-62.1,-65.4,-47.9,-71.7C-33.7,-78,-16.9,-77.3,0.2,-77.7C17.4,-78.1,34.7,-79.6,48.6,-73.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="absolute top-[45%] right-[-440px] translate-y-[-50%] w-[700px] h-[700px]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="none"
                stroke="#72ffb6"
                stroke-width="1.5"
                d="M40.3,-34.6C56.5,-24.2,76.7,-12.1,78.3,1.7C80,15.4,63.1,30.9,47,39.4C30.9,48,15.4,49.7,0.9,48.7C-13.5,47.8,-27.1,44.2,-39,35.6C-51,27.1,-61.4,13.5,-61.6,-0.2C-61.7,-13.9,-51.7,-27.8,-39.7,-38.1C-27.8,-48.5,-13.9,-55.3,-0.9,-54.4C12.1,-53.5,24.2,-44.9,40.3,-34.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </section>
        <section
          id="gallery"
          className="text-center flex flex-col justify-center scroll-mt-22 section-container"
        >
          <Gallery />
        </section>
        <section
          id="contact"
          className="text-center flex flex-col justify-center scroll-mt-22 w-full max-w-full bg-deepIndigo text-white"
        >
          <div className="flex flex-col section-container">
            <h1>Contact</h1>
            <p className="mb-4 text-start md:text-center">
              For inquiries or to book an appointment, please reach out to us
              via our social media or contact number.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 text-start gap-4 mb-12">
              <div className="flex flex-col">
                <img
                  src="/primetrims-logo.png"
                  className="w-full max-w-[60%] mb-3"
                />
                <h4>Address</h4>
                <p>
                  Jl. KH. Ahmad Dahlan Kby. No.30, RT.3/RW.3, Kramat Pela, Kec.
                  Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                  12130
                </p>
              </div>
              <div className="flex flex-col">
                <h4 className="mb-3">Contact Us</h4>
                <ul>
                  <li className="flex items-center gap-2 mb-2">
                    <FaPhoneAlt
                      size={30}
                      className="bg-mint rounded-full p-1 text-deepIndigo"
                    />
                    <a
                      href="https://api.whatsapp.com/send/?phone=0895361534253&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +62 895361534253
                    </a>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaWhatsapp
                      size={30}
                      className="bg-mint rounded-full p-1 text-deepIndigo"
                    />
                    <a
                      href="https://api.whatsapp.com/send/?phone=0895361534253&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +62 895361534253
                    </a>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaInstagram
                      size={30}
                      className="bg-mint rounded-full p-1 text-deepIndigo"
                    />
                    <a
                      href="https://www.instagram.com/primetrims_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      primetrims_
                    </a>
                  </li>
                </ul>
              </div>
              <div className="relative w-full pb-[100%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1190718907114!2d106.79181849999999!3d-6.2480366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1d1c38afa03%3A0xc812ce2bb403af26!2sPRIME%20TRIMS!5e0!3m2!1sen!2sid!4v1755148662716!5m2!1sen!2sid"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  style={{
                    border: 0,
                  }}
                  allowfullscreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Prime Trims Google Maps Location"
                />
              </div>
            </div>

            {/* <a
              href="https://linktr.ee/primetrims?utm_source=linktree_profile_share&ltsid=7f35900f-0d17-413a-b3c3-44d1ec13c5f1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Contact Us</button>
            </a> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
