import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      desc: "Design and develop responsive user interfaces using React and Tailwind CSS for modern web applications.",
    },
    {
      id: 2,
      title: "Component Integration",
      desc: "Create reusable components in React to enhance application functionality and maintainability.",
    },
    {
      id: 3,
      title: "State Management",
      desc: "Implement efficient state management solutions using tools like Redux or Context API to manage application data.",
    },
    {
      id: 4,
      title: "Responsive Design",
      desc: "Utilize Tailwind CSS to build mobile-first, responsive layouts that provide an optimal user experience across devices.",
    },
  ];

  return (
    <section className="font-poppins text-primary">
      <div className="flex flex-col justify-center items-center mt-4 p-5 px-24">
        <div className="mt-4 mb-4 flex justify-center font-bold text-5xl">
          <h1>Services</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 max-w-7xl">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-secondary_bg border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <h2 className="font-semibold text-2xl mb-4">{service.title}</h2>
              <p className="line-clamp-4">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
