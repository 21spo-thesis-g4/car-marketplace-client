"use client";
import React, { useState, useEffect } from "react";
import { Range } from 'react-range';

interface VehicleType {
  TypeID: number;
  TypeName: string;
}

interface SubType {
  SubTypeID: number;
  Name: string;
}

interface Maker {
  MakeID: number;
  MakeName: string;
}

interface Model {
  ModelID: number;
  ModelName: string;
}

const Search: React.FC = () => {
  const [types, setTypes] = useState<VehicleType[]>([]);
  const [subTypes, setSubTypes] = useState<SubType[]>([]);
  const [makers, setMakers] = useState<Maker[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [mileage, setMileage] = useState([0, 500000]);
  const [price, setPrice] = useState([0, 100000]);

  const [selectedMaker, setSelectedMaker] = useState<string>("");

  const years = Array.from({ length: 60 }, (_, i) => (2025 - i).toString());

  // Fetch vehicle types
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/options/vehicletypes");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data: VehicleType[] = await response.json();
        setTypes(data);
      } catch (error) {
        console.error("Failed to fetch vehicle types:", error);
      }
    };

    fetchTypes();
  }, []);

  // Fetch sub types
  useEffect(() => {
    const fetchSubTypes = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/options/subtypes`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data: SubType[] = await response.json();
        setSubTypes(data);
      } catch (error) {
        console.error("Failed to fetch subtypes:", error);
      }
    };

    fetchSubTypes();
  }, []);

  // Fetch makers
  useEffect(() => {
    const fetchMakers = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/options/makers");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data: Maker[] = await response.json();
        setMakers(data);
      } catch (error) {
        console.error("Failed to fetch makers:", error);
      }
    };

    fetchMakers();
  }, []);

  // Fetch models
  useEffect(() => {
    if (!selectedMaker) return;

    const fetchModels = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/options/models/${selectedMaker}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data: Model[] = await response.json();
        setModels(data);
      } catch (error) {
        console.error("Failed to fetch models:", error);
      }
    };

    fetchModels();
  }, [selectedMaker]);
  
  return (
    <div className="p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Search for a car</h1>
        <div className="form-control">
            <select className="select select-bordered">
            <option value="">Select Type</option>
                {types.map((type) => (
                <option key={type.TypeID} value={type.TypeID}>
                    {type.TypeName}
                </option>
                ))}
            </select>
        </div>

        <div className="form-control">
            <select className="select select-bordered">
            <option value="">Select Sub Type</option>
                {subTypes.map((subType) => (
                <option key={subType.SubTypeID} value={subType.SubTypeID}>
                    {subType.Name}
                </option>
                ))}
            </select>
        </div>

        <div className="form-control">
            <select
                className="select select-bordered"
                value={selectedMaker}
                onChange={(e) => setSelectedMaker(e.target.value)}
            >
                <option value="">Select Brand</option>
                {makers.map((maker) => (
                <option key={maker.MakeID} value={maker.MakeID}>
                    {maker.MakeName}
                </option>
                ))}
            </select>
        </div>

        <div className="form-control">
            <select className="select select-bordered" disabled={!selectedMaker}>
                <option value="">Select Model</option>
                {models.map((model) => (
                <option key={model.ModelID} value={model.ModelID}>
                    {model.ModelName}
                </option>
                ))}
            </select>
        </div>

        <div className="mb-4">
            <label className="block font-semibold mb-1">Model Year</label>
            <div className="flex gap-2">
                <select className="select select-bordered w-1/2" value={minYear} onChange={(e) => setMinYear(e.target.value)}>
                    <option value="">Minimum</option>
                    {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <select className="select select-bordered w-1/2" value={maxYear} onChange={(e) => setMaxYear(e.target.value)}>
                    <option value="">Maximum</option>
                    {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
        </div>

        <div className="mb-6">
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
            renderThumb={({ props, index }) => (
                <div
                {...props}
                className="w-5 h-5 bg-primary rounded-full border-2 border-primary-content shadow cursor-pointer"
                />
            )}
            />
        </div>

        <div className="mb-6">
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
            renderThumb={({ props, index }) => (
            <div
                {...props}
                className="w-5 h-5 bg-primary rounded-full border-2 border-primary-content shadow cursor-pointer"
            />
            )}
        />
        </div>

        <button className="btn btn-primary w-full mt-4">Search</button>
    </div>
  );
};

export default Search;
