import React from "react";
import Basic from "../components/sell_cars/basic_information";

function New_Listing() {
  return (
    <div>
      <div className="max-w-5xl mx-auto card bg-base-100 shadow-md p-2">
        <h1 className="text-3xl font-bold">Leave a listing</h1>
        <p className="text-md mt-2">
          {" "}
          Listing is free of charge for individuals.
        </p>
      </div>
      <Basic />
    </div>
  );
}

export default New_Listing;
