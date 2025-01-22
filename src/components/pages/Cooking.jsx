import React from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
const Cooking = () => {
  return (
    <>
      <section className="mx-auto w-[100%] flex items-center">
        <div className="bg-[#F0EBE1] px-6">
          <div className=" max-w-[100%] mx-4 pt-20">
            <div className="flex flex-col items-left md:flex-row justify-between md:items-center">
              <div>
                <h2 className="font-bold text-[30px]  w-[100%] md:text-[60px] ">
                  OUR ESSENTIAL COOKING TIPS
                </h2>
              </div>
              <div className="">
                <p className=" text-left md:text-right">
                  Welcome to Cooks Delight's treasure trove of cooking wisdom!
                  Whether you're a seasoned chef or just starting your culinary
                  journey, our cooking tips are designed to elevate your skills,
                  enhance your kitchen experience, and bring joy to your cooking
                  adventures.
                </p>
              </div>
            </div>

            <div className=" border-[#2625223D] my-6 border-2 rounded-[10px] p-3 ">
              <div className="flex flex-col  gap-2  md:flex-row">
                <div className="flex item-left gap-6 text-[#33333399]">
                  <img className="w-[15%]"  src="/cook-icon1.png" />
                  <div>
                    <h6 className="text-[#EE6352]">COOKING TOOLS</h6>
                    <p>
                      {" "}
                      Invest in high-quality knives, cutting boards, and cookware.
                    </p>
                  </div>
                </div>

                <div className="flex item-left gap-3 text-[#33333399]">
                  <img className="w-[20%]" src="/cook-icon2.png" />
                  <div>
                    <h6 className="text-[#EE6352]">ESSENTIAL UITENSIL</h6>
                    <p>
                    Have a variety of utensils, including spatulas, tongs, and ladles.
                    </p>
                  
                  </div>
                </div>

                <div className="flex item-left gap-3 text-[#33333399]">
                  <img className="w-[20%]" src="/cook-icon3.png" />
                  <div>
                    <h6 className="text-[#EE6352]">MESURING ACCURACY</h6>
                    <p>
                    Use measuring cups and spoons for precise ingredient quantities.
                    </p>
                   
                  </div>
                </div>
              </div>
              </div>
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
                    <div className="p-4 flex flex-col gap-2">
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
                    <div className="p-4 flex flex-col gap-2">
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

            <section>
            <div className="flex flex-col md:flex-row  gap-7  my-3 items-center group ">
                <div className="bg-[#FFFBF2] rounded-[12px]  ">
                  <img src="/cook1.png" />
                  <div className="p-4 ">
                    <h4 className="font-bold text-left py-2">
                      KNIFE SKILLS
                    </h4>
                    <p className="text-left pb-3">
                    Unlock the art of precision in your kitchen with proper chopping, dicing, and slicing techniques. Elevate your culinary creations to new heights.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between mt-7 font-semibold">
                      <p>40 Min - easy prep - 3 serves</p>{" "}
                      <button className="border-2 rounded-[15px] bottom-6 border-[#262522CC] p-2 ">
                        view recipe
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFFBF2] rounded-[12px] ">
                  <img className="" src="/cook2.png" />
                  <div className="p-4">
                    <h4 className="font-bold text-left py-2">
                     SAULTING AND SEARING
                    </h4>
                    <p className="text-left pb-3">
                    Achieve the perfect sear and elevate flavors in your dishes. Learn the secrets to sautéing like a pro and creating irresistible textures.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between  mt-7 font-semibold">
                      <p>40 Min - easy prep - 3 serves</p>{" "}
                      <button className="border-2 rounded-[15px] bottom-6 border-[#262522CC] p-2 ">
                        view recipe
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFFBF2] rounded-[12px] ">
                  <img className="w-[100%] h-[160px] " src="/cook3.png" />
                  <div className="p-4">
                    <h4 className="font-bold text-left py-2">
                     ROASTING TIPS
                    </h4>
                    <p className="text-left pb-3">
                    Ensure even cooking and unlock flavorful results with our expert roasting tips. From golden vegetables to succulent meats, master the art of roasting.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between  mt-7 font-semibold">
                      <p>40 Min - easy prep - 3 serves</p>{" "}
                      <button className="border-2 rounded-[15px] bottom-6 border-[#262522CC] p-2 ">
                        view recipe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row  gap-7 group">
                <div className="bg-[#FFFBF2] rounded-[12px] ">
                  <img className="w-[100%] h-[50%]" src="/cook4.png" />
                  <div className="p-4 ">
                    <h4 className="font-bold text-left py-2">
                     PREP STATION
                    </h4>
                    <p className="text-left pb-3">
                    Efficiently organize your kitchen space for chopping, mixing, and cooking. Elevate your efficiency in the heart of your culinary domain.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between mt-7 font-semibold">
                      <p>40 Min - easy prep - 3 serves</p>{" "}
                      <button className="border-2 rounded-[15px] bottom-6 border-[#262522CC] p-2 ">
                        view recipe
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFFBF2] rounded-[12px] ">
                  <img className="h-[50%]" src="/cook5.png" />
                  <div className="p-4">
                    <h4 className="font-bold text-left py-2">
                      CLEANING AS YOU GO
                    </h4>
                    <p className="text-left pb-3">
                    Maintain a tidy kitchen for stress-free cooking. Learn the art of cleaning as you go, turning every culinary endeavor into a seamless experience.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between  mt-7 font-semibold">
                      <p>40 Min - easy prep - 3 serves</p>{" "}
                      <button className="border-2 rounded-[15px] bottom-6 border-[#262522CC] p-2 ">
                        view recipe
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFFBF2] rounded-[12px]  ">
                  <img className="h-[50%]" src="/cook6.png" />
                  <div className="p-4">
                    <h4 className="font-bold text-left py-2">
                      RECIPE MODIFICATION
                    </h4>
                    <p className="text-left pb-3">
                    Feel confident modifying recipes to suit your taste. Explore the art of culinary creativity in crafting dishes uniquely your own.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between  mt-7 font-semibold">
                      <p>40 Min - easy prep - 3 serves</p>{" "}
                      <button className="border-2 rounded-[15px] bottom-6 border-[#262522CC] p-2 ">
                        view recipe
                      </button>
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
export default Cooking;
