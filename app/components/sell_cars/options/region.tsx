"use client";
import React, { useState, useEffect } from "react";

interface Region {
  RegionID: number;
  CountryID: number;
  Name: string;
}

interface RegionsProps {
  className?: string; // allow parent to pass a custom class
}

const Search: React.FC<RegionsProps> = ({ className = "" }) => {
  const [regions, setRegions] = useState<Region[]>([]);

  // Fetch regions
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/options/regions"
        );
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data: Region[] = await response.json();
        setRegions(data);
      } catch (error) {
        console.error("Failed to fetch regions:", error);
      }
    };

    fetchRegions();
  }, []);

  return (
    <div className={`${className}`}>
      <div className="form-control">
        <select className="select select-accent w-full">
          <option value="">Select Region</option>
          {regions.map((region) => (
            <option key={region.RegionID} value={region.RegionID}>
              {region.Name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Search;
