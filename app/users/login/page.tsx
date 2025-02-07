"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({ email, password }),
    });

    console.log('Raw Response:', response);

    if (!response.ok) {
      const errorData = await response.json();
      console.log('Error Response:', errorData); // Debugging line
      throw new Error(errorData.message || 'Something went wrong');
    }

    const data = await response.json();
    console.log('Parsed Data:', data); // Debugging line
    return data;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error(error instanceof Error ? error.message : 'Something went wrong');
  }
};


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    console.log('Login button clicked');
  
    try {
      const response = await loginUser(email, password);
      console.log('API response:', response);
  
      if (response && response.token) {
        localStorage.setItem('token', response.token); // Store JWT in local storage
        console.log('Stored token:', localStorage.getItem('token')); // Debugging
  
        setMessage('Login successful');
        router.push('/users/dashboard');
      } else {
        throw new Error('Invalid login response. No token received.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Remember me</span>
              <input type="checkbox" className="checkbox" />
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>
        <div className="text-center pb-8">
          <Link href="#" className="link link-primary">Forgot password?</Link>
        </div>
        <Link href="/users/new" className='link no-underline'>
          <button className='btn btn-outline w-full'>
            Don&apos;t have an account? Create it here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;