import React from 'react';
import Link from 'next/link';

const UnknownRoute = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center">
            {/* Glowing/Accent 404 Text */}
            <h1 className="text-8xl md:text-9xl font-bold font-oswald text-[#ccff00] ">
                404
            </h1>
            
            {/* Modern Subheading */}
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-6 tracking-wide">
                ROUTE NOT FOUND
            </h2>
            
            {/* Description text */}
            <p className="text-gray-400 mt-4 max-w-md text-sm md:text-base">
                Oops! It looks like you've lifted too heavy and broken the link. 
                The workout page you're looking for doesn't exist or has been moved.
            </p>

            {/* Return Home Button */}
            <Link 
                href="/" 
                className="mt-8 group flex items-center justify-center gap-2 bg-[#ccff00] text-black font-bold text-sm px-8 py-3.5 rounded-full hover:bg-amber-700 "
            >
                BACK TO WORKOUTS
            </Link>
        </div>
    );
};

export default UnknownRoute;