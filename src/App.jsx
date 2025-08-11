import { Brush, Droplets, Scissors, Thermometer } from "lucide-react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { TbRazorElectric } from "react-icons/tb";
import service from "./data/service.jsx";
import ServiceCard from "./components/Cards/ServiceCard.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="w-full max-w-[1024px] px-4 mx-auto">
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-screen text-center"
        >
          <img src="/primetrims-logo.png" className="" />
          <h1>Haircuts for Everyone!</h1>
          <h2 className="mb-4">Transform your look with us!</h2>
          <a
            href="https://linktr.ee/primetrims?utm_source=linktree_profile_share&ltsid=7f35900f-0d17-413a-b3c3-44d1ec13c5f1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Book Now!</button>
          </a>
        </section>
        <section
          id="about-us"
          className="text-center flex flex-col justify-center scroll-mt-22 py-4 min-h-screen"
        >
          <h1>Welcome to PRIME TRIMS</h1>
          <div className="flex flex-row w-full max-w-full gap-3">
            <img
              src="/barber.jpg"
              className="w-[50%] object-cover rounded-2xl"
            />
            <p className="text-start">
              Step into your new story. Prime Trims is more than just a
              barbershop — it's a space to relax, recharge, and transform your
              style. Located in the heart of the city, we bring quality grooming
              and a personal touch to every visit.
            </p>
          </div>
        </section>
        <section
          id="services"
          className="text-center flex flex-col justify-center scroll-mt-22"
        >
          <h1>Services</h1>
          <p className="text-white mb-4">
            At Prime Trims, we believe in providing top-notch grooming services
            that cater to your unique style and preferences. Our skilled barbers
            are dedicated to delivering exceptional haircuts, shaves, and
            grooming experiences that leave you looking sharp and feeling
            confident.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {service.map((item, index) => (
              <ServiceCard
                key={index}
                icon={item.icon}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </section>
        <section
          id="pricelist"
          className="text-center flex flex-col justify-center scroll-mt-22 min-h-screen"
        >
          <h1>Price List</h1>
          <div className="flex flex-col mb-12">
            <div className="flex flex-row justify-between">
              <h2 className="font-semibold">Haircut + Wash + Hot Towel</h2>
              <h2 className="font-bold">70K</h2>
            </div>
            <hr className="border-t border-gray-300 my-3" />
            <div className="flex flex-row justify-between">
              <h2 className="font-semibold">Shaving</h2>
              <h2 className="font-bold">50K</h2>
            </div>
            <hr className="border-t border-gray-300 my-3" />
            <div className="flex flex-row justify-between">
              <h2 className="font-semibold">Basic Coloring</h2>
              <h2 className="font-bold">100K</h2>
            </div>
          </div>
          <a
            href="https://linktr.ee/primetrims?utm_source=linktree_profile_share&ltsid=7f35900f-0d17-413a-b3c3-44d1ec13c5f1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Book Now!</button>
          </a>
          {/* <button className="w-full max-w-[200px] mx-auto">Book Now!</button> */}
        </section>
        <section
          id="gallery"
          className="text-center flex flex-col justify-center scroll-mt-22"
        >
          <h1>Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <img src="/result1.webp" />
            <img src="/result2.webp" />
            <img src="/result3.webp" />
            <img src="/result4.webp" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
