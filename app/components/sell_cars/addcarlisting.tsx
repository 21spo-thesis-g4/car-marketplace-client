import React from "react";
import { useRouter } from "next/navigation";

export default function BasicAdCard() {
  const router = useRouter();

  return (
    <div className="card w-80 bg-base-100 shadow-xl p-4">
      <div className="card-body">
        <div className="badge badge-accent mb-2">Basic</div>
        <h2 className="card-title text-xl font-bold mb-4">
          Basic listing on CarNet
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <CheckIcon className="mr-2 text-accent" />
            Free of charge
          </li>
          <li className="flex items-start">
            <CheckIcon className="mr-2 text-accent" />
            Most interested buyers
          </li>
          <li className="flex items-start">
            <CheckIcon className="mr-2 text-accent" />
            You're likely to get the best price
          </li>
        </ul>
        <div className="card-actions mt-4">
          <button
            className="btn btn-accent w-full"
            onClick={() => {
              router.push("/new");
            }}
          >
            Sell your car
          </button>
        </div>
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className: string }) {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
