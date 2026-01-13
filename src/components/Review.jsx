import image from "../assets/xaviour.jpeg";
import cus1 from "../assets/customer1.jpeg";
import cus2 from "../assets/customer2.jpeg";
import cus3 from "../assets/customer3.jpeg";
import cus4 from "../assets/customer4.jpeg";

import { REVIEW } from "../constants/index";

export const Review = () => {
  return (
    <section id="review">
      <h1 className="text-3xl lg:text-[4rem] mt-20 lg:mt-60 lg:max-w-4xl mx-auto tracking-tight lg:leading-normal leading-12 px-3 ">
        {REVIEW.content}
      </h1>
      <div className="flex items-center justify-center my-10 flex-col">
        <div className="flex gap-5 items-center">
          <div className="w-20 h-20 rounded-full border overflow-hidden">
            <img src={image} alt={REVIEW.name} className="w-full" />
          </div>
          <div>
            <h2 className="font-medium">{REVIEW.name}</h2>
            <h2 className="text-sm text-neutral-500"> {REVIEW.profession}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-15  gap-3 overflow-hidden">
          <div className="overflow-hidden group rounded-tl-3xl rounded-br-3xl ">
            <img src={cus1} alt="customer 1"  className="h-75 w-50  object-cover
            group-hover:scale-120 transition-all duration-500"/>
          </div>
          <div className="overflow-hidden group rounded-tl-3xl rounded-br-3xl">
            <img src={cus2} alt="customer 2" className="h-75 w-50  object-cover
            group-hover:scale-120 transition-all duration-500" />
          </div>
          <div className="overflow-hidden group rounded-tr-3xl rounded-bl-3xl">
            <img src={cus3} alt="customer 3" className="h-75 w-50  object-cover
            group-hover:scale-120 transition-all duration-500" />
          </div>
          <div className="overflow-hidden group rounded-tr-3xl rounded-bl-3xl">
            <img src={cus4} alt="customer 4"  className="h-75 w-50  object-cover group-hover:scale-120 transition-all duration-500"/>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
