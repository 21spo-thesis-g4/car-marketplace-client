import React from 'react';

export default function BasicAdCard() {
  return (
    <div className="card w-80 bg-base-100 shadow-xl p-4">
      <div className="card-body">
        <div className="badge badge-success text-white mb-2">PERINTEINEN</div>
        <h2 className="card-title text-xl font-bold mb-4">
          Perusilmoitus Nettiautossa
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            Ilmoita maksutta
          </li>
          <li className="flex items-start">
            Eniten kiinnostuneita ostajia
          </li>
          <li className="flex items-start">
            Saat todennäköisesti parhaan hinnan
          </li>
        </ul>
        <div className="card-actions mt-4">
          <button className="btn btn-primary w-full">
            Myy perusilmoituksella
          </button>
        </div>
      </div>
    </div>
  );
}