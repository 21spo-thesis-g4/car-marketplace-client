"use client";
import React, { useState } from "react";
import { Range } from "react-range";
import BrandModel from "./sell_cars/options/brand_model_comp";
import Types from "./sell_cars/options/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const Search: React.FC = () => {
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [mileage, setMileage] = useState([0, 500000]);
  const [price, setPrice] = useState([0, 100000]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedSubType, setSelectedSubType] = useState<string>("");

  const handleTypeChange = (typeId: string) => {
    setSelectedType(typeId);
    setSelectedSubType(""); // Nollataan subtype, kun päätyyppi vaihtuu
  };

  const handleSubTypeChange = (subTypeId: string) => {
    setSelectedSubType(subTypeId);
  };

  const years = Array.from({ length: 60 }, (_, i) => (2025 - i).toString());

  return (
    <div className="p-1 rounded-full shadow-md">
      <h1 className="text-xl font-bold">Search for a car</h1>
      
      {/* Välitetään ympäristömuuttuja `Types`-komponentille ja lisätään puuttuvat propsit */}
      <Types
        selectedType={selectedType}
        onTypeChange={handleTypeChange}
        selectedSubType={selectedSubType}
        onSubTypeChange={handleSubTypeChange}
      />

      <BrandModel />

      <div className="my-2">
        <label className="block font-semibold mb-1">Model Year</label>
        <div className="flex gap-2">
          <select
            className="select select-accent w-1/2"
            value={minYear}
            onChange={(e) => setMinYear(e.target.value)}
          >
            <option value="">Minimum</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            className="select select-accent w-1/2"
            value={maxYear}
            onChange={(e) => setMaxYear(e.target.value)}
          >
            <option value="">Maximum</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="m-4">
        <label className="block font-semibold mb-2">Mileage</label>
        <div className="text-gray-500 text-sm mb-2">
          {mileage[0].toLocaleString()} km - {mileage[1].toLocaleString()} km
        </div>
        <Range
          step={5000}
          min={0}
          max={500000}
          values={mileage}
          onChange={(values) => setMileage(values)}
          renderTrack={({ props, children }) => (
            <div {...props} className="h-2 bg-base-content rounded-full relative">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className="w-5 h-5 bg-accent rounded-full border-2 border-primary-content shadow cursor-pointer" />
          )}
        />
      </div>

      <div className="m-4">
        <label className="block font-semibold mb-2">Price</label>
        <div className="text-gray-500 text-sm mb-2">
          {price[0].toLocaleString()} € - {price[1].toLocaleString()} €
        </div>
        <Range
          step={1000}
          min={0}
          max={100000}
          values={price}
          onChange={(values) => setPrice(values)}
          renderTrack={({ props, children }) => (
            <div {...props} className="h-2 bg-base-content rounded-full relative">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className="w-5 h-5 bg-accent rounded-full border-2 border-primary-content shadow cursor-pointer" />
          )}
        />
      </div>

      <button className="btn btn-accent w-full mt-4">Search</button>
    </div>
  );
};

export default Search;
