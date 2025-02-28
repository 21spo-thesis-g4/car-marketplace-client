"use client";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface Country {
  countryid: number;
  name: string;
}

interface Region {
  regionid: number;
  countryid: number;
  name: string;
}

interface LocationProps {
  selectedCountry: string;
  onCountryChange: (countryId: string) => void;
  selectedRegion: string;
  onRegionChange: (regionId: string) => void;
  className?: string;
}

const LocationSelector: React.FC<LocationProps> = ({
  selectedCountry,
  onCountryChange,
  selectedRegion,
  onRegionChange,
  className = "",
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/options/countries`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Country[] = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Fetch regions based on selected country
  useEffect(() => {
    if (!selectedCountry) return;

    const fetchRegions = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/options/regions?countryid=${selectedCountry}`);

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
  }, [selectedCountry]);

  return (
    <div className={className}>
      <div className="form-control">
        <select
          className="select select-accent w-full"
          value={selectedCountry}
          onChange={(e) => {
            const newCountry = e.target.value;
            if (newCountry !== selectedCountry) {
              onCountryChange(newCountry);
              onRegionChange(""); // Tyhjennetään vain, jos maa vaihtuu
            }
          }}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.countryid} value={country.countryid}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control mt-2">
        <select
          className="select select-accent w-full"
          value={selectedRegion}
          onChange={(e) => onRegionChange(e.target.value)}
          disabled={!selectedCountry}
        >
          <option value="">Select Region</option>
          {regions.map((region) => (
            <option key={region.regionid} value={region.regionid}>
              {region.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSelector;
