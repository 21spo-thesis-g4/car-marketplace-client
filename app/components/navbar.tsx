import React from 'react';
import Link from "next/link";
import Image from 'next/image'

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link href="/">
                        <Image src="/CarNet.png" alt="CarNet" width={100} height={100} />
                    </Link>
                </div>
                <ul className="navbar-links">
                    <div className="navbar-left">
                        <li>
                            <Link href="/search">Search</Link>
                        </li>
                        <li>
                            <Link href="/new">New</Link>
                        </li>
                        <li>
                            <Link href="/spareparts">Spare parts</Link>
                        </li>
                    </div>
                    <li className="right">
                        <Link href="/users/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;