"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import car1 from "../../public/car1.png";

interface Car {
  CarID: number;
  Year: number;
  Price: number;
  MakeName: string;
  ModelName: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
//const apiUrl = "http://localhost:4000";

const NewCars = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Replace with your actual API URL if needed
        const res = await fetch(`${apiUrl}/api/options/search`);
        if (!res.ok) {
          throw new Error(`Fetch failed with status ${res.status}`);
        }
        const data: Car[] = await res.json();

        // Take first 9 cars
        setCars(data.slice(0, 9));
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.CarID} className="card shadow-xl p-2">
            <Image src={car1} alt={car.ModelName} />
            <h2 className="card-title">{car.MakeName} {car.ModelName}</h2>
            <p>
              €{car.Price.toLocaleString()}, {car.Year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCars;
