import { Brush, Droplets, Scissors, Thermometer } from "lucide-react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { TbRazorElectric } from "react-icons/tb";
import service from "./data/service.jsx";
import ServiceCard from "./components/Cards/ServiceCard.jsx";
import price from "./data/price.jsx";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { RxScissors } from "react-icons/rx";
import ImageContainer from "./components/Containers/ImageContainer.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="">
        {/* <section
          id="home"
          className="flex flex-col items-center justify-center min-h-screen text-center"
        >
          <img src="/primetrims-logo.png" className="mb-6" />
          <h1 className="mb-2">Haircuts for Everyone!</h1>
          <h2 className="mb-6">Transform your look with us!</h2>
          <a
            href="https://linktr.ee/primetrims?utm_source=linktree_profile_share&ltsid=7f35900f-0d17-413a-b3c3-44d1ec13c5f1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Book Now!</button>
          </a>
        </section> */}
        <section id="home" className="">
          <div className="bg-[url(/hero-bg.webp)] bg-center w-full max-w-full min-h-screen">
            <div className="flex flex-col items-center justify-center text-center h-screen text-white shadow-lg px-4">
              <img src="/primetrims-logo.png" className="mb-6" />
              <h1 className="mb-2 text-shadow">Haircuts for Everyone!</h1>
              <h2 className="mb-6">Transform your look with us!</h2>
              <a
                href="https://linktr.ee/primetrims?utm_source=linktree_profile_share&ltsid=7f35900f-0d17-413a-b3c3-44d1ec13c5f1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Book Now!</button>
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
          className="text-center flex flex-col justify-center scroll-mt-22 min-h-screen  text-white bg-deepIndigo"
        >
          <div className="flex flex-col section-container">
            <h1>Price List</h1>
            <div className="flex flex-col mb-12">
              {price.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex flex-row justify-between items-start">
                    <h2 className="font-semibold text-start">{item.name}</h2>
                    <h2 className="font-bold">{item.price}</h2>
                  </div>
                  {index < price.length - 1 && (
                    <hr className="border-t border-gray-300 my-3" />
                  )}
                </div>
              ))}
            </div>
            <a
              href="https://linktr.ee/primetrims?utm_source=linktree_profile_share&ltsid=7f35900f-0d17-413a-b3c3-44d1ec13c5f1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Book Now!</button>
            </a>
          </div>

          {/* <button className="w-full max-w-[200px] mx-auto">Book Now!</button> */}
        </section>
        <section
          id="gallery"
          className="text-center flex flex-col justify-center scroll-mt-22 section-container"
        >
          <div className="flex flex-col">
            <h1>Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <ImageContainer>
                <img src="/result1.webp" loading="lazy" />
              </ImageContainer>
              <ImageContainer>
                <img src="/result2.webp" loading="lazy" />
              </ImageContainer>
              <ImageContainer>
                <img src="/result3.webp" loading="lazy" />
              </ImageContainer>
              <ImageContainer>
                <img src="/result4.webp" loading="lazy" />
              </ImageContainer>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="text-center flex flex-col justify-center scroll-mt-22 w-full max-w-full bg-deepIndigo text-white"
        >
          <div className="flex flex-col section-container">
            <h1>Contact</h1>
            <p className="mb-4">
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
