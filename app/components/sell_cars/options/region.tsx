"use client";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface Region {
  RegionID: number;
  CountryID: number;
  Name: string;
}

interface RegionsProps {
  selectedRegion: string;
  onRegionChange: (regionId: string) => void;
  className?: string;
}

const Regions: React.FC<RegionsProps> = ({
  selectedRegion,
  onRegionChange,
  className = "",
}) => {
  const [regions, setRegions] = useState<Region[]>([]);

  // Fetch regions
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/options/regions`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Region[] = await response.json();
        setRegions(data);
      } catch (error) {
        console.error("Failed to fetch regions:", error);
      }
    };

    fetchRegions();
  }, []);

  return (
    <div className={className}>
      <div className="form-control">
        <select
          className="select select-accent w-full"
          value={selectedRegion}
          onChange={(e) => onRegionChange(e.target.value)}
        >
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

export default Regions;
