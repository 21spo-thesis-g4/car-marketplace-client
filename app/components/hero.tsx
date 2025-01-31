import React from 'react';
import Image from 'next/image';
import HeroCar from '../../public/car.png';

const Hero: React.FC = () => {
    return (
        <div className="hero flex items-center justify-center">
            <div className="hero-content">
                <div>
                    <Image src={HeroCar} alt="CarNet"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;