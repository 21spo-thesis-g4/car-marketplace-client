"use client";
import React, { useState } from "react";

const PriceLocation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [price, setPrice] = useState("");
  const [notPriced, setNotPriced] = useState(false);
  const [vatDeductible, setVatDeductible] = useState(false);
  const [location, setLocation] = useState("Pohjois-Pohjanmaa, Oulu");
  const [showExactLocation, setShowExactLocation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      price,
      notPriced,
      vatDeductible,
      location,
      showExactLocation,
    });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="collapse collapse-arrow bg-base-100 shadow-md">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <div className="collapse-title text-xl font-bold border-b">
          Price and Location
        </div>

        <div className="collapse-content p-1">
          <form className="max-w-3xl mx-auto space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center gap-4">
              <label className="min-w-[9rem] font-semibold">
                Asking price *
              </label>
              <div className="flex items-center gap-2 w-full">
                <input
                  type="number"
                  className="input input-accent w-36"
                  placeholder="e.g. 10000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  disabled={notPriced}
                />
                <span>€</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <label className="min-w-[9rem] font-semibold">Not priced</label>
              <div className="w-full flex items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent mr-2"
                  checked={notPriced}
                  onChange={(e) => {
                    setNotPriced(e.target.checked);
                    if (e.target.checked) setPrice("");
                  }}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <label className="min-w-[9rem] font-semibold">
                VAT deductible
              </label>
              <div className="w-full flex items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent mr-2"
                  checked={vatDeductible}
                  onChange={(e) => setVatDeductible(e.target.checked)}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <label className="min-w-[9rem] font-semibold">Location *</label>
              <select
                className="select select-accent w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></select>
            </div>

            <div className="flex items-center gap-4">
              <label className="min-w-[9rem] font-semibold">
                Show exact location
              </label>
              <div className="w-full flex items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent mr-2"
                  checked={showExactLocation}
                  onChange={(e) => setShowExactLocation(e.target.checked)}
                />
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Please fill the mandatory information
            </p>

            <button type="submit" className="btn btn-accent w-full mt-4">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PriceLocation;
