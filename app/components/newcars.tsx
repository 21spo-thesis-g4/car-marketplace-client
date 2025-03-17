"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import car1 from "../../public/car1.png";

interface Car {
  carid: number;
  year: number;
  price: number | null;
  makename: string;
  modelname: string;
  car_image: string | null;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const NewCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(`${apiUrl}/cars/search`);
        if (!res.ok) {
          throw new Error(`Fetch failed with status ${res.status}`);
        }
        const data: Car[] = await res.json();

        setCars(data.slice(0, 9));
      } catch (error) {
        console.error("Error fetching cars:", error);
        setError("Failed to fetch cars. Please try again later.");
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Latest Cars</h2>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {cars.map((car) => (
            <div key={car.carid} className="card shadow-xl p-2">
              <Image 
                src={car.car_image || car1} // Fallback to a placeholder image if no car image is available
                alt={car.modelname}
                width={300}
                height={200}
                className="object-cover w-full h-full pb-1"
              />
              <p>
                {car.makename} {car.modelname}
              </p>
              <p>
                {car.price !== null ? `${car.price.toLocaleString()} €` : "Price not available"}, {car.year}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewCars;
