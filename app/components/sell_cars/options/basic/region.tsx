"use client";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
//const apiUrl = "http://localhost:4000";

interface Country {
  CountryID: number;
  Name: string;
}

interface Region {
  RegionID: number;
  CountryID: number;
  Name: string;
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
        const response = await fetch(
          "http://localhost:4000/api/options/countries"
        );
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
    if (!selectedCountry) return; // Don't fetch if no country is selected

    const fetchRegions = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/options/regions?countryId=${selectedCountry}`
        );

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
            onCountryChange(e.target.value);
            onRegionChange("");
          }}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.CountryID} value={country.CountryID}>
              {country.Name}
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
            <option key={region.RegionID} value={region.RegionID}>
              {region.Name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSelector;
