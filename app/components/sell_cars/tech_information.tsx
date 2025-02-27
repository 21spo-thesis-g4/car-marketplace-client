"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FuelTypes from "./options/tech/fuel_type";
import DriveTypes from "./options/tech/drive_type";
import Transmission from "./options/tech/transmission";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://localhost:4000";
//const API_URL = "http://localhost:4000";

const TechnicalInformationForm: React.FC = () => {
  const router = useRouter();
  const [userID, setUserID] = useState<number | null>(null);
  const [mileage, setMileage] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [selectedDriveType, setSelectedDriveType] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [gearboxType, setGearboxType] = useState("");
  const [noOfPersons, setNoOfPersons] = useState("");
  const [noOfDoors, setNoOfDoors] = useState("");
  const [power, setPower] = useState("");
  const [fuelConsumption, setFuelConsumption] = useState<{
    [key: string]: number | null;
  }>({
    urban: null,
    road: null,
    combined: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserID = localStorage.getItem("userID");

    if (!token) {
      router.push("/profile");
      return;
    }

    if (storedUserID) {
      setUserID(parseInt(storedUserID));
    }
  }, []);

  const handleFuelTypeChange = (fuelTypeId: string) => {
    setSelectedFuelType(fuelTypeId);
  };

  const handleDriveTypeChange = (driveTypeId: string) => {
    setSelectedDriveType(driveTypeId);
  };

  const handleTransmisssionChange = (transmissionId: string) => {
    setSelectedTransmission(transmissionId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      CarID: 123,
      Mileage: 50000,
      EngineCapacity: 2.0,
      Power: 150,
      Torque: 300,
      TopSpeed: 220,
      Acceleration: 7.5,
      CO2Emissions: 120,
      FuelConsumptionCity: 8.5,
      FuelConsumptionHighway: 5.2,
      FuelConsumptionCombined: 6.5,
      MassEmpty: 1400,
      MassTotal: 1900,
      TowCapacityBraked: 1500,
      TowCapacityUnbraked: 750,
      SeatingCapacity: 5,
      DoorCount: 4,
      SteeringSide: "Left",
      FuelTypeID: 1,
      DriveTypeID: 2,
      TransmissionID: 1,
    };
  };

  return (
    <div className="max-w-5xl mx-auto bg-base-100 shadow-md p-4">
      <h2 className="text-md font-bold border-b pb-2 mb-4">
        Technical Information
      </h2>

      <form className="space-y-4 max-w-3xl mx-auto">
        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            Mileage (driven km) *
          </label>
          <input
            type="number"
            className="input input-accent w-full"
            placeholder="Enter mileage"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="min-w-[12rem] font-semibold text-right">
            Fuel type *
          </div>
          <FuelTypes
            className="flex-1"
            selectedFuelType={selectedFuelType}
            onFuelTypeChange={handleFuelTypeChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="min-w-[12rem] font-semibold text-right">
            Drive type *
          </div>
          <DriveTypes
            className="flex-1"
            selectedDriveType={selectedDriveType}
            onDriveTypeChange={handleDriveTypeChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="min-w-[12rem] font-semibold text-right">
            Transmission *
          </div>
          <Transmission
            className="flex-1"
            selectedTransmission={selectedTransmission}
            onTransmissionChange={handleTransmisssionChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            Engine Size *
          </label>
          <select className="select select-accent w-full">
            <option>Select Engine size</option>
            <option>1.0L</option>
            <option>1.6L</option>
            <option>2.0L</option>
            <option>3.0L</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            No. of persons
          </label>
          <select className="select select-accent w-full">
            <option>Select No. of persons</option>
            {[...Array(10)].map((_, i) => (
              <option key={i}>{i + 1}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            No. of doors
          </label>
          <select className="select select-accent w-full">
            <option>Select No. of doors</option>
            {[2, 3, 4, 5].map((num) => (
              <option key={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            Power
          </label>
          <input
            type="number"
            className="input input-accent w-full"
            placeholder="Enter power"
          />
        </div>

        <h3 className="font-semibold text-center mt-4">Fuel Consumption</h3>
        {["urban", "road", "combined"].map((type) => (
          <div key={type} className="flex items-center gap-4">
            <label className="min-w-[12rem] font-semibold text-right">
              {type.charAt(0).toUpperCase() + type.slice(1)} (L/100km)
            </label>
            <input
              type="number"
              className="input input-accent w-full"
              placeholder="Enter fuel consumption"
            />
          </div>
        ))}

        <h3 className="text-center font-semibold mt-4 ">
          Weight (Check your car registration certificate)
        </h3>
        {[
          "Curb weight",
          "Gross weight",
          "Tow weight with brakes",
          "Tow weight without brakes",
        ].map((label) => (
          <div key={label} className="flex items-center gap-4">
            <label className="min-w-[15rem] font-semibold text-right whitespace-nowrap">
              {label} (kg)
            </label>
            <input
              type="number"
              className="input input-accent max-w-[16rem]"
              placeholder="Enter weight"
            />
          </div>
        ))}

        <div className="flex justify-center mt-4">
          <button type="submit" className="btn btn-accent w-1/4">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default TechnicalInformationForm;
