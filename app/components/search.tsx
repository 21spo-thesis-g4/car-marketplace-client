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
  const [searchResults, setSearchResults] = useState<any[]>([]); // Store search results
  const [selectedMaker, setSelectedMaker] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");

  const handleTypeChange = (typeId: string) => {
    setSelectedType(typeId);
    setSelectedSubType(""); // Reset subtype when type changes
  };

  const handleSubTypeChange = (subTypeId: string) => {
    setSelectedSubType(subTypeId);
  };

  const handleMakerChange = (MakeID: string) => {
    setSelectedMaker(MakeID);
    setSelectedModel(""); // Reset model when brand changes
  };

  const handleModelChange = (ModelID: string) => {
    setSelectedModel(ModelID);
  };

  const years = Array.from({ length: 60 }, (_, i) => (2025 - i).toString());

  // Search handler
  const handleSearch = async () => {
    const response = await fetch(
      `${apiUrl}/cars/search?TypeID=${selectedType}&subType=${selectedSubType}&MakeID=${selectedMaker}&ModelID=${selectedModel}&minYear=${minYear}&maxYear=${maxYear}&minMileage=${mileage[0]}&maxMileage=${mileage[1]}&minPrice=${price[0]}&maxPrice=${price[1]}`,
      {
        method: "GET",
      }
    );
    
    if (response.ok) {
      const data = await response.json();
      setSearchResults(data); // Update state with search results
    } else {
      console.error("Error fetching search results");
    }
  };

  return (
    <div className="p-1 rounded-full shadow-md">
      <h1 className="text-xl font-bold">Search for a car</h1>
      <Types selectedType={selectedType} onTypeChange={handleTypeChange} selectedSubType={selectedSubType} onSubTypeChange={handleSubTypeChange} />
      <BrandModel selectedMaker={selectedMaker} onMakerChange={handleMakerChange} selectedModel={selectedModel} onModelChange={handleModelChange} />

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

      <button className="btn btn-accent w-full mt-4" onClick={handleSearch}>
        Search
      </button>

      <div className="mt-4">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((car, index) => (
              <li key={index}>
                {car.RegistrationNumber} - {car.Price} €
              </li>
            ))}
          </ul>
        ) : (
          <p>No cars found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
