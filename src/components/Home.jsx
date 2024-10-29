import React from "react";
import HeroImage from "../assets/my_profile.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
            I'm a Web Developer.
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-justify">
          As a dedicated web developer currently pursuing studies at NIT Rourkela, I bring a dynamic blend of academic rigor and practical expertise to my projects. Specializing in crafting elegant and responsive web solutions, I am committed to pushing boundaries and delivering impactful digital experiences. Explore my portfolio to witness the intersection of innovation and skill.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div style={{marginLeft:"2rem"}}>
          <img
            src={HeroImage}
            alt="my profile"
            className="profile-pic rounded-4xl mx-auto w-3/3 h-48 md:w-full"
            style={{borderRadius:"10px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;