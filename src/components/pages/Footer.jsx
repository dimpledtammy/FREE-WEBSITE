import React from "react";
import { CiInstagram,CiFacebook, CiYoutube } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";

const Footer =() => {
    return (
        <>
         <section className="bg-[#F0EBE1]  p-6">
       
        <div>
       <section className="bg-[#EE6352] rounded-2xl rounder-[20px] border-10px mx-4 mb-3">
        <div className="mx-auto  p-4">
        <div className=" text-white flex flex-col justify-center items-center gap-4">
            <p>SUBSCRIBE</p>
            <h2 className="font-bold text-center items-center text-[30px]">JOIN THE FUN, SUBSCRIBE NOW</h2>
            <p className="w-[100%] text-center">Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight to your inbox.</p>
           <form className="flex flex-col md:flex-row items-center gap-2 text-center">
            <input className="p-2 rounded-[10px]  text-black" type="email" placeholder="emailaddress"/>
            <button className="bg-black rounded-[10px] p-2">subscribe</button>
           </form>
         </div>
        </div>
       </section>
       <section className="bg-black rounded-2xl mx-4  p-4">
        
        <div className="flex flex-col  text-center text-white gap-4 md:flex md:flex-row justify-between items-center ">
          
          <div>
             <img src="/Logo-Footer.png"/>
          </div>
          <div>
          <div className="gap-6 flex w-[100%] items-center  flex-col md:flex md:flex-row">
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
          </div>
          <div  className="gap-3 justify-between items-center flex flex-row">
          <CiFacebook />
            <CiInstagram />
            <CiYoutube />
            <RiTiktokLine />
          </div>
         
        </div>
        <div className="text-white pt-3"> < hr/> </div>  
          <div className="text-white flex justify-center ">Copyright: © 2024 Cooks Delight.</div>
          
       </section>
      </div>
         
       </section>
        </>
    );
};
export default Footer;