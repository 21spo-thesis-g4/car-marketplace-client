"use client";
import React, { useState, useEffect } from "react";

interface VehicleType {
  TypeID: number;
  TypeName: string;
}

interface SubType {
  SubTypeID: number;
  Name: string;
}

interface SearchProps {
  className?: string; // allow parent to pass a custom class
}

const Search: React.FC<SearchProps> = ({ className = "" }) => {
  const [types, setTypes] = useState<VehicleType[]>([]);
  const [subTypes, setSubTypes] = useState<SubType[]>([]);

  // Fetch vehicle types
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/options/vehicletypes");
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

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
        const response = await fetch("http://localhost:4000/api/options/subtypes");
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data: SubType[] = await response.json();
        setSubTypes(data);
      } catch (error) {
        console.error("Failed to fetch subtypes:", error);
      }
    };

    fetchSubTypes();
  }, []);

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Select Vehicle Type */}
      <div className="form-control">
        <select className="select select-accent w-full">
          <option value="">Select Type</option>
          {types.map((type) => (
            <option key={type.TypeID} value={type.TypeID}>
              {type.TypeName}
            </option>
          ))}
        </select>
      </div>

      {/* Select SubType */}
      <div className="form-control">
        <select className="select select-accent w-full">
          <option value="">Select Sub Type</option>
          {subTypes.map((subType) => (
            <option key={subType.SubTypeID} value={subType.SubTypeID}>
              {subType.Name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Search;
