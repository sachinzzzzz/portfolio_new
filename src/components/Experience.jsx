import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Express from "../assets/express.png";
import Node from "../assets/node.png";
import mongodb from "../assets/mongodb.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      link: "https://www.w3schools.com/html/"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      link: "https://www.w3schools.com/css/"
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      link: "https://www.w3schools.com/js/"
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      link: "https://react.dev/"
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      link: "https://tailwindcss.com/"
    },
    {
      id: 6,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-green-400",
      link: "https://www.mongodb.com/"
    },
    {
      id: 7,
      src: Node,
      title: "Node",
      style: "shadow-green-400",
      link: "https://nodejs.org/en"
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
      link: "https://github.com/"
    },
    {
      id: 9,
      src: Express,
      title: "Express",
      style: "shadow-yellow-400",
      link: "https://expressjs.com/"
    },
  ];

  return (
    <div name="experience" className="experience-mobile bg-gradient-to-b from-gray-800 to-black w-full h-screen" 
    style={{height:"50rem"}}>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style , link}) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <a href={link}>
                <img src={src} alt="" className="w-20 mx-auto" />
              </a>
              <a href={link} className="mt-4">{title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;