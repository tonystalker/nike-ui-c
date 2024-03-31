import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl font-montserrat leading-normal text-slate-gray">
          (4.5)
        </p>
        <h3 className="mt-2 font-semibold text-2xl leading-normal font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat leading-normal text-21x text-coral-red">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
