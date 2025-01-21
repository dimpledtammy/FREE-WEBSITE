import React from "react";
import { CiInstagram,CiFacebook, CiYoutube } from "react-icons/ci";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
const About = () => {
  return (
    <>
      <section className="mx-auto w-[100%] flex items-center">
      <div className="mx-auto max-w-[1200px] pt-20">
        <div className="bg-[#F0EBE1] px-6">
          
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="font-bold text-[40px] w-[100%] md:text-[60px] ">
                  Welcome to my Culinary Haven!
                </h2>
              </div>
              <div className="">
                <p>
                  Bonjour and welcome to the heart of my kitchen! I'm Isabella
                  Russo, the culinary enthusiast behind this haven of flavors,
                  Cooks Delight. Join me on a gastronomic journey where each
                  dish carries a story, and every recipe is a crafted symphony
                  of taste.
                </p>
                <button className="bg-[#F29C33] mt-3 rounded-[10px] p-2 ">
                  explore recipes
                </button>
              </div>
            </div>
            <section>
              <div className=" border-[#2625223D] border-2 mt-3  rounded-[10px] p-3 ">
                <div className="flex flex-col gap-3 justify-between md:flex-row">
                  <div className="flex flex-col md:w-[40%] gap-3 justify-between ">
                    <img className="w-[100%]" src="/Author1.png" />
                    <div className="gap-1 text-black border-2 rounded-[10px] w-[100%] border-black p-3 justify-between items-center flex flex-row">
                      <p>follow us</p>
                      <CiFacebook />
                      <CiInstagram />
                      <CiYoutube />
                    </div>
                    </div>
                    <div className="flex flex-col justify-between gap-3 md:gap-0 w-[100%] md:w-[50%]">
                    <h2 className="font-medium text-black">FROM ITALIAN ROOT TO GLOBAL PLATES</h2>
                    <p className="text-[#333333CC] font-serif">Born and raised in the vibrant culinary landscape of Italy, my journey with food began in the heart of my family's kitchen. Surrounded by the aroma of fresh herbs, the sizzle of pans, and the laughter of loved ones, I developed a deep appreciation for the art of cooking. My culinary education took me from the historic streets of Rome to the bustling markets of Florence, where I honed my skills and cultivated a love for the simplicity and authenticity of Italian cuisine.</p>
                  <p className="text-[#333333CC] font-serif">Driven by a relentless curiosity, I embarked on a global culinary exploration, seeking inspiration from the rich tapestry of flavors found in kitchens around the world. From the spicy markets of Marrakech to the sushi stalls of Tokyo, each experience added a unique brushstroke to my culinary canvas.</p>
                    <p className="text-[#333333CC] font-serif">Whether you're a seasoned home cook or just starting your culinary adventure, I'm delighted to have you here. Let's stir, simmer, and savor the beauty of creating something wonderful together.</p>
                  
                  <p className="text-[#333333CC] font-serif">Warmest regards,</p>
                  <p className="font-thin">Isabella Russo</p>
                  </div>
                  </div>
                  <div className=" grid grid-cols-1 md:grid-cols-4 w-[100%] my-3 gap-4">
                    
                     <img src="/about1.png"/>
                     <img src="/about2.png"/>
                     <img src="/about3.png"/>
                     <img src="/about4.png"/>
                     <img src="/about5.png"/>
                     <img src="/about6.png"/>
                     <img src="/about7.png"/>
                     <img src="/about8.png"/>


                  </div>
                </div>
            </section>
            <section >
            <div className=" border-[#2625223D] border-2 mt-3  rounded-[10px] p-3 ">
            <div className="flex flex-col">
                <div className=" md:flex md:flex-row justify-between flex flex-col">
                  <div>
                    {" "}
                    <h2 className="font-semibold text-[30px]">SIMILLAR RECIPE</h2>{" "}
                  </div>{" "}
                  <div className="flex">
                    <FaRegArrowAltCircleLeft />
                    <FaRegArrowAltCircleRight />
                  </div>
                </div>
                <div className="flex flex-col gap-10 md:flex-row">
                  <div className="bg-[#FFFBF2] rounded-[12px] md:w-[50%]">
                    <img src="/Recipe1.png" />
                    <div className="p-4">
                      <h4>Decadent Chocolate Mousse</h4>
                      <p>
                        Indulge in the rich and savory symphony of flavors with
                        our Savory Herb-Infused Chicken
                      </p>
                      <div className="flex flex-col md:fex-row justify-between">
                        <p>40 Min - easy prep - 3 serves</p>{" "}
                        <button className="border-2 rounded-[5px] bottom-6 border-[#262522CC] p-2 ">
                          view recipe
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FFFBF2] rounded-[12px] md:w-[50%] ">
                    <img src="/Recipe2.png" />
                    <div className="p-4">
                      <h4>Savory Herb-Infused Chicken</h4>
                      <p>
                        Dive into the velvety indulgence of our Decadent
                        Chocolate Mousse. A dessert that transcends sweetness!
                      </p>
                      <div className="flex flex-col md:fex-row justify-between">
                        <p>30 Min - medium prep- 4 serves</p>{" "}
                        <button className="border-2 rounded-[5px] bottom-6 border-[#262522CC] p-2 ">
                          view recipe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            </section>

          </div>
        </div>
      </section>
    </>
  );
};
export default About;
