"use client";
import React, { useEffect, useState } from "react";

interface Color {
  ColorID: number;
  Name: string;
}

interface Shade {
  ShadeID: number;
  ShadeName: string;
}

interface ColorsProps {
  selectedColor: string;
  onColorChange: (colorId: string) => void;

  selectedShade: string;
  onShadeChange: (shadeId: string) => void;

  className?: string;
}

const Colors: React.FC<ColorsProps> = ({
  selectedColor,
  onColorChange,
  selectedShade,
  onShadeChange,
  className = "",
}) => {
  const [colors, setColors] = useState<Color[]>([]);
  const [shades, setShades] = useState<Shade[]>([]);

  // Fetch color list
  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/options/colors"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Color[] = await response.json();
        setColors(data);
      } catch (error) {
        console.error("Failed to fetch colors:", error);
      }
    };

    fetchColors();
  }, []);

  // Fetch shades list
  useEffect(() => {
    const fetchColorShades = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/options/colorshades"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Shade[] = await response.json();
        setShades(data);
      } catch (error) {
        console.error("Failed to fetch color shades:", error);
      }
    };

    fetchColorShades();
  }, []);

  return (
    <div className={className}>
      {/* Select Color (controlled by parent) */}
      <div className="form-control mb-2">
        <select
          className="select select-accent w-full"
          value={selectedColor}
          onChange={(e) => {
            onColorChange(e.target.value);
            // Optionally reset shade if color changed
            onShadeChange("");
          }}
        >
          <option value="">Select Color</option>
          {colors.map((color) => (
            <option key={color.ColorID} value={color.ColorID}>
              {color.Name}
            </option>
          ))}
        </select>
      </div>

      {/* Select Shade (controlled by parent) */}
      <div className="form-control">
        <select
          className="select select-accent w-full"
          value={selectedShade}
          onChange={(e) => onShadeChange(e.target.value)}
          disabled={!selectedColor} // disable if no color selected
        >
          <option value="">Select Shade</option>
          {shades.map((shade) => (
            <option key={shade.ShadeID} value={shade.ShadeID}>
              {shade.ShadeName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Colors;
