"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FuelTypes from "./options/tech/fuel_type";
import DriveTypes from "./options/tech/drive_type";
import Transmission from "./options/tech/transmission";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const TechnicalInformationForm: React.FC = () => {
  const router = useRouter();
  const [userID, setUserID] = useState<number | null>(null);
  const [carID, setCarID] = useState<number | null>(null);
  const [mileage, setMileage] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [selectedDriveType, setSelectedDriveType] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [noOfPersons, setNoOfPersons] = useState("");
  const [noOfDoors, setNoOfDoors] = useState("");
  const [power, setPower] = useState("");
  const [torque, setTorque] = useState("");
  const [topSpeed, setTopSpeed] = useState("");
  const [acceleration, setAcceleration] = useState("");
  const [co2Emissions, setCo2Emissions] = useState("");
  const [massEmpty, setMassEmpty] = useState("");
  const [massTotal, setMassTotal] = useState("");
  const [towCapacityBraked, setTowCapacityBraked] = useState("");
  const [towCapacityUnbraked, setTowCapacityUnbraked] = useState("");
  const [steeringSide, setSteeringSide] = useState("");
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
    const storedCarID = localStorage.getItem("carID");

    if (!token) {
      router.push("/profile");
      return;
    }

    if (storedUserID) {
      setUserID(parseInt(storedUserID));
    }

    if (!storedCarID) {
      router.push("/new-listing");
      return;
    } else {
      setCarID(parseInt(storedCarID));
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

  const handleEngineCapacityChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEngineCapacity(e.target.value);
  };

  const handleNoOfPersonsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNoOfPersons(e.target.value);
  };

  const handleNoOfDoorsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNoOfDoors(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      carid: carID ?? undefined,
      mileage: mileage ? parseInt(mileage) : undefined,
      enginecapacity: engineCapacity ? parseFloat(engineCapacity) : undefined,
      power: power ? parseInt(power) : undefined,
      torque: torque ? parseInt(torque) : undefined,
      topspeed: topSpeed ? parseInt(topSpeed) : undefined,
      acceleration: acceleration ? parseFloat(acceleration) : undefined,
      co2emissions: co2Emissions ? parseInt(co2Emissions) : undefined,

      fuelconsumptioncity: fuelConsumption.urban ?? undefined,
      fuelconsumptionhighway: fuelConsumption.road ?? undefined,
      fuelconsumptioncombined: fuelConsumption.combined ?? undefined,

      massempty: massEmpty ? parseInt(massEmpty) : undefined,
      masstotal: massTotal ? parseInt(massTotal) : undefined,
      towcapacitybraked: towCapacityBraked
        ? parseInt(towCapacityBraked)
        : undefined,
      towcapacityunbraked: towCapacityUnbraked
        ? parseInt(towCapacityUnbraked)
        : undefined,

      seatingcapacity: noOfPersons ? parseInt(noOfPersons) : undefined,
      doorcount: noOfDoors ? parseInt(noOfDoors) : undefined,
      steeringside: steeringSide || "Left", // Defaults to "Left" if not selected

      fueltypeid: selectedFuelType ? parseInt(selectedFuelType) : undefined,
      drivetypeid: selectedDriveType ? parseInt(selectedDriveType) : undefined,
      transmissionid: selectedTransmission
        ? parseInt(selectedTransmission)
        : undefined,
    };

    try {
      const response = await fetch(`${API_URL}/carTechnicalDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Car tech details added", data);
      router.push("/new-listing/add-images");
    } catch (error) {
      console.error("Error adding tech details:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-base-100 shadow-md p-4">
      <h2 className="text-md font-bold border-b pb-2 mb-4">
        Technical Information
      </h2>

      <form
        className="space-y-4 max-w-3xl mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            Mileage (driven km) *
          </label>
          <input
            type="number"
            className="input input-accent w-full"
            placeholder="Enter mileage"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
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
          <select
            className="select select-accent w-full"
            value={engineCapacity}
            onChange={handleEngineCapacityChange}
          >
            <option>Select Engine size</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            No. of persons
          </label>
          <select
            className="select select-accent w-full"
            value={noOfPersons}
            onChange={handleNoOfPersonsChange}
          >
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
          <select
            className="select select-accent w-full"
            value={noOfDoors}
            onChange={handleNoOfDoorsChange}
          >
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
            value={power}
            onChange={(e) => setPower(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            Torque (Nm)
          </label>
          <input
            type="number"
            className="input input-accent w-full"
            placeholder="Enter torque"
            value={torque}
            onChange={(e) => setTorque(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            Top Speed (km/h)
          </label>
          <input
            type="number"
            className="input input-accent w-full"
            placeholder="Enter top speed"
            value={topSpeed}
            onChange={(e) => setTopSpeed(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            Acceleration (0-100 km/h in sec)
          </label>
          <input
            type="number"
            className="input input-accent w-full"
            placeholder="Enter acceleration"
            value={acceleration}
            onChange={(e) => setAcceleration(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            CO₂ Emissions (g/km)
          </label>
          <input
            type="number"
            className="input input-accent w-full"
            placeholder="Enter CO₂ emissions"
            value={co2Emissions}
            onChange={(e) => setCo2Emissions(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="min-w-[12rem] font-semibold text-right">
            Steering Side
          </label>
          <select
            className="select select-accent w-full"
            value={steeringSide}
            onChange={(e) => setSteeringSide(e.target.value)}
          >
            <option value="Left">Left</option>
            <option value="Right">Right</option>
          </select>
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
              value={fuelConsumption[type] ?? ""}
              onChange={(e) =>
                setFuelConsumption({
                  ...fuelConsumption,
                  [type]: e.target.value ? parseFloat(e.target.value) : null,
                })
              }
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
        ].map((label, index) => (
          <div key={label} className="flex items-center gap-4">
            <label className="min-w-[15rem] font-semibold text-right whitespace-nowrap">
              {label} (kg)
            </label>
            <input
              type="number"
              className="input input-accent max-w-[16rem]"
              placeholder="Enter weight"
              value={
                index === 0
                  ? massEmpty
                  : index === 1
                  ? massTotal
                  : index === 2
                  ? towCapacityBraked
                  : towCapacityUnbraked
              }
              onChange={(e) =>
                index === 0
                  ? setMassEmpty(e.target.value)
                  : index === 1
                  ? setMassTotal(e.target.value)
                  : index === 2
                  ? setTowCapacityBraked(e.target.value)
                  : setTowCapacityUnbraked(e.target.value)
              }
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
