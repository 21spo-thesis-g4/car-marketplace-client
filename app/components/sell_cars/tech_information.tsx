"use client";
import React, { useState } from "react";
import FuelTypes from "./options/fuel_types";

const TechnicalInformation: React.FC = () => {
  const [mileage, setMileage] = useState<number | null>(null);
  const [fuelType, setFuelType] = useState<string | null>(null);
  const [engineSize, setEngineSize] = useState<string | null>(null);
  const [driveType, setDriveType] = useState<string | null>(null);
  const [gearboxType, setGearboxType] = useState<string | null>(null);
  const [noOfPersons, setNoOfPersons] = useState<number | null>(null);
  const [noOfDoors, setNoOfDoors] = useState<number | null>(null);
  const [power, setPower] = useState<number | null>(null);
  const [fuelConsumption, setFuelConsumption] = useState<{ [key: string]: number | null }>({
    urban: null,
    road: null,
    combined: null,
  });

  const handleFuelTypeChange = (fuelTypeId: string) => {
    setFuelType(fuelTypeId);
  }


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
          <div className="min-w-[12rem] font-semibold text-right">Fuel type *</div>
          <FuelTypes
            className="flex-1"
            selectedFuelType=""
            onFuelTypeChange={handleFuelTypeChange}
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
          <div className="min-w-[12rem] font-semibold text-right">Drive type *</div>
          <FuelTypes
            className="flex-1"
            selectedDriveType=""
            onDriveTypeChange={handleDriveTypeChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            Gearbox Type *
          </label>
          <select className="select select-accent w-full">
            <option>Select Gearbox type</option>
            <option>Manual</option>
            <option>Automatic</option>
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

        <h3 className="font-semibold text-center mt-4">
          Fuel Consumption
        </h3>
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

export default TechnicalInformation;
