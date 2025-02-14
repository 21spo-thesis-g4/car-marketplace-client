"use client";
import React, { useState } from "react";

const BasicInformationForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state

  return (
    <div className="max-w-3xl mx-auto">
      <div className="collapse collapse-arrow bg-base-100 shadow-md">
        <input type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        <div className="collapse-title text-xl font-bold border-b pb-2">
          Basic Information
        </div>
        <div className="collapse-content space-y-4">
          <form className="space-y-4 p-4">
            {/* Vehicle type */}
            <div className="form-control">
              <label className="label">Vehicle type *</label>
              <select className="select select-bordered w-full" defaultValue="Car">
                <option>Car</option>
                <option>Motorcycle</option>
                <option>Truck</option>
                <option>Van</option>
              </select>
            </div>

            {/* Make */}
            <div className="form-control">
              <label className="label">Make *</label>
              <select className="select select-bordered w-full" defaultValue="BMW">
                <option>BMW</option>
                <option>Audi</option>
                <option>Mercedes</option>
                <option>Volkswagen</option>
              </select>
            </div>

            {/* Model */}
            <div className="form-control">
              <label className="label">Model *</label>
              <select className="select select-bordered w-full" defaultValue="Model">
                <option disabled value="Model">Model</option>
                <option>3 Series</option>
                <option>5 Series</option>
                <option>7 Series</option>
              </select>
            </div>

            {/* Year model */}
            <div className="form-control">
              <label className="label">Year model *</label>
              <select className="select select-bordered w-full" defaultValue="">
                <option disabled value="">Select year model</option>
                {Array.from({ length: 40 }).map((_, index) => {
                  const year = 2025 - index;
                  return <option key={year}>{year}</option>;
                })}
              </select>
            </div>

            {/* Engine model */}
            <div className="form-control">
              <label className="label">Engine model</label>
              <input type="text" className="input input-bordered w-full" placeholder="Trim level" />
            </div>

            {/* Car Type */}
            <div className="form-control">
              <label className="label">Car Type</label>
              <select className="select select-bordered w-full">
                <option disabled>Select Car Type</option>
                <option>Coupe</option>
                <option>Sedan</option>
                <option>Wagon</option>
                <option>SUV</option>
              </select>
            </div>

            {/* Road capacity */}
            <div className="form-control">
              <label className="label">Road capacity</label>
              <select className="select select-bordered w-full">
                <option>Roadworthy</option>
                <option>Not roadworthy</option>
              </select>
            </div>

            {/* Reg. No & Tax free */}
            <div className="flex gap-2">
              <div className="form-control flex-1">
                <label className="label">Reg. No *</label>
                <input type="text" className="input input-bordered w-full" placeholder="example abc-123" />
              </div>
              <div className="form-control pt-6">
                <label className="cursor-pointer flex items-center">
                  <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                  <span>Tax free</span>
                </label>
              </div>
            </div>

            {/* VIN */}
            <div className="form-control">
              <label className="label">VIN</label>
              <input type="text" className="input input-bordered w-full" placeholder="Vehicle identification number" />
            </div>

            {/* First registration */}
            <div className="form-control">
              <label className="label">First registration</label>
              <div className="flex gap-2">
                <select className="select select-bordered w-full">
                  <option disabled>Year</option>
                  {Array.from({ length: 40 }).map((_, i) => (
                    <option key={i}>{2025 - i}</option>
                  ))}
                </select>
                <select className="select select-bordered w-full">
                  <option disabled>Month</option>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option key={i}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Inspection date OR first service */}
            <div className="form-control">
              <label className="label">Inspection date</label>
              <div className="flex gap-2">
                <select className="select select-bordered w-full">
                  <option disabled>Year</option>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <option key={i}>{2025 - i}</option>
                  ))}
                </select>
                <select className="select select-bordered w-full">
                  <option disabled>Month</option>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option key={i}>{i + 1}</option>
                  ))}
                </select>
                <label className="cursor-pointer flex items-center">
                  <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                  <span>First service for vehicle coming</span>
                </label>
              </div>
            </div>

            {/* Previous owners */}
            <div className="form-control">
              <label className="label">Previous owners</label>
              <select className="select select-bordered w-full">
                <option disabled>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>

            {/* Color */}
            <div className="flex gap-2">
              <div className="form-control flex-1">
                <label className="label">Color *</label>
                <select className="select select-bordered w-full">
                  <option disabled>Select color</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Blue</option>
                  <option>Red</option>
                  <option>Silver</option>
                </select>
              </div>
              <div className="form-control flex-1">
                <label className="label">Color type *</label>
                <select className="select select-bordered w-full">
                  <option disabled>Select Color type</option>
                  <option>Metallic</option>
                  <option>Matte</option>
                  <option>Pearl</option>
                </select>
              </div>
            </div>

            {/* Other information */}
            <div className="form-control">
              <label className="label">Other information</label>
              <textarea className="textarea textarea-bordered w-full" placeholder="Describe your item..." rows={4} />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary w-full mt-4">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicInformationForm;
