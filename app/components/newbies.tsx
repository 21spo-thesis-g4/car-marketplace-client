import React from 'react';
import Image from 'next/image';
import car1 from '../../public/car1.png';

const cars = [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: 15000 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 18000 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2021, price: 25000 },
    { id: 4, make: 'Chevrolet', model: 'Camaro', year: 2018, price: 22000 },
    { id: 5, make: 'Tesla', model: 'Model 3', year: 2022, price: 35000 },
    { id: 6, make: 'BMW', model: '3 Series', year: 2020, price: 30000 },
    { id: 7, make: 'Audi', model: 'A4', year: 2019, price: 28000 },
    { id: 8, make: 'Mercedes-Benz', model: 'C-Class', year: 2021, price: 32000 },
    { id: 9, make: 'Volkswagen', model: 'Golf', year: 2018, price: 20000 },
    { id: 10, make: 'Nissan', model: 'Altima', year: 2022, price: 24000 },
    { id: 11, make: 'Hyundai', model: 'Elantra', year: 2020, price: 19000 },
    { id: 12, make: 'Kia', model: 'Optima', year: 2019, price: 21000 }
];

const Newbies = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-3 gap-4">
                {cars.map((car) => (
                    <div key={car.id} className="card shadow-xl">
                            <Image src={car1} alt={car.model} />
                            <h2 className="card-title">{car.model}</h2>
                            <p>
                                ${car.price}, {car.year}
                            </p>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Newbies;