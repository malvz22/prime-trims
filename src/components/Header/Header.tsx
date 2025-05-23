const Header = () => {
  return (
    <header className="w-full max-w-full flex items-center justify-between p-4 bg-deepIndigo text-white">
      <div className="flex flex-row justify-between mx-auto w-full max-w-[1024px] items-center">
        <img src="/primetrims-logo.png" className="w-[80px]" />
        <div className="flex flex-row gap-3">
          <a href="#services" className="">
            Services
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
