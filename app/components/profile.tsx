"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserCars from "./userCars";
import NewCarListing from "./sell_cars/addcarlisting";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const Profile: React.FC = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`${API_URL}/protected`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Unauthorized");
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("An error occurred while fetching your data. Please log in again.");
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
        localStorage.removeItem("carID")
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen">{error}</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 space-y-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Profile</h2>
        <div className="space-y-4">
          <p className="text-lg">Welcome, {user?.name}!</p>
          <p>Email: {user?.email}</p>
          <UserCars />
          <NewCarListing />
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="btn btn-primary"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("userID");
              localStorage.removeItem("carID")
              router.push("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
