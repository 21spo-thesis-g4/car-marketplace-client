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
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const UserCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [userID, setUserID] = useState<string | null>(null);

  useEffect(() => {
    const storedUserID = localStorage.getItem("userID");
    if (!storedUserID) {
      setError("User ID not found. Please log in.");
      return;
    }
    setUserID(storedUserID);

    const fetchUserCars = async () => {
      try {
        const res = await fetch(`${API_URL}/api/options/search?userid=${storedUserID}`);
        if (!res.ok) {
          throw new Error(`Fetch failed with status ${res.status}`);
        }
        const data: Car[] = await res.json();

        setCars(data);
      } catch (error) {
        console.error("Error fetching user cars:", error);
        setError("Failed to fetch user cars. Please try again later.");
      }
    };

    fetchUserCars();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">My Cars</h2>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {cars.length > 0 ? (
            cars.map((car) => (
              <div key={car.carid} className="card shadow-xl p-2">
                <Image src={car1} alt={car.modelname} />
                <h2 className="card-title">
                  {car.makename} {car.modelname}
                </h2>
                <p>
                  {car.price !== null ? `€${car.price.toLocaleString()}` : "Price not available"}, {car.year}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">You dont have any car listings</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserCars;
