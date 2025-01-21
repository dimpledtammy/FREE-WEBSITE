import React from "react";
import { CiInstagram, CiSearch, CiYoutube } from "react-icons/ci";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BiX } from "react-icons/bi";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
    // console.log(toggle);
  }
  return (
    <div
      className={`flex flex-col  fixed w-full   bg-${
        !toggle ? "[#262522]" : ""
      } md:bg-transparent`}
    >
      {/* desktop */}
      <div className="mx-auto flex justify-center w-full">
        <div className=" flex  w-[90%] shadow-2xl items-center bg-[#F0EBE1]  text-center justify-between m-4  p-[5px]  border border-solid  border-black-600 rounded-md">
          <div>
            <img className="ml-4" src="/logo.png" />
          </div>
          <div
            onClick={() => handleToggle()}
            className=" cursor-pointer flex md:hidden"
          >
            {toggle ? (
              <FaHamburger fontSize={"1rem"} />
            ) : (
              <BiX fontSize={"1.5rem"} />
            )}
          </div>
          <div className=" hidden md:flex justify-center  items-center gap-4">
            <a href="/">
              {" "}
              <h1>HOME</h1>{" "}
            </a>
            <a href="/Recipe">
              {" "}
              <h1>RECIPE</h1>{" "}
            </a>
            <a href="/Cooking">
              {" "}
              <h1>COOKING TIPS</h1>{" "}
            </a>
            <a href="/About">
              {" "}
              <h1>ABOUT US</h1>{" "}
            </a>
          </div>
          <div className="hidden  md:flex justify-center items-center gap-1 w-[20%]">
            <input className="hidden" />
            <button>
              <CiSearch />
            </button>
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      {/* mobile */}
      {!toggle && (
        <div className=" w-[50%]  p-20 flex bg-[#262522] flex-col text-white text-left  md:hidden justify-center items-left gap-4">
          <a href="/">
            {" "}
            <h1>HOME</h1>{" "}
          </a>
          <a href="/Recipe">
            {" "}
            <h1>RECIPE</h1>{" "}
          </a>
          <a href="/Cooking">
            {" "}
            <h1>COOKING TIPS</h1>{" "}
          </a>
          <a href="/About">
            {" "}
            <h1>ABOUT US</h1>{" "}
          </a>

          <div className="md:flex flex-row justify-center items-center gap-1 w-[20%]">
            <input className="hidden" />
            <button>
              <CiSearch />
              SUBSCRIBE
            </button>

            <div className="flex text-center justify-center items-center w-[40%] gap-2">
              <CiFacebook />
              <CiInstagram />
              <CiYoutube />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
