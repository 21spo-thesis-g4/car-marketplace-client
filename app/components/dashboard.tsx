"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      router.push("/auth/login"); // Redirect if no token
      return;
    }

    fetch("http://localhost:4000/protected", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Send token in headers
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unauthorized");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        localStorage.removeItem("token");
        router.push("/auth/login");
      });
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold text-center">User Dashboard</h2>
        <div className="space-y-4">
          <p className="text-lg">Welcome, {user?.name}!</p>
          <p>Email: {user?.email}</p>
          <p>Role: {user?.role}</p>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="btn btn-primary"
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/auth/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
