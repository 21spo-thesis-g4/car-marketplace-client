"use client";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
//const apiUrl = "http://localhost:4000";

interface Transmission {
  TransmissionID: number;
  Name: string;
}

interface TransmissionProps {
  selectedTransmission: string;
  onTransmissionChange: (transmissionId: string) => void;
  className?: string;
}

const Transmission: React.FC<TransmissionProps> = ({
  selectedTransmission,
  onTransmissionChange,
  className = "",
}) => {
  const [transmission, setTransmission] = useState<Transmission[]>([]);

  // Fetch transmission types
  useEffect(() => {
    const fetchTransmissionTypes = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/options/transmission`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Transmission[] = await response.json();
        setTransmission(data);
      } catch (error) {
        console.error("Failed to fetch transmission types:", error);
      }
    };

    fetchTransmissionTypes();
  }, []);

  return (
    <div className={className}>
      <div className="form-control">
        <select
          className="select select-accent w-full"
          value={selectedTransmission}
          onChange={(e) => onTransmissionChange(e.target.value)}
        >
          <option value="">Select Transmission Type</option>
          {transmission.map((transmission) => (
            <option key={transmission.TransmissionID} value={transmission.TransmissionID}>
              {transmission.Name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Transmission;
