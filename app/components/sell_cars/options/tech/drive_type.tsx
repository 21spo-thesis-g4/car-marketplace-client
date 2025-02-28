"use client";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface DriveType {
  drivetypeid: number;
  name: string;
}

interface DriveProps {
  selectedDriveType: string;
  onDriveTypeChange: (driveTypeId: string) => void;
  className?: string;
}

const DriveTypes: React.FC<DriveProps> = ({
  selectedDriveType,
  onDriveTypeChange,
  className = "",
}) => {
  const [driveTypes, setDriveTypes] = useState<DriveType[]>([]);

  // Fetch drive types
  useEffect(() => {
    const fetchDriveTypes = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/options/drivetypes`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: DriveType[] = await response.json();
        setDriveTypes(data);
      } catch (error) {
        console.error("Failed to fetch drive types:", error);
      }
    };

    fetchDriveTypes();
  }, []);

  return (
    <div className={className}>
      <div className="form-control">
        <select
          className="select select-accent w-full"
          value={selectedDriveType}
          onChange={(e) => onDriveTypeChange(e.target.value)}
        >
          <option value="">Select Drive Type</option>
          {driveTypes.map((drive) => (
            <option key={drive.drivetypeid} value={drive.drivetypeid}>
              {drive.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DriveTypes;
