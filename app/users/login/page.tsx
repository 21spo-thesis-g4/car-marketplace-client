import React from 'react';
import Link from 'next/link';

const LoginPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Login</button>
                </form>
                <div className="text-center">
                    <Link href="#" className="link link-primary">Forgot password?</Link>
                </div>
                <div className="text-center">
                    <Link href="/users/new" className="link link-primary">Don't have an account? Create it here</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;