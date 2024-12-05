import React from "react";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
const Home = () => {
  return (
    <>
      <section className="bg-[#F0EBE1] px-6">
        <div className="mx-auto max-w-[1200px] pt-20">
          <div className="">
            <section className=" mx-auto  ">
              <div
                className="bg-no-repeat  rounded-2xl"
                style={{
                  backgroundImage: "url('/hero-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <div className=" flex flex-col items-center mx-4">
                  <div className=" flex md:w-[45%] p-6 flex-col justify-center gap-3 items-center">
                    <h1 className=" text-[#F0EBE1] text-center text-[45px] items-center">
                      Unleash Culinary Excellence{" "}
                    </h1>
                    <p className="text-[#F0EBE1] text-[16px] items-center text-center">
                      Explore a world of flavors, discover handcrafted recipes,
                      and let the aroma of our passion for cooking fill your
                      kitchen
                    </p>
                    <a href="/Recipe">
                      <button className=" bg-[#F29C33] rounded-[10px] text-black p-3">
                        explore recipe
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="mx-auto w-[100%] flex items-center ">
            <div className="bg-[#C4E5FC] rounded-sm my-3 md:p-5  p-6 ">
              <div className="md:flex  md:flex-row md:text-center   flex flex-col gap-5  items-left justify-between  ">
                <div className=" md:mt-20 md:w-[40%] flex  flex-col gap-2  text-left  m-3 ">
                  <p className="bg-[#EE6352] mt-6 md:w-[17%]  w-[25%] justify-center p-2 rounded-[10px] ">
                    explore
                  </p>
                  <h3 className="text-[30px]">Our diverse Palette</h3>
                  <p className="text-[17px] text-[#262522CC] ">
                    If you are a breakfast enthusiast, a connoisseur of savory
                    delights, or on the lookout for irresistible desserts, our
                    curated selection has something to satisfy every palate.
                  </p>
                  <div>
                    <button className="border-2  rounded-[5px] bottom-6 border-[#262522CC] p-2 ">
                      show more
                    </button>
                  </div>
                </div>
                <div className=" flex  flex-col md:w-[40%]  gap-5">
                  <div className="flex justify-between  border border-b-black text-[#000000]">
                    {" "}
                    <img src="/bf.png" />
                    <p>BREAKFAST</p>{" "}
                  </div>
                  <div className="flex justify-between border border-b-black text-[#000000]">
                    <img src="/lunch.png" /> <p>LUNCH</p>
                  </div>
                  <div className="flex justify-between border border-b-black text-[#000000]">
                    <img src="/dinner.png" /> <p>DINNER</p>
                  </div>
                  <div className="flex justify-between   border border-b-black text-[#000000]">
                    <img src="/desert.png" /> <p>DESERT</p>
                  </div>
                  <div className="flex justify-between  border border-b-black text-[#000000]">
                    <img src="/qb.png" /> <p>QUICK BITE</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mx-auto w-[100%]">
            <div className="border-2 rounded-[10px] border-[#26252229] my-3 md:p-5  p-2">
              <div className="flex flex-col">
                <div className=" md:flex md:flex-row justify-between flex flex-col">
                  <div>
                    {" "}
                    <h2>FEATURED RECIPE</h2>{" "}
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
          <section className="m-3">
            <div className="flex flex-col justify-center items-center text-center gap-3">
              <div className="flex flex-col justify-center items-center">
                <p className="bg-[#EE6352] mt-6 text-center justify-center p-2 rounded-[10px] ">
                  Recipes
                </p>
                <h2 className="text-[30px]">EMBARK ON A JOURNEY</h2>
                <p className="text-[17px] text-[#262522CC] ">
                  With our diverse collection of recipes we have something to
                  satisfy every palate.{" "}
                </p>
              </div>
              <div className=" md:flex md:flex-row text-center grid  grid-cols-3 gap-4 justify-center">
                <button className="border-2  rounded-[5px]  text-[#262522CC]bottom-6 border-[#4f4f4ccc] p-2 ">
                  ALL
                </button>
                <button className="border-2  rounded-[5px] text-[#262522CC] bottom-6 border-[#4f4f4ccc] p-2 ">
                  VEGAN
                </button>
                <button className="border-2  rounded-[5px] text-[#262522CC] bottom-6 border-[#4f4f4ccc] p-2 ">
                  BREAKFAST
                </button>
                <button className="border-2  rounded-[5px] text-[#262522CC] bottom-6 border-[#4f4f4ccc] p-2 ">
                  LUNCH
                </button>
                <button className="border-2  rounded-[5px] text-[#262522CC] bottom-6 border-[#4f4f4ccc] p-2 ">
                  DINNER
                </button>
                <button className="border-2  rounded-[5px] text-[#262522CC] bottom-6 border-[#6c6c61cc] p-2 ">
                  DESERT
                </button>
                <button className="border-2  rounded-[5px] text-[#262522CC] bottom-6 border-[#4f4f4ccc] p-2 ">
                  QUICKBITE!
                </button>
              </div>
              <div className="flex flex-col md:flex-row justify-evenly  gap-7 group">
                <div className="bg-[#FFFBF2] rounded-[12px]  ">
                  <img src="/Recipe3.png" />
                  <div className="p-4 ">
                    <h4 className="font-bold text-left py-2">
                      Decadent Chocolate Mousse
                    </h4>
                    <p className="text-left pb-3">
                      Indulge in the rich and savory symphony of flavors with
                      our Savory Herb-Infused Chicken
                    </p>
                    <div className="flex justify-between mt-7 font-semibold">
                      <p>40 Min - easy prep - 3 serves</p>{" "}
                      <button className="border-2 rounded-[15px] bottom-6 border-[#262522CC] p-2 ">
                        view recipe
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFFBF2] rounded-[12px] ">
                  <img className="w-[100%] h-[50%]" src="/Recipe1.png" />
                  <div className="p-4">
                    <h4 className="font-bold text-left py-2">
                      Lemon Garlic Grilled Chicken
                    </h4>
                    <p className="text-left pb-3">
                      Indulge in the rich and savory symphony of flavors with
                      our Savory Herb-Infused Chicken
                    </p>
                    <div className="flex justify-between  mt-7 font-semibold">
                      <p>40 Min - easy prep - 3 serves</p>{" "}
                      <button className="border-2 rounded-[15px] bottom-6 border-[#262522CC] p-2 ">
                        view recipe
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFFBF2] rounded-[12px] ">
                  <img className="w-[100%] h-[50%] " src="/Recipe2.png" />
                  <div className="p-4">
                    <h4 className="font-bold text-left py-2">
                      Decadent Chocolate Mousse
                    </h4>
                    <p className="text-left pb-3">
                      Indulge in the rich and savory symphony of flavors with
                      our Savory Herb-Infused Chicken
                    </p>
                    <div className="flex justify-between  mt-7 font-semibold">
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
                  <img className="h-[50%]" src="/Recipe4.png" />
                  <div className="p-4 ">
                    <h4 className="font-bold text-left py-2">
                      Decadent Chocolate Mousse
                    </h4>
                    <p className="text-left pb-3">
                      Indulge in the rich and savory symphony of flavors with
                      our Savory Herb-Infused Chicken
                    </p>
                    <div className="flex justify-between mt-7 font-semibold">
                      <p>40 Min - easy prep - 3 serves</p>{" "}
                      <button className="border-2 rounded-[15px] bottom-6 border-[#262522CC] p-2 ">
                        view recipe
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFFBF2] rounded-[12px] ">
                  <img className="h-[50%]" src="/Recipe5.png" />
                  <div className="p-4">
                    <h4 className="font-bold text-left py-2">
                      Lemon Garlic Grilled Chicken
                    </h4>
                    <p className="text-left pb-3">
                      Indulge in the rich and savory symphony of flavors with
                      our Savory Herb-Infused Chicken
                    </p>
                    <div className="flex justify-between  mt-7 font-semibold">
                      <p>40 Min - easy prep - 3 serves</p>{" "}
                      <button className="border-2 rounded-[15px] bottom-6 border-[#262522CC] p-2 ">
                        view recipe
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFFBF2] rounded-[12px]  ">
                  <img className="h-[50%]" src="/Recipe6.png" />
                  <div className="p-4">
                    <h4 className="font-bold text-left py-2">
                      Decadent Chocolate Mousse
                    </h4>
                    <p className="text-left pb-3">
                      Indulge in the rich and savory symphony of flavors with
                      our Savory Herb-Infused Chicken
                    </p>
                    <div className="flex justify-between  mt-7 font-semibold">
                      <p>40 Min - easy prep - 3 serves</p>{" "}
                      <button className="border-2 rounded-[15px] bottom-6 border-[#262522CC] p-2 ">
                        view recipe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mx-3 ">
            <div className="border-2 rounded-[10px] border-[#26252229] mt-3 pb-3 md:p-5  p-3">
              <div className="flex flex-col md:flex md:flex-row justify-between gap-4 items-left md:items-center">
                <div className="flex flex-col gap-4 w-[70%]">
                  <div className=" flex flex-col md:flex md:flex-row gap-4 items-center">
                    <div className="md:w-[50%] w-[100%] flex flex-col gap-4">
                      <p className="bg-[#EE6352] text-white md:w-[27%] w-[30%] justify-center p-2 rounded-[10px] ">
                        About Us
                      </p>
                      <h2 className="font-bold">OUR CULINARY CHRONICLES</h2>
                      <p className="text-[#262522CC]">
                        Our journey is crafted with dedication, creativity, and
                        an unrelenting commitment to delivering delightful
                        culinary experiences. Join us in savoring the essence of
                        every dish and the stories that unfold.
                      </p>
                      <button className="border-2 rounded-[15px] md:w-[30%] w-[40%] border-[#26252229] p-2">
                        Read more
                      </button>
                    </div>
                    <div>
                      <img src="/Recipe-Card1.png" />
                    </div>
                  </div>
                  <img src="/Recipe-Card2.png" />
                </div>
                <div>
                  <img src="/Recipe-Card3.png" />{" "}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default Home;
