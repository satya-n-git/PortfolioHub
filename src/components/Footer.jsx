import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub as faSquareGithub,
  faDiscord,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="font-poppins text-blue-50  mx-auto bg-gray-900  py-8">
      <div className="flex flex-col justify-center items-center mx-auto max-w-7xl">
        <div className="grid grid-cols-8 space-x-4">
          <FontAwesomeIcon icon={faFacebook}     className="size-12 p-5 mx-4 hover:text-blue-300 transition duration-300" />
          <FontAwesomeIcon icon={faXTwitter}     className="size-12 p-5 mx-4 hover:text-sky-300 transition duration-300" />
          <FontAwesomeIcon icon={faGoogle}       className="size-12 p-5 mx-4 hover:text-red-300 transition duration-300" />
          <FontAwesomeIcon icon={faInstagram}    className="size-12 p-5 mx-4 hover:text-pink-300 transition duration-300" />
          <FontAwesomeIcon icon={faLinkedin}     className="size-12 p-5 mx-4 hover:text-blue-500 transition duration-300" />
          <FontAwesomeIcon icon={faSquareGithub} className="size-12 p-5 mx-4 hover:text-gray-300 transition duration-300" />
          <FontAwesomeIcon icon={faDiscord}      className="size-12 p-5 mx-4 hover:text-indigo-400 transition duration-300" />
          <FontAwesomeIcon icon={faMedium}       className="size-12 p-5 mx-4 hover:text-green-400 transition duration-300" />
        </div>
        <div className="text-center font-medium mt-6">
          <p className="italic mb-2">"Code is like humor. When you have to explain it, it’s bad."</p>
          <p className="text-sm">&copy; 2024 Satya. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
