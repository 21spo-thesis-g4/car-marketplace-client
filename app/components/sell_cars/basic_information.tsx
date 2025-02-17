"use client";
import React, { useState } from "react";
import BrandModel from "./options/brand_model_comp";
import Types from "./options/types";

const BasicInformationForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="collapse collapse-arrow bg-base-100 shadow-md">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <div className="collapse-title text-xl font-bold border-b">
          Basic Information
        </div>

        <div className="collapse-content p-1">
          <form className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">Types *</div>
              <Types className="flex-1" />
            </div>

            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">
                Brand &amp; Model *
              </div>
              <BrandModel className="flex-1" />
            </div>

            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">Year model *</div>
              <select className="select select-accent w-full" defaultValue="">
                <option disabled value="">
                  Select year model
                </option>
                {Array.from({ length: 31 }).map((_, i) => {
                  const year = 2025 - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">Engine model</div>
              <input
                type="text"
                className="input input-accent w-full"
                placeholder="Trim level"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">Road capacity</div>
              <select className="select select-accent w-full">
                <option>Roadworthy</option>
                <option>Not roadworthy</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">Reg. No *</div>
              <input
                type="text"
                className="input input-accent w-full"
                placeholder="example abc-123"
              />
              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-accent" />
                <span>Tax free</span>
              </label>
            </div>

            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">VIN</div>
              <input
                type="text"
                className="input input-accent w-full"
                placeholder="Vehicle identification number"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">
                First registration
              </div>
              <div className="flex gap-2 w-full">
                <select className="select select-accent w-1/2">
                  <option disabled>Year</option>
                  {Array.from({ length: 31 }).map((_, i) => (
                    <option key={i} value={2025 - i}>
                      {2025 - i}
                    </option>
                  ))}
                </select>
                <select className="select select-accent w-1/2">
                  <option disabled>Month</option>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">Inspection date</div>
              <div className="flex gap-2 w-full">
                <select className="select select-accent w-1/2">
                  <option disabled>Year</option>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <option key={i} value={2025 - i}>
                      {2025 - i}
                    </option>
                  ))}
                </select>
                <select className="select select-accent w-1/2">
                  <option disabled>Month</option>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4 translate-x-36">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-accent" />
                <span>First service for vehicle coming</span>
              </label>
            </div>

            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">Previous owners</div>
              <select className="select select-accent w-full">
                <option disabled>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">Color *</div>
              <div className="flex gap-2 w-full">
                <select className="select select-accent w-1/2">
                  <option disabled>Select color</option>
                  <option>Black</option>
                </select>
                <select className="select select-accent w-1/2">
                  <option disabled>Select color type</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="min-w-[8rem] font-semibold">Other info</div>
              <textarea
                className="textarea textarea-accent w-full"
                placeholder="Describe your item..."
                rows={3}
              />
            </div>

            <button type="submit" className="btn btn-accent w-full mt-4">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicInformationForm;
