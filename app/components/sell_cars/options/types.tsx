"use client";
import React, { useEffect, useState } from "react";

interface VehicleType {
  TypeID: number;
  TypeName: string;
}

interface SubType {
  SubTypeID: number;
  Name: string;
}

interface SearchProps {
  selectedType: string;
  onTypeChange: (typeId: string) => void;

  selectedSubType: string;
  onSubTypeChange: (subTypeId: string) => void;

  className?: string;
}

const Search: React.FC<SearchProps> = ({
  selectedType,
  onTypeChange,
  selectedSubType,
  onSubTypeChange,
  className = "",
}) => {
  const [types, setTypes] = useState<VehicleType[]>([]);
  const [subTypes, setSubTypes] = useState<SubType[]>([]);

  // Fetch vehicle types
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/options/vehicletypes"
        );
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
        const response = await fetch(
          "http://localhost:4000/api/options/subtypes"
        );
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
    <div className={className}>
      {/* Select Type (fully controlled by parent) */}
      <div className="form-control mb-2">
        <select
          className="select select-accent w-full"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <option value="">Select Type</option>
          {types.map((type) => (
            <option key={type.TypeID} value={type.TypeID}>
              {type.TypeName}
            </option>
          ))}
        </select>
      </div>

      {/* Select SubType (fully controlled by parent) */}
      <div className="form-control">
        <select
          className="select select-accent w-full"
          value={selectedSubType}
          onChange={(e) => onSubTypeChange(e.target.value)}
          disabled={!selectedType} // disable if no type selected
        >
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
