import React from "react";
import contact from "../assets/images/contact2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import {
  faHouse,
  faPhoneVolume,
  faEnvelope,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="font-poppins flex flex-col items-center mx-auto">
      <div className="flex-col justify-center items-center mt-4 p-5 pb-0 px-24">
        {/* Section Title */}
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-primary">Contact</h1>
        </div>
        {/* Container for the Photo, Titles, Address and Form */}
        <div className="flex justify-between items-center mt-10 max-w-7xl  w-full mx-auto ">
          {/* Contact Photo */}
          <div className="flex-none">
            <img
              src={contact}
              alt="Contact-Image"
              className="w-48 h-96 rounded-3xl"
            />
          </div>
          {/* Vertical Divider b/w the photo and Contact form  */}
          <div className="border-l border-gray-300 h-96 mx-20"></div>
          {/* Section to right of the Vertical Divider */}
          <div className="flex-col max-w-4xl p-6">
            {/* Contact details section */}
            <div className="flex flex-col">
              {/* Titles */}
              <div className="mb-6">
                <h5 className="text-xl font-semibold text-secondary mb-6">
                  Contact me
                </h5>
                <h1 className="font-bold text-5xl mb-6 text-primary">
                  GET IN TOUCH WITH ME
                </h1>
                <p className="font-semibold text-tertiary text-lg mb-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Alias vero, tenetur quam eius maxime, officiis laborum ex
                  quasi nulla maiores dicta atque minus aut neque non in, totam
                  eos harum?
                </p>
              </div>
              {/* Address Section */}
              <div className="mt-1 mb-10">
                <div className="mb-6 flex items-center">
                  <div className="bg-tertiary_bg rounded-md p-2 px-5 mr-5 size-20 flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="size-10 text-secondary"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl  font-bold mb-1 text-primary">
                      My Location
                    </h3>
                    <p className="text-tertiary font-medium">
                      Hitech City, Hyderabad, 500081, India
                    </p>
                  </div>
                </div>
                <div className="mb-6 flex items-center">
                  <div className="bg-tertiary_bg rounded-md p-2 px-3 mr-5 size-20 flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      className="size-10 text-secondary"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-primary">
                      Phone Number
                    </h3>
                    <p className="text-tertiary font-medium">
                      (+91) 81 414 257 9980
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-tertiary_bg rounded-md p-2 px-3 mr-5 size-20 flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="size-10 text-secondary"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-primary">
                      Email Address
                    </h3>
                    <p className="text-tertiary font-medium">
                      satya@domain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact form Section */}
            <div className="my-5 py-4">
              <form action="submit" onSubmit={sendEmail}>
                <div className="flex flex-col items-center mb-6 py-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    autoComplete="off"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-md px-2 h-10 caret-secondary  focus:outline-secondary"
                  />
                </div>
                <div className="flex flex-col items-center mb-6 py-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    autoComplete="off"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-md px-2 h-10 caret-secondary focus:outline-secondary"
                  />
                </div>
                <div className="flex flex-col items-center mb-6 py-2">
                  <textarea
                    type="message"
                    placeholder="Your message"
                    autoComplete="off"
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-md px-2 pt-2 h-32 caret-secondary focus:outline-secondary"
                  />
                </div>
                <button className="w-full border-2 border-gray-300 rounded-md px-2 text-base font-semibold focus:bg-sky-300 focus:text-primary transition-all duration-300 ease-in-out h-10 bg-secondary text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
