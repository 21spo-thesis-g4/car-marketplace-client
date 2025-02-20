import React from 'react';
import Image from 'next/image';
import HeroCar from '../../public/hero.png';

const Hero: React.FC = () => {
    return (
        <div className="hero flex items-center justify-center">
            <Image priority={true} src={HeroCar} alt="CarNet" className="w-full"/>
        </div>
    );
};

export default Hero;