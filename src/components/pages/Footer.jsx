import React from "react";
import { CiInstagram,CiFacebook, CiYoutube } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";

const Footer =() => {
    return (
        <>
         <section className="bg-[#F0EBE1]  p-6">
       
        <div>
       <section className="bg-[#EE6352] rounder-[20px] border-10px mx-4 mb-3">
        <div className="mx-auto p-4">
        <div className=" text-white flex flex-col items-left md:justify-center md:items-center gap-4">
            <p>SUBSCRIBE</p>
            <h2 className="font-bold md:text-center md:items-center text-[30px]">JOIN THE FUN, SUBSCRIBE NOW</h2>
            <p className="w-[50%] text-left md:text-center">Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight to your inbox.</p>
           <form>
            <input className="p-2 rounded-[10px]  text-black" type="email" placeholder="emailaddress"/>
            <button className="bg-black rounded-[10px] p-2">subscribe</button>
           </form>
         </div>
        </div>
       </section>
       <section className="bg-black mx-4  p-4">
        <div className="flex flex-col items-left text-left text-white gap-4 md:flex md:flex-row md:justify-between md:items-center ">
          <div>
             <img src="/Logo-Footer.png"/>
          </div>
          <div className="gap-2 flex flex-col md:flex md:flex-row">
          <a href="/">
              {" "}
              <h1>HOME</h1>{" "}
            </a>
            <a href="/Recipe">
              {" "}
              <h1>RECIPE</h1>{" "}
            </a>
            <a href="/Cooking ">
              {" "}
              <h1>COOKING TIPS</h1>{" "}
            </a>
            <a href="/About">
              {" "}
              <h1>ABOUT US</h1>{" "}
            </a>
          </div>
          <div  className="gap-3 flex flex-row">
          <CiFacebook />
            <CiInstagram />
            <CiYoutube />
            <RiTiktokLine />
          </div>
         
        </div>
        <div className="text-white pt-3"> < hr/> </div>  
          <div className="text-white flex justify-left  md:justify-center ">Copyright: © 2024 Cooks Delight.</div>
       </section>
      </div>
         
       </section>
        </>
    );
};
export default Footer;