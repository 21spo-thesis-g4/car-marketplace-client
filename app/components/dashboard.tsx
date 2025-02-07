"use client";
import React, { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data using the token
      fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
      })
        .then(response => response.json())
        .then(data => setUser(data.user))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold text-center">User Dashboard</h2>
        <div className="space-y-4">
          <p className="text-lg">Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="btn btn-primary" onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/users/login';
          }}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;