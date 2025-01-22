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
      className={`flex flex-col  fixed w-[100%]   bg-${
        !toggle ? "[#262522]" : ""
      } md:bg-transparent`}
    >
      {/* desktop */}
      <div className="mx-auto max-w-[100%]  m-2 flex justify-center w-[100%]">
        <div className=" flex  w-[100%]  items-center bg-[#F0EBE1]   text-center justify-between m-4  p-[5px]  border-2 border-solid border-[#6c6c61cc] border-black-600 rounded-2xl">
          <div>
            <img className="" src="/logo.png" />
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
          <div className="hidden  md:flex items-center  gap-1 ">
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
        <div className=" p-10 flex bg-[#262522] flex-col text-white text-left  md:hidden justify-between items-left gap-4">
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
