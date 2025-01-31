"use client"
import React, { useState } from 'react';

const Search: React.FC = () => {
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [power, setPower] = useState('');
    const [modelYear, setModelYear] = useState('');

    const handleSearch = () => {
        // Implement search logic here
        console.log({ type, brand, model, power, modelYear });
    };

    return (
        <div className="p-4 rounded-lg shadow-md">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Type</span>
                </label>
                <select
                    className="select select-bordered"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="">Select Type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Truck">Truck</option>
                    <option value="Coupe">Coupe</option>
                </select>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Brand</span>
                </label>
                <select
                    className="select select-bordered"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option value="">Select Brand</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                </select>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Model</span>
                </label>
                <select
                    className="select select-bordered"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                >
                    <option value="">Select Model</option>
                    <option value="Corolla">Corolla</option>
                    <option value="Civic">Civic</option>
                    <option value="F-150">F-150</option>
                    <option value="3 Series">3 Series</option>
                </select>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Power</span>
                </label>
                <select
                    className="select select-bordered"
                    value={power}
                    onChange={(e) => setPower(e.target.value)}
                >
                    <option value="">Select Power</option>
                    <option value="100hp">100hp</option>
                    <option value="200hp">200hp</option>
                    <option value="300hp">300hp</option>
                    <option value="400hp">400hp</option>
                </select>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Model Year</span>
                </label>
                <select
                    className="select select-bordered"
                    value={modelYear}
                    onChange={(e) => setModelYear(e.target.value)}
                >
                    <option value="">Select Model Year</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            <button onClick={handleSearch} className="btn btn-primary w-full mt-4">Search</button>
        </div>
    );
};

export default Search;