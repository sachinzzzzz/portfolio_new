import React from "react";
import mappin from "../assets/portfolio/map-pin.png";
import foodreview from "../assets/portfolio/foodreview.png";
import eventzone from "../assets/portfolio/eventzone.png";
import jobportal from "../assets/portfolio/jobportal.png";
import chatapp from "../assets/portfolio/chatapp.png";
import flappyBird from "../assets/portfolio/FlappyBird.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: mappin,
      tittle: "Pin-Drop",
      demo: "https://pin-drop2.onrender.com",
      code: "https://github.com/sachinzzzzz/Pin-Drop"
    },
    {
      id: 2,
      src: foodreview,
      tittle: "Food-review",
      demo: "https://food-review-1.onrender.com",
      code: "https://github.com/sachinzzzzz/food-review"
    },
    {
      id: 3,
      src: eventzone,
      tittle: "eventzone",
      demo: "https://eventzone-vbt5.onrender.com",
      code: "https://github.com/sachinzzzzz/eventZone"
    },
    {
      id: 4,
      src: jobportal,
      tittle: "Job-portal",
      demo: "https://job-portal-p2ci.onrender.com",
      code: "https://github.com/sachinzzzzz/job-portal"
    },
    {
      id: 5,
      src: chatapp,
      tittle: "chatapp",
      demo: "https://chat-2room.onrender.com",
      code: "https://github.com/sachinzzzzz/chatApp"
    },
    {
      id: 6,
      src: flappyBird,
      tittle: "FlappyBird Game",
      demo: "https://uditpadhan98.github.io/Flappy-Bird-Game/",
      code: "/"
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-700">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        {/* structure for card */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo ,tittle}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-lg flex items-center justify-center duration-200 hover:scale-105">
                {tittle}
              </div>
              <div className="flex items-center justify-center">
                <a href={demo} className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code} className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;