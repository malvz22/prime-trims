const Header = () => {
  return (
    <header className="w-full max-w-full flex items-center justify-between p-4 bg-deepIndigo text-white sticky top-0 z-50">
      <div className="flex flex-row justify-between mx-auto w-full max-w-[1024px] items-center">
        <a href="/">
          <img src="/primetrims-logo.png" className="w-[80px]" />
        </a>

        <div className="flex flex-row gap-4">
          <a
            href="#home"
            className="text-white hover:text-mint transition-colors duration-300 font-semibold text-lg"
          >
            Home
          </a>
          <a
            href="#about-us"
            className="text-white hover:text-mint transition-colors duration-300 font-semibold text-lg"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-white hover:text-mint transition-colors duration-300 font-semibold text-lg"
          >
            Services
          </a>
          <a
            href="#pricelist"
            className="text-white hover:text-mint transition-colors duration-300 font-semibold text-lg"
          >
            Pricelist
          </a>
          <a
            href="#gallery"
            className="text-white hover:text-mint transition-colors duration-300 font-semibold text-lg"
          >
            Gallery
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
