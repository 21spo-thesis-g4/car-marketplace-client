"use client";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
//const apiUrl = "http://localhost:4000";

interface Maker {
  MakeID: number;
  MakeName: string;
}

interface Model {
  ModelID: number;
  ModelName: string;
}

interface BrandModelProps {
  selectedMaker?: string;
  onMakerChange?: (makerId: string) => void;
  selectedModel?: string;
  onModelChange?: (modelId: string) => void;
  className?: string;
}

const BrandModel: React.FC<BrandModelProps> = ({
  selectedMaker,
  onMakerChange,
  selectedModel,
  onModelChange,
  className = "",
}) => {
  const [makers, setMakers] = useState<Maker[]>([]);
  const [models, setModels] = useState<Model[]>([]);

  // Fetch makers
  useEffect(() => {
    const fetchMakers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/options/makers`);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data: Maker[] = await response.json();
        setMakers(data);
      } catch (error) {
        console.error("Failed to fetch makers:", error);
      }
    };
    fetchMakers();
  }, []);

  // Fetch models when maker is selected
  useEffect(() => {
    if (!selectedMaker) return;
    const fetchModels = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/options/models/${selectedMaker}`);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data: Model[] = await response.json();
        setModels(data);
      } catch (error) {
        console.error("Failed to fetch models:", error);
      }
    };
    fetchModels();
  }, [selectedMaker]);

  return (
    <div className={`${className}`}>
      <div className="form-control w-full">
        <select
          className="select select-accent w-full"
          value={selectedMaker}
          onChange={(e) => onMakerChange && onMakerChange(e.target.value)}
        >
          <option value="">Select Brand</option>
          {makers.map((maker) => (
            <option key={maker.MakeID} value={maker.MakeID}>
              {maker.MakeName}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control w-full">
        <select
          className="select select-accent w-full"
          value={selectedModel}
          onChange={(e) => onModelChange && onModelChange(e.target.value)}
          disabled={!selectedMaker}
        >
          <option value="">Select Model</option>
          {models.map((model) => (
            <option key={model.ModelID} value={model.ModelID}>
              {model.ModelName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BrandModel;
