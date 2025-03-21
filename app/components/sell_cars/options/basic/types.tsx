"use client";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface VehicleType {
  typeid: number;
  typename: string;
}

interface SubType {
  subtypeid: number;
  name: string;
}

interface SearchProps {
  selectedType: string;
  onTypeChange: (typeId: string) => void;
  selectedSubType: string;
  onSubTypeChange: (subTypeId: string) => void;
  className?: string;
}

const Types: React.FC<SearchProps> = ({
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
        const response = await fetch(`${apiUrl}/api/options/vehicletypes`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: VehicleType[] = await response.json();
        setTypes(data);
      } catch (error) {
        console.error("Failed to fetch vehicle types:", error);
      }
    };

    fetchTypes();
  }, []);

  // Fetch subtypes
  useEffect(() => {
    const fetchSubTypes = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/options/subtypes`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
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
      <div className="form-control">
        <select
          className="select select-accent w-full"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <option value="">Select Type</option>
          {types.map((type) => (
            <option key={type.typeid} value={type.typeid}>
              {type.typename}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <select
          className="select select-accent w-full"
          value={selectedSubType}
          onChange={(e) => onSubTypeChange(e.target.value)}
        >
          <option value="">Select Sub Type</option>
          {subTypes.map((subType) => (
            <option key={subType.subtypeid} value={subType.subtypeid}>
              {subType.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Types;
