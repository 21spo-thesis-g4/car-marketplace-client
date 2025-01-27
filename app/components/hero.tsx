import React from 'react';
import Image from 'next/image';
import HeroCar from '../../public/car.png';

const Hero: React.FC = () => {
    return (
        <div className="hero min-h-screen flex items-center justify-center">
            <div className="hero-content">
                <div className="mt-8">
                    <Image src={HeroCar} alt="CarNet"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;