"use client";
import React, { useState, useEffect } from "react";

interface Colors {
  ColorID: number;
  Name: string;
}

interface ColorShades {
  ShadeID: number;
  ShadeName: string;
}

interface ColorsProps {
    className?: string; // allow parent to pass a custom class
}

const Search: React.FC<ColorsProps> = ({ className = "" }) => {
  const [colors, setcolors] = useState<Colors[]>([]);
  const [colorShades, setColorShades] = useState<ColorShades[]>([]);

  // Fetch colors
  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/options/colors");
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data: Colors[] = await response.json();
        setcolors(data);
      } catch (error) {
        console.error("Failed to fetch colors:", error);
      }
    };

    fetchColors();
  }, []);

  // Fetch color shades
  useEffect(() => {
    const fetchColorShades = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/options/colorshades");
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data: ColorShades[] = await response.json();
        setColorShades(data);
      } catch (error) {
        console.error("Failed to fetch color shades:", error);
      }
    };

    fetchColorShades();
  }, []);

  return (
    <div className={`${className}`}>
      <div className="form-control">
        <select className="select select-accent w-full">
          <option value="">Select Color</option>
          {colors.map((color) => (
            <option key={color.ColorID} value={color.ColorID}>
              {color.Name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <select className="select select-accent w-full">
          <option value="">Select Shade</option>
          {colorShades.map((colorShade) => (
            <option key={colorShade.ShadeID} value={colorShade.ShadeID}>
              {colorShade.ShadeName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Search;
