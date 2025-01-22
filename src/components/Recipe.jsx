import React from "react";
import { FaClock, FaBusinessTime, FaServer } from "react-icons/fa6";
import { CiInstagram,CiFacebook, CiYoutube } from "react-icons/ci";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
const Recipe = () => {
  return (
    <>
      <section className="mx-auto w-[100%] flex items-center">
        <div className="bg-[#F0EBE1] font-montserrat px-6">
          <div className=" max-w-[100%] mx-4 pt-20">
            <div className=" border-[#2625223D] border-2 rounded-[10px] p-3 ">
              <div>
            <div className="flex flex-col items-center text-center w-[100%]  gap-4">
              <p className="bg-[#EE6352] mt-6 md:w-[10%]  w-[40%] justify-center p-2 rounded-[10px] ">
                Recipe
              </p>
              <h3 className="text-[40px] w-[100%] font-bold">
                LEMON GARLIC ROASTED CHICKEN
              </h3>
              <p className="text-[17px]  text-[#26252299] ">
                Welcome to Cooks Delight, where culinary dreams come alive!
                Today, we embark on a journey of flavors with a dish that
                promises to elevate your dining experience – our Citrus Infusion
                Delight: Lemon Garlic Roasted Chicken.
              </p>
              <div className="flex gap-4 items-center mb-5">
                <div className="flex items-center gap-1">
                  <FaClock /> 1hour
                </div>
                <div className="flex items-center gap-1">
                  <FaBusinessTime />
                  hard prep
                </div>
                <div className="flex items-center gap-1">
                  <FaServer />4 serve
                </div>
              </div>
            </div>
            </div>
            <img className="w-[100%]" src="/Recipe-hero.png" />
            <section>
              <div className="flex flex-col md:flex-row justify-between py-4 gap-6">
                <div className="text-[#333333CC] w-[100%] flex flex-col   itmes-left gap-5">
                  <p>
                    Picture succulent chicken infused with the bright notes of
                    lemon and the aromatic richness of garlic. It's a symphony
                    of flavors that will have your taste buds dancing. Join us
                    as we delve into the art of roasting and uncover the secrets
                    behind creating a masterpiece that's not just a meal but a
                    celebration of culinary craftsmanship.
                  </p>
                  <p>
                    {" "}
                    As you preheat your oven, envision the kitchen filling with
                    the tantalizing aroma of herbs and citrus, setting the stage
                    for a delightful meal that transcends the ordinary. The
                    anticipation builds as the chicken roasts to golden
                    perfection, promising a dining experience that marries
                    simplicity with sophistication. Whether you're a seasoned
                    chef or a kitchen novice, this recipe invites you to become
                    a culinary artist, creating a masterpiece that will leave a
                    lasting impression on your guests and loved ones.
                  </p>
                  <h4 className="font-bold text-black">
                    Let’s go over the basics– the do’s, and the don’ts– for How
                    to Cook a chicken
                  </h4>
                  <h5 className="text-[#EE6352] font-medium">DO`S</h5>
                  <p>
                    <span className="font-mono text-black">
                      Thoroughly Clean Hands and Surfaces:
                      <br />
                    </span>
                    Before and after handling raw chicken, ensure your hands,
                    utensils, and surfaces are clean to prevent
                    cross-contamination.
                  </p>
                  <p>
                    <span className="font-mono text-black">
                      Use Separate Cutting Boards:
                      <br />
                    </span>{" "}
                    Dedicate specific cutting boards for raw chicken to avoid
                    the spread of bacteria to other foods.
                  </p>
                  <p>
                    <span className="font-mono text-black">
                      Check Internal Temperature:
                      <br />
                    </span>{" "}
                    Invest in a reliable meat thermometer to ensure the chicken
                    reaches the safe internal temperature of 165°F (74°C).
                  </p>
                  <h5 className="text-[#EE6352] font-medium">DONT`S</h5>
                  <p>
                    <span className="font-mono text-black">
                      Thaw Chicken at Room Temperature:
                      <br />
                    </span>{" "}
                    Avoid thawing chicken on the counter. Instead, thaw it in
                    the refrigerator to prevent bacterial growth.
                  </p>
                  <p>
                    <span className="font-mono text-black">
                      Overcrowd the Pan:
                      <br />
                    </span>
                    When roasting, ensure the chicken pieces have space between
                    them for even cooking. Overcrowding can lead to unevenly
                    cooked chicken.
                  </p>
                </div>
                <div className="flex flex-col w-[100%] gap-4">
                  <div className="bg-[#FFFBF2] p-5 rounded-[12px]">
                    <h4 className="text-[#EE6352] font-medium">INGREDIENT</h4>
                    <div className=" ">
                      <p> . 1 whole chicken (about 3-4 pounds) </p>
                      <p> . 2 lemons, sliced 6 cloves garlic</p>
                      <p> . minced 2 tablespoons olive oil</p>
                      <p> . 1 teaspoon dried</p>
                      <p> . 1 teaspoon dried rosemary</p>
                      <p>. Salt and black pepper to taste</p>
                    </div>
                  </div>
                  <div className="bg-[#FFFBF2] p-5 rounded-[12px]">
                    <h4 className="text-[#EE6352] font-medium">
                      EQIPMENT NEEDED FOR PREPARATION
                    </h4>
                    <div className=" ">
                      <p> . Roasting pan </p>
                      <p> . Meat thermomete</p>
                      <p> . Cutting board</p>
                      <p> . Kitchen twine </p>
                    </div>
                  </div>
                  <div className="bg-[#FFFBF2] p-5 rounded-[12px]">
                    <h4 className="text-[#EE6352] font-medium">
                      NUTRITIONAL VALUE
                    </h4>
                    <p className="text-[#333333CC]">
                      Per serving (based on a 4-pound chicken):
                    </p>
                    <div className=" ">
                      <p> Calories: ~250</p>
                      <p> Protein: ~30g</p>
                      <p>Total Fat: ~13g</p>
                      <p> Carbohydrates: ~5g</p>
                    </div>
                  </div>
                  {/* <p  className="text-[#333333CC] w-[10%]">Note: Nutritional values are approximate and may vary based on specific ingredients and portion sizes.</p>  */}
                </div>
              </div>
            </section>
            <section>
              <div className="flex flex-row justify-between py-4 gap-6">
                <div className="text-[#333333CC] md:w-[60%] w-[100%] flex flex-col   itmes-left gap-5">
                  <h2 className="font-bold text-black text-[22px] md:text-[40px]">
                    INSTRUCTIONS
                  </h2>
                  <p>
                    This recipe goes beyond the basics, inviting you to savor
                    the richness of a creamy tomato basil sauce that clings to
                    each strand of perfectly cooked pasta. It's a celebration of
                    simplicity, where every ingredient plays a crucial role in
                    creating a dish that is as comforting as it is delightful.
                  </p>
                  <p>
                    {" "}
                    Allow the chicken to rest for 10 minutes before carving.
                    This brief resting period is essential; it allows the juices
                    to redistribute, ensuring each slice is succulent and
                    bursting with flavor. As you carve into the golden exterior,
                    be prepared for the enticing aroma that fills the air,
                    signaling that your Citrus Infusion Delight is ready to be
                    savored.{" "}
                  </p>
                  <div>
                    <h4 className="text-[#EE6352] font-medium">
                      PRE HEAT AND PREPARE
                    </h4>
                    <div className=" ">
                      <p> . Preheat your oven to 375°F (190°C). </p>
                      <p>
                        {" "}
                        . Rinse the chicken inside and out, then pat it dry with
                        paper towels.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#EE6352] font-medium">
                      CITRUS INFUSION
                    </h4>
                    <div className=" ">
                      <p>
                        {" "}
                        . Carefully lift the skin of the chicken and rub minced
                        garlic directly onto the meat.
                      </p>
                      <p>
                        {" "}
                        . Place lemon slices under the skin, ensuring they cover
                        as much surface as possible.
                      </p>
                    </div>
                  </div>
                  <img src="/recipeimg1.png" />
                  <div>
                    <h4 className="text-[#EE6352] font-medium">HERB BLEND</h4>
                    <div className=" ">
                      <p>
                        {" "}
                        . In a small bowl, mix olive oil, dried thyme, dried
                        rosemary, salt, and black pepper to create a
                        herb-infused mixture.
                      </p>
                      <p>
                        {" "}
                        .Brush the entire chicken with the herb-infused mixture,
                        making sure it's evenly coated.
                      </p>
                      <p>
                        {" "}
                        .Season the exterior with additional salt and black
                        pepper to taste.
                      </p>
                    </div>
                  </div>

                  <img src="/recipeimg2.png" />
                  <div>
                    <h4 className="text-[#EE6352] font-medium">
                      ROAST TO PERFECTION
                    </h4>
                    <div className=" ">
                      <p>
                        .Place the chicken in a roasting pan, breast side up.
                      </p>
                      <p>
                        {" "}
                        .Roast in the preheated oven for approximately 1 hour or
                        until the internal temperature reaches 165°F (74°C).
                      </p>
                      <p>
                        {" "}
                        .Allow the chicken to rest for 10 minutes before
                        carving..
                      </p>
                      <p>
                        {" "}
                        .Serve with the pan juices and roasted lemon slices for
                        an extra burst of flavor..
                      </p>
                    </div>
                  </div>

                  <img src="/recipeimg3.png" />

                  <div>
                    <h4 className="text-[#EE6352] font-medium">
                      PAIRING SUGGESTION
                    </h4>
                    <div className=" ">
                      <p>
                        {" "}
                        1. Side Dish: Serve alongside roasted vegetables or a
                        simple green salad.
                      </p>
                      <p>
                        {" "}
                        2. Wine: Pair with a crisp white wine or a light rosé
                        for a well-balanced meal.
                      </p>
                    </div>
                  </div>

                  <p>
                    {" "}
                    <span> Roasted Vegetables: </span>The vibrant flavors of the
                    roasted chicken complement beautifully with seasonal
                    vegetables.
                  </p>

                  <p>
                    {" "}
                    <span> Roasted Vegetables: </span>Herb-infused Quinoa:
                    Create a wholesome meal by serving it alongside a bed of
                    herb-infused quinoa.
                  </p>
                  <p>
                    The combination of fresh lemon and aromatic garlic creates a
                    citrus-infused masterpiece that takes the classic roast
                    chicken to a whole new level. The acidity of the lemons not
                    only adds brightness but also helps to tenderize the meat,
                    resulting in a juicy and flavorful dish. Whether you're
                    hosting a family dinner or looking for a show-stopping
                    centerpiece for a special celebration, this Lemon Garlic
                    Roasted Chicken is the answer. The simplicity of the
                    ingredients allows the natural flavors to shine, making it a
                    versatile and impressive dish.
                  </p>

                  <div  className="gap-1 text-black border-2 rounded-[10px]  border-black p-3 items-center flex flex-row">
                    <p className="">share</p>
          <CiFacebook />
            <CiInstagram />
            <CiYoutube />
           
          </div>
              
              <div className="flex m:flex-row flex-col item-left gap-3 text-[#33333399]">
                <img  className="w-[30%]" src="/Author.png" />
                <div> 
                 <h6>Isabella Russo</h6>
                 <p>In the world of pots and pans, I'm on a mission to turn every meal into a masterpiece. Cooks Delight is not just a blog; it's a shared space where the love for food transcends boundaries. Here, we celebrate the art of crafting meals that not only nourish the body but also feed the soul.</p>
                  <button className="border-2 rounded-[15px] text-black  border-[#26252229] p-2">learn more</button>
                </div>
              </div>

              
                </div>
              </div>
            </section>
            
            </div>
          
      
      <section className="my-6" >
            <div className=" border-[#2625223D] border-2 mt-3 rounded-[10px] p-3 ">
            <div className="flex flex-col">
                <div className=" md:flex md:flex-row justify-between flex flex-col">
                  <div>
                    {" "}
                    <h2 className="font-bold text-[30px]">SIMILLAR RECIPE</h2>{" "}
                  </div>{" "}
                  <div className="flex">
                    <FaRegArrowAltCircleLeft />
                    <FaRegArrowAltCircleRight />
                  </div>
                </div>
                <div className="flex flex-col gap-10 md:flex-row">
                  <div className="bg-[#FFFBF2] rounded-[12px] w-[100%]">
                    <img className="w-[100%] " src="/Recipe1.png" />
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
                  <div className="bg-[#FFFBF2] rounded-[12px] w-[100%] ">
                    <img className="w-[100%]" src="/Recipe2.png" />
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
            </div>
            </div>
            </section>

    </>
  );
};
export default Recipe;
