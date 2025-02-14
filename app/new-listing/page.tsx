import React from 'react'
import Basic from '../components/sell_cars/basic_information'
import Technical from '../components/sell_cars/tech_information'

function New_Listing() {
  return (
    <div>
      <div className="max-w-3xl mx-auto card bg-base-100 shadow-md p-6">
        <h1 className="text-4xl font-bold">Leave listing</h1>
        <p className="text-lg mt-2"> Listing is free of charge for individuals.</p>
      </div>
      <Basic />
      <Technical />
    </div>
  )
}

export default New_Listing