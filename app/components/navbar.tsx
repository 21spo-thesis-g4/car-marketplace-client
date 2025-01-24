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
                            <Link href="/etsi">Etsi</Link>
                        </li>
                        <li>
                            <Link href="/uudet">Uudet</Link>
                        </li>
                        <li>
                            <Link href="/varaosat">Varaosat</Link>
                        </li>
                    </div>
                    <li className="right">
                        <Link href="/tili">Tili</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;