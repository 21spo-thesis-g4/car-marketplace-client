"use client";
import React, { useState } from "react";

const TechnInformation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state

  return (
    <div className="max-w-3xl mx-auto">
      <div className="collapse collapse-arrow bg-base-100 shadow-md">
        <input type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        <div className="collapse-title text-xl font-bold border-b pb-2">
          Technical Information
        </div>
        <div className="collapse-content space-y-4">
          {/* Form Fields */}
          <form className="space-y-4 p-4">
            {/* Mileage */}
            <div className="form-control">
              <label className="label">Mileage (driven km) *</label>
              <input type="number" className="input input-bordered w-full" placeholder="Enter mileage" />
            </div>

            {/* Power Type */}
            <div className="form-control">
              <label className="label">Power Type *</label>
              <select className="select select-bordered w-full">
                <option>Select Power type</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Electric</option>
                <option>Hybrid</option>
              </select>
            </div>

            {/* Engine Size */}
            <div className="form-control">
              <label className="label">Engine Size *</label>
              <select className="select select-bordered w-full">
                <option>Select Engine size</option>
                <option>1.0L</option>
                <option>1.6L</option>
                <option>2.0L</option>
                <option>3.0L</option>
              </select>
            </div>

            {/* Drive Type */}
            <div className="form-control">
              <label className="label">Drive Type *</label>
              <select className="select select-bordered w-full">
                <option>Select Drive type</option>
                <option>Front-Wheel Drive</option>
                <option>Rear-Wheel Drive</option>
                <option>All-Wheel Drive</option>
              </select>
            </div>

            {/* Gearbox Type */}
            <div className="form-control">
              <label className="label">Gearbox Type *</label>
              <select className="select select-bordered w-full">
                <option>Select Gearbox type</option>
                <option>Manual</option>
                <option>Automatic</option>
              </select>
            </div>

            {/* No. of Persons */}
            <div className="form-control">
              <label className="label">No. of persons</label>
              <select className="select select-bordered w-full">
                <option>Select No. of persons</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </select>
            </div>

            {/* No. of Doors */}
            <div className="form-control">
              <label className="label">No. of doors</label>
              <select className="select select-bordered w-full">
                <option>Select No. of doors</option>
                {[2, 3, 4, 5].map((num) => (
                  <option key={num}>{num}</option>
                ))}
              </select>
            </div>

            {/* Power */}
            <div className="form-control">
              <label className="label">Power</label>
              <input type="number" className="input input-bordered w-full" placeholder="Enter power" />
            </div>

            {/* Fuel Consumption */}
            <h3 className="font-semibold">Fuel Consumption</h3>
            {["urban", "road", "combined"].map((type) => (
              <div key={type} className="form-control">
                <label className="label">{type.charAt(0).toUpperCase() + type.slice(1)} (L/100km)</label>
                <input type="number" className="input input-bordered w-full" placeholder="Enter fuel consumption" />
              </div>
            ))}

            {/* Weights */}
            <h3 className="font-semibold">Weight (Check your car registration certificate)</h3>
            {["Curb weight", "Gross weight", "Tow weight with brakes", "Tow weight without brakes"].map((label) => (
              <div key={label} className="form-control">
                <label className="label">{label} (kg)</label>
                <input type="number" className="input input-bordered w-full" placeholder="Enter weight" />
              </div>
            ))}

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full mt-4">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TechnInformation;