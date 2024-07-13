import React from "react";
import videoSrc from "../assets/images/video2.mp4";
import imageSrc from "../assets/images/bg-light2.jpg";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtlassian } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="font-poppins relative min-h-fit">
      {/* Background video */}
      {/* <video
        src={videoSrc} 
        className="w-full h-screen object-cover z-0" // Full width, full height, cover the container, and behind other elements
        loop 
        autoPlay 
        muted 
      ></video> */}
      <img src={imageSrc} className="w-full h-screen object-cover z-0" />

      {/* Navigation bar */}
      <nav className="flex justify-around items-center fixed top-0 left-0 w-full p-2 text-blue-50 bg-primary_bg z-50">
        <div>
          <h1 className=" text-5xl font-extrabold tracking-widest">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              S
              <span>
                <FontAwesomeIcon icon={faAtlassian} />
              </span>
              TY
              <span>
                <FontAwesomeIcon icon={faAtlassian} />
              </span>
            </Link>{" "}
          </h1>
        </div>
        <ul className="flex justify-around items-center space-x-20 h-16">
          {/* Navigation links */}
          <li className="font-light text-xl hover:text-sky-300">
            <Link
              to="home" // Scrolls to the element with id="home"
              spy={true} // Spy on the scroll position
              smooth={true} // Smooth scroll
              duration={500} // Duration of the scroll animation
              className="cursor-pointer" // Cursor style for the link
            >
              Home
            </Link>
          </li>
          <li className="font-light text-xl hover:text-sky-300">
            <Link
              to="services" // Scrolls to the element with id="services"
              spy={true}
              smooth={true}
              offset={50} // Offset for the scroll position
              duration={500}
              className="cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li className=" font-light text-xl hover:text-sky-300">
            <Link
              to="about" // Scrolls to the element with id="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className=" font-light text-xl hover:text-sky-300">
            <Link
              to="contact" // Scrolls to the element with id="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Intro section */}
      <div
        id="Intro" // Unique id for targeting this section
        className="absolute top-1/2 right-1/3 z-20 p-5 transform -translate-x-1/2 -translate-y-1/2 text-primary"
      >
        <h1 className="text-7xl ml-1 font-black">Hello, World</h1>
        <p className="text-left text-5xl font-light mt-4 ml-2">I'm Satya.</p>
        <p className="mt-4 ml-2 font-light text-xl flex justify-start overflow-hidden border-r-2 border-black whitespace-nowrap animate-typing transition duration-75">
          Frontend Dev | React | Tailwind
        </p>
      </div>
    </div>
  );
};

export default Home;
