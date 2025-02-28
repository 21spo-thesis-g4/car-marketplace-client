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

interface City {
  cityid: number;
  regionid: number;
  name: string;
}

interface LocationProps {
  selectedCountry: string;
  onCountryChange: (countryId: string) => void;
  selectedRegion: string;
  onRegionChange: (regionId: string) => void;
  selectedCity: string;
  onCityChange: (cityId: string) => void;
  className?: string;
}

const LocationSelector: React.FC<LocationProps> = ({
  selectedCountry,
  onCountryChange,
  selectedRegion,
  onRegionChange,
  selectedCity,
  onCityChange,
  className = "",
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [cities, setCities] = useState<City[]>([]);

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

  // Fetch cities based on selected region
  useEffect(() => {
    if (!selectedRegion) return;

    const fetchCities = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/options/cities?regionid=${selectedRegion}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: City[] = await response.json();
        console.log("Fetched cities:", data);
        setCities(data);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };

    fetchCities();
  }, [selectedRegion]);

  return (
    <div className={className}>
      {/* Country Selection */}
      <div className="form-control">
        <select
          className="select select-accent w-full"
          value={selectedCountry}
          onChange={(e) => {
            const newCountry = e.target.value;
            if (newCountry !== selectedCountry) {
              onCountryChange(newCountry);
              onRegionChange(""); // Reset region when country changes
              onCityChange(""); // Reset city when country changes
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

      {/* Region Selection */}
      <div className="form-control mt-2">
        <select
          className="select select-accent w-full"
          value={selectedRegion}
          onChange={(e) => {
            onRegionChange(e.target.value);
            onCityChange(""); // Reset city when region changes
          }}
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

      {/* City Selection */}
      <div className="form-control mt-2">
        <select
          className="select select-accent w-full"
          value={selectedCity}
          onChange={(e) => onCityChange(e.target.value)}
          disabled={!selectedRegion}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.cityid} value={city.cityid}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSelector;
