import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Hamburger from "./Hamburger";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  const desktop = window.innerWidth > 767;

  useEffect(() => {
    if (desktop){
      return setIsVisible(true)
    }
  })

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav
      id="navBar"
      className="mx-auto w-screen flex bg-slate-800 min-h-content"
    >
      <div className="container flex flex-row p-4 mx-auto items-center justify-between relative">
        <a href="" className="">
          <img src={logo} />
        </a>
        <button className='md:hidden' onClick={handleClick}>
          <Hamburger />
        </button>
        {isVisible && (
          <div
            className='absolute sm:translate-y-20 bg-slate-500 transition-all rounded-sm md:translate-y-0 md:bg-transparent md:relative md:p-2'>
            <ul className="py-4 px-6 text-white flex flex-col md:flex-row gap-4 md:justify-around md:gap-8 md:items-center">
              <li>Home</li>
              <li>About Us</li>
              <li>Book Us</li>
              <li>Schedule</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
