import React from "react";
import Basic from "../components/sell_cars/basic_information";
import Technical from "../components/sell_cars/tech_information";
import PriceLocation from "../components/sell_cars/price_location";
import Image from "../components/sell_cars/image";

function New_Listing() {
  return (
    <div>
      <div className="max-w-5xl mx-auto card bg-base-100 shadow-md p-2">
        <h1 className="text-4xl font-bold">Leave listing</h1>
        <p className="text-lg mt-2">
          {" "}
          Listing is free of charge for individuals.
        </p>
      </div>
      <Basic />
      <Technical />
      <PriceLocation />
      <Image />
    </div>
  );
}

export default New_Listing;
