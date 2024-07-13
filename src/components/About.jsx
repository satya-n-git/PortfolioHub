import React from "react";
import profile from "../assets/images/profile2.jpg";

const About = () => {
  return (
    <section className="font-poppins text-primary mx-auto">
      <div className="flex-col justify-center items-center mt-4 p-5 px-24">
        {/* Section Title */}
        <div className="mt-4 mb-4 flex justify-center font-bold text-5xl">
          <h1>About me</h1>
        </div>
        <div className="flex items-center justify-between w-full mx-auto max-w-7xl mt-10">
          {/* Profile Image */}
          <div className="flex-none">
            <img
              src={profile}
              alt="Profile"
              className="w-48 h-48 rounded-full"
            />
          </div>

          {/* Vertical Divider */}
          <div className="border-l border-gray-300 h-48 mx-8"></div>

          {/* Experience Cards */}
          <div className="grid grid-cols-2 gap-14 max-w-4xl">
            {/* Cognizant Internship Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-2">
                Cognizant Internship
              </h3>
              <p className="text-sm  mb-2">Cognizant (2021 - 2022)</p>
              <ul className="list-disc ml-6">
                <li>Worked on software development projects</li>
                <li>Gained hands-on experience with modern technologies</li>
                <li>Collaborated with experienced professionals</li>
              </ul>
            </div>

            {/* OpenText Internship Card */}
            <div className="bg-secondary_bg border border-gray-200 rounded-lg shadow-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-2">
                OpenText Internship
              </h3>
              <p className="text-sm  mb-2">OpenText (2022 - 2022)</p>
              <ul className="list-disc ml-6">
                <li>Developed and tested software applications</li>
                <li>
                  Assisted in various stages of the software development
                  lifecycle
                </li>
                <li>Worked with a team of developers to meet project goals</li>
              </ul>
            </div>

            {/* Associate Software Engineer Card */}
            <div className="bg-secondary_bg border border-gray-200 rounded-lg shadow-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-2">
                Associate Software Engineer
              </h3>
              <p className="text-sm mb-2">OpenText (2022 - 2024)</p>
              <ul className="list-disc ml-6">
                <li>Developed and maintained web applications</li>
                <li>Implemented features based on client requirements</li>
                <li>Collaborated with cross-functional teams</li>
              </ul>
            </div>

            {/* Freelance Projects Card */}
            <div className="bg-secondary_bg border border-gray-200 rounded-lg shadow-lg p-6 mb-4">
              <h3 className="font-semibold text-lg mb-2">Freelance Projects</h3>
              <p className="text-sm mb-2">Various Clients (2024 - Present)</p>
              <ul className="list-disc ml-6">
                <li>Created custom WordPress themes and plugins</li>
                <li>
                  Implemented responsive designs for mobile-first user
                  experiences
                </li>
                <li>Managed project timelines and client communications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
