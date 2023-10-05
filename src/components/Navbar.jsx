import { useEffect, useState } from "react";

const Navbar = () => {
  const [state, setState] = useState({
    showMenu: false,
    isScrolled: false,
  });

  const handleMenuClick = () => {
    setState((prevState) => ({...prevState, showMenu: !prevState.showMenu}));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 33) {
    setState((prevState) => ({...prevState, isScrolled: true}));
      } else {
    setState((prevState) => ({...prevState, isScrolled: false}));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const { showMenu, isScrolled } = state;

  return (
    <div>
      <div className={`fixed top-0 h-[80px] w-full flex justify-between items-center px-4 ${isScrolled ? "bg-white" : "bg-transparent"}`}>
        <div className="text-3xl md:text-4xl text-amber-800">
          <a href="home">Housing Program</a>
        </div>
        <div className="md:hidden" onClick={handleMenuClick}>
          {showMenu ? (
            <svg
              className="h-6 w-6 text-black cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.95 5.879l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-black cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="custom-display">
          <a className="px-4 py-2" href="home">
            Home
          </a>
          <a className="px-4 py-2" href="about">
            About Us
          </a>
          <a className="px-4 py-2" href="feature">
            Our Features
          </a>
          <a className="px-4 py-2" href="sale">
            On Sale
          </a>
          <a className="px-4 py-2" href="service">
            Our Services
          </a>
          <a className="px-4 py-2" href="demo">
            Demo
          </a>
          <a className="px-4 py-2" href="client">
            Our Clients
          </a>
        </div>
        <div className="custom-display">
          <a
            href="contact"
            className="px-4 py-2 bg-amber-800 rounded text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className={`${showMenu ? "flex" : "hidden"} flex-col text-center text-white absolute top-20 w-full h-full bg-amber-800 md:hidden`}>
        <a onClick={handleMenuClick} className="p-4 hover:bg-gray-700" href="home">
          Home
        </a>
        <a onClick={handleMenuClick} className="p-4 hover:bg-gray-700" href="about">
          About Us
        </a>
        <a onClick={handleMenuClick} className="p-4 hover:bg-gray-700" href="feature">
          Our Features
        </a>
        <a onClick={handleMenuClick} className="p-4 hover:bg-gray-700" href="sale">
          On Sale
        </a>
        <a onClick={handleMenuClick} className="p-4 hover:bg-gray-700" href="service">
          Our Services
        </a>
        <a onClick={handleMenuClick} className="p-4 hover:bg-gray-700" href="demo">
          Demo
        </a>
        <a onClick={handleMenuClick} className="p-4 hover:bg-gray-700" href="client">
          Our Clients
        </a>
      </div>
    </div>
  );
};

export default Navbar;
