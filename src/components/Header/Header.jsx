import { RxHamburgerMenu } from "react-icons/rx";
import navigation from "../../data/navigation";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    console.log("menu open:", menu);
  };

  return (
    <header className="w-full max-w-full flex flex-col items-center justify-between  bg-white text-[#1f2937] shadow-md fixed top-0 right-0 z-[1000]">
      <div className="flex flex-row justify-between mx-auto w-full max-w-[1024px] items-center p-4">
        <a href="/">
          <img src="/primetrims-logo.png" className="w-[80px]" />
        </a>

        {/* Desktop Layout */}

        <ul className="gap-4 hidden md:flex flex-row">
          {navigation.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-mint transition-colors duration-300 font-semibold text-lg"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Layout */}

        <div onClick={handleMenu} className="md:hidden">
          <RxHamburgerMenu size={28} />
        </div>
      </div>
      {menu && (
        <ul className="w-full max-w-full bg-white top-0 left-0 z-[999] flex flex-col items-center justify-center">
          {navigation.map((item, index) => (
            <li key={index} className="py-2 w-full max-w-full text-center">
              <a
                href={item.href}
                className="hover:text-mint transition-colors duration-300 font-semibold text-lg w-full block"
                onClick={handleMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
