"use client";
import React, { useState } from "react";

const PriceLocation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="collapse collapse-arrow bg-base-100 shadow-md">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <div className="collapse-title text-md font-bold border-b">
          Price and Location
        </div>
      </div>
    </div>
  );
};

export default PriceLocation;
