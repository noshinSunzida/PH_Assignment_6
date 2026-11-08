import React from 'react';

export default function Loading() {
    // Generates 6 skeleton cards for the grid
    const skeletonCards = Array.from({ length: 6 });

    return (
        <div className="bg-[#0c0c0e] min-h-screen text-white pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                
                {/* Hero Section Skeleton */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24 animate-pulse">
                    <div className="flex-1 w-full space-y-6">
                        {/* "WORKOUT LIBRARY" tiny header */}
                        <div className="h-4 w-32 bg-gray-800/50 rounded"></div>
                        
                        {/* Main huge text */}
                        <div className="space-y-3">
                            <div className="h-14 w-full md:w-3/4 bg-gray-800/50 rounded-lg"></div>
                            <div className="h-14 w-full md:w-2/3 bg-gray-800/50 rounded-lg"></div>
                        </div>
                        
                        {/* Description paragraph */}
                        <div className="space-y-2 pt-2">
                            <div className="h-4 w-full md:w-2/3 bg-gray-800/50 rounded"></div>
                            <div className="h-4 w-1/2 bg-gray-800/50 rounded"></div>
                        </div>
                        
                        {/* Browse Workouts Button */}
                        <div className="h-12 w-48 bg-[#ccff00]/20 rounded-lg mt-6"></div>
                    </div>
                    
                    {/* Hero 3D Image Placeholder */}
                    <div className="flex-1 w-full flex justify-end">
                        <div className="w-full max-w-[400px] h-[400px] bg-gray-800/50 rounded-3xl"></div>
                    </div>
                </div>

                {/* "THE LIBRARY" Section Header Skeleton */}
                <div className="mb-8 animate-pulse">
                    <div className="h-8 w-48 bg-gray-800/50 rounded-lg mb-2"></div>
                    <div className="h-4 w-72 bg-gray-800/50 rounded"></div>
                </div>

                {/* Workout Cards Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skeletonCards.map((_, index) => (
                        <div 
                            key={index} 
                            className="bg-[#15171C] rounded-2xl p-4 flex flex-col animate-pulse"
                        >
                            {/* Workout Image Placeholder */}
                            <div className="w-full h-48 bg-gray-800/50 rounded-xl"></div>
                            
                            {/* Muscle Group Tags (e.g. Chest, Arms) */}
                            <div className="flex gap-2 mt-4">
                                <div className="h-6 w-14 bg-[#ccff00]/20 rounded-full"></div>
                                <div className="h-6 w-14 bg-[#ccff00]/20 rounded-full"></div>
                            </div>

                            {/* Workout Title & Equipment Subtitle */}
                            <div className="mt-4 space-y-2">
                                <div className="h-6 w-3/4 bg-gray-800/50 rounded"></div>
                                <div className="h-4 w-1/2 bg-gray-800/50 rounded"></div>
                            </div>

                            {/* Bottom Stats Row (Time, Kcal, Rating) */}
                            <div className="flex gap-4 mt-6">
                                <div className="h-4 w-16 bg-gray-800/50 rounded"></div>
                                <div className="h-4 w-20 bg-gray-800/50 rounded"></div>
                                <div className="h-4 w-12 bg-gray-800/50 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}