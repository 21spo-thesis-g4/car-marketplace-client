"use client";
import React, { useState } from "react";

const TechnInformation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="collapse collapse-arrow bg-base-100 shadow-md">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <div className="collapse-title text-xl font-bold border-b pb-2">
          Technical Information
        </div>

        <div className="collapse-content p-1">
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
              <label className="min-w-[12rem] font-semibold text-right">
                Power Type *
              </label>
              <select className="select select-accent w-full">
                <option>Select Power type</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Electric</option>
                <option>Hybrid</option>
              </select>
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
                Drive Type *
              </label>
              <select className="select select-accent w-full">
                <option>Select Drive type</option>
                <option>Front-Wheel Drive</option>
                <option>Rear-Wheel Drive</option>
                <option>All-Wheel Drive</option>
              </select>
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
              <label className="min-w-[12rem] font-semibold text-right">Power</label>
              <input
                type="number"
                className="input input-accent w-full"
                placeholder="Enter power"
              />
            </div>

            <h3 className="font-semibold text-right mt-4">Fuel Consumption</h3>
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

            <h3 className="font-semibold text-right mt-4">
              Weight (Check your car registration certificate)
            </h3>
            {[
              "Curb weight",
              "Gross weight",
              "Tow weight with brakes",
              "Tow weight without brakes",
            ].map((label) => (
              <div key={label} className="flex items-center gap-4">
                <label className="min-w-[16rem] font-semibold text-right whitespace-nowrap">
                  {label} (kg)
                </label>
                <input
                  type="number"
                  className="input input-accent w-full"
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
      </div>
    </div>
  );
};

export default TechnInformation;
