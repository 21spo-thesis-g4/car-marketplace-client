"use client"
import React, { useState, useEffect } from 'react';

const Search: React.FC = () => {
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [power, setPower] = useState('');
    const [modelYear, setModelYear] = useState('');

    const [options, setOptions] = useState<{
        types: { type: string }[],
        brands: { brand: string }[],
        models: { model: string }[],
        powers: { power: string }[],
        modelYears: { model_year: string }[],
    }>({
        types: [],
        brands: [],
        models: [],
        powers: [],
        modelYears: [],
    });

    const fetchOptions = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/options/search');
            if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    
            const data = await response.json();
            console.log("Fetched Options:", data);
    
            // Ensure the response has required fields, or set default values
            setOptions({
                types: data.types || [],
                brands: data.brands || [],
                models: data.models || [],
                powers: data.powers || [],
                modelYears: data.modelYears || [],
            });
    
        } catch (err) {
            console.error('Failed to fetch options:', err);
    
            // Set empty defaults to prevent frontend crashes
            setOptions({
                types: [],
                brands: [],
                models: [],
                powers: [],
                modelYears: [],
            });
        }
    };

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
                    {options.types && options.types.length > 0 ? (
                        options.types.map((option) => (
                            <option key={option.type} value={option.type}>{option.type}</option>
                        ))
                    ) : (
                        <option disabled>Loading...</option>
                    )}
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
                    {options.brands.map((option) => (
                        <option key={option.brand} value={option.brand}>
                            {option.brand}
                        </option>
                    ))}
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
                    {options.models.map((option) => (
                        <option key={option.model} value={option.model}>
                            {option.model}
                        </option>
                    ))}
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
                    {options.powers.map((option) => (
                        <option key={option.power} value={option.power}>
                            {option.power}
                        </option>
                    ))}
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
                    {options.modelYears.map((option) => (
                        <option key={option.model_year} value={option.model_year}>
                            {option.model_year}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleSearch} className="btn btn-primary w-full mt-4">Search</button>
        </div>
    );
};

export default Search;