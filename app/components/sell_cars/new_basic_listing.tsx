import React from 'react';

export default function BasicInformationForm() {
  return (
    <div className="max-w-2xl mx-auto card bg-base-100 shadow p-6">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Basic information</h2>

      <form className="space-y-0">

        {/* Vehicle type */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Vehicle type *</span>
          </label>
          <select className="select select-bordered w-full" defaultValue="Car">
            <option>Car</option>
            <option>Motorcycle</option>
            <option>Truck</option>
            <option>Van</option>
          </select>
        </div>

        {/* Make */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Make *</span>
          </label>
          <select className="select select-bordered w-full" defaultValue="BMW">
            <option>BMW</option>
            <option>Audi</option>
            <option>Mercedes</option>
            <option>Volkswagen</option>
          </select>
        </div>

        {/* Model */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Model *</span>
          </label>
          <select className="select select-bordered w-full" defaultValue="Model">
            <option disabled value="Model">Model</option>
            <option>3 Series</option>
            <option>5 Series</option>
            <option>7 Series</option>
          </select>
        </div>

        {/* Year model */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Year model *</span>
          </label>
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
          <label className="label font-semibold">
            <span className="label-text">Engine model</span>
          </label>
          <input
            type="text"
            placeholder="Give only the trim level"
            className="input input-bordered w-full"
          />
        </div>

        {/* Car Type */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Car Type</span>
          </label>
          <select className="select select-bordered w-full" defaultValue="">
            <option disabled value="">Select Car Type</option>
            <option>Coupe</option>
            <option>Sedan</option>
            <option>Wagon</option>
            <option>SUV</option>
          </select>
        </div>

        {/* Road capacity */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Road capacity</span>
          </label>
          <select className="select select-bordered w-full" defaultValue="Not roadworthy">
            <option>Roadworthy</option>
            <option>Not roadworthy</option>
          </select>
        </div>

        {/* Reg. No & Tax free */}
        <div className="flex gap-2 items-end">
          <div className="form-control flex-1">
            <label className="label font-semibold">
              <span className="label-text">Reg. No *</span>
            </label>
            <input
              type="text"
              placeholder="example abc-123"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control pt-6">
            <label className="cursor-pointer label">
              <span className="label-text mr-1">Tax free</span>
              <input type="checkbox" className="checkbox checkbox-primary" />
            </label>
          </div>
        </div>

        {/* VIN */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">VIN</span>
          </label>
          <input
            type="text"
            placeholder="Vehicle identification number"
            className="input input-bordered w-full"
          />
        </div>

        {/* First registration */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">First registration</span>
          </label>
          <div className="flex gap-2">
            <select className="select select-bordered w-full" defaultValue="">
              <option disabled value="">Year</option>
              {Array.from({ length: 40 }).map((_, i) => {
                const year = 2025 - i;
                return <option key={year}>{year}</option>;
              })}
            </select>
            <select className="select select-bordered w-full" defaultValue="">
              <option disabled value="">Month</option>
              {Array.from({ length: 12 }).map((_, i) => {
                const month = i + 1;
                return <option key={month} value={month}>{month}</option>;
              })}
            </select>
          </div>
          <small className="text-gray-500">Check your car registration certificate.</small>
        </div>

        {/* Inspection date OR first service */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Inspection date</span>
          </label>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex gap-2">
              <select className="select select-bordered w-full" defaultValue="">
                <option disabled value="">Year</option>
                {Array.from({ length: 10 }).map((_, i) => {
                  const year = 2025 - i;
                  return <option key={year}>{year}</option>;
                })}
              </select>
              <select className="select select-bordered w-full" defaultValue="">
                <option disabled value="">Month</option>
                {Array.from({ length: 12 }).map((_, i) => {
                  const month = i + 1;
                  return <option key={month}>{month}</option>;
                })}
              </select>
            </div>
            <span className="mx-2">OR</span>
            <label className="cursor-pointer flex items-center">
              <input type="checkbox" className="checkbox checkbox-primary mr-2" />
              <span className="label-text">First service for vehicle coming</span>
            </label>
          </div>
        </div>

        {/* Previous owners */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Previous owners, you included</span>
          </label>
          <select className="select select-bordered w-full">
            <option disabled value="">Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
          <small className="text-gray-500">How many owners has this car had?</small>
        </div>

        {/* Color */}
        <div className="flex gap-2">
          <div className="form-control flex-1">
            <label className="label font-semibold">
              <span className="label-text">Color *</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled value="">Select color</option>
              <option>Black</option>
              <option>White</option>
              <option>Blue</option>
              <option>Red</option>
              <option>Silver</option>
            </select>
          </div>
          <div className="form-control flex-1">
            <label className="label font-semibold">
              <span className="label-text">Color type *</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled value="">Select Color type</option>
              <option>Metallic</option>
              <option>Matte</option>
              <option>Pearl</option>
            </select>
          </div>
        </div>

        {/* Other information */}
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Other information</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder={`Describe your item as accurately as possible:
- General condition (technical, frame, interior)
- Repairs, changes and enhancements
- Type and condition of tires & rims`}
            rows={4}
          />
        </div>

        {/* Mandatory info notice */}
        <p className="text-gray-500 text-sm">Please fill the mandatory information</p>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary w-32">
          Continue
        </button>
      </form>
    </div>
  );
}
