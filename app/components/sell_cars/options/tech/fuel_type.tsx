"use client";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface FuelType {
  fueltypeid: number;
  name: string;
}

interface FuelProps {
  selectedFuelType: string;
  onFuelTypeChange: (fuelTypeId: string) => void;
  className?: string;
}

const FuelTypes: React.FC<FuelProps> = ({
  selectedFuelType,
  onFuelTypeChange,
  className = "",
}) => {
  const [fuelTypes, setFuelTypes] = useState<FuelType[]>([]);

  // Fetch fuel types
  useEffect(() => {
    const fetchFuelTypes = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/options/fueltypes`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: FuelType[] = await response.json();
        setFuelTypes(data);
      } catch (error) {
        console.error("Failed to fetch fuel types:", error);
      }
    };

    fetchFuelTypes();
  }, []);

  return (
    <div className={className}>
      <div className="form-control">
        <select
          className="select select-accent w-full"
          value={selectedFuelType}
          onChange={(e) => onFuelTypeChange(e.target.value)}
        >
          <option value="">Select Fuel Type</option>
          {fuelTypes.map((fuel) => (
            <option key={fuel.fueltypeid} value={fuel.fueltypeid}>
              {fuel.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FuelTypes;
