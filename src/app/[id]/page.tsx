import { IWorkoutCards } from '@/types/WorkoutCardsType';
import React from 'react';
import Image from 'next/image';
import TodayPlanButton from '@/components/Cards/TodayPlanButton';
import SaveLaterButton from '@/components/Cards/SaveLaterButton';

interface IWorkoutDetailsProps {
    params: Promise<{
        id: string;
    }>;
}

const getDetails = async (id: string) => {
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const data = await response.json();
    return data;
}

const WorkoutDetails = async ({ params }: IWorkoutDetailsProps) => {

    const { id } = await params;
    const details: IWorkoutCards = await getDetails(id);

    return (
        <div className="bg-[#1e1e24] min-h-screen text-white p-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
                
                {/* Left Side: Image */}
                <div className="flex-1 w-full relative h-150 rounded-3xl overflow-hidden">
                    <Image 
                        src={details.image} 
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="flex-1 w-full flex flex-col gap-6">
                    
                    {/* Header */}
                    <div>
                        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{details.name}</h1>
                        <p className="text-gray-400 text-sm">
                            {details.description}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2">
                        {details.muscleGroups?.map((muscle, id) => (
                            <span key={id} className="bg-[#ccff00] text-black text-xs font-semibold px-3 py-1 rounded-full">
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Stats Table */}
                    <div className="bg-[#25252b] rounded-xl overflow-hidden text-sm">
                        <div className="flex justify-between p-4 border-b border-gray-700">
                            <span className="text-gray-400 uppercase font-semibold">Equipment</span>
                            <span className="text-gray-200 text-right">{details.equipment}</span>
                        </div>
                        <div className="flex justify-between p-4 border-b border-gray-700">
                            <span className="text-gray-400 uppercase font-semibold">Difficulty</span>
                            <span className="text-gray-200 text-right">{details.difficulty}</span>
                        </div>
                        <div className="flex justify-between p-4 border-b border-gray-700">
                            <span className="text-gray-400 uppercase font-semibold">Sets</span>
                            <span className="text-gray-200 text-right">{details.sets}</span>
                        </div>
                        <div className="flex justify-between p-4 border-b border-gray-700">
                            <span className="text-gray-400 uppercase font-semibold">Reps</span>
                            <span className="text-gray-200 text-right">{details.reps}</span>
                        </div>
                        <div className="flex justify-between p-4 border-b border-gray-700">
                            <span className="text-gray-400 uppercase font-semibold">Duration</span>
                            <span className="text-gray-200 text-right">{details.duration}</span>
                        </div>
                        <div className="flex justify-between p-4 border-b border-gray-700">
                            <span className="text-gray-400 uppercase font-semibold">Calories</span>
                            <span className="text-gray-200 text-right">{details.caloriesBurned}</span>
                        </div>
                        <div className="flex justify-between p-4">
                            <span className="text-gray-400 uppercase font-semibold">Rating</span>
                            <span className="text-gray-200 text-right">{details.rating}</span>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div>
                        <h2 className="text-lg font-bold uppercase tracking-wider mb-4">Instructions</h2>
                        <ol className="list-decimal list-inside text-gray-300 text-sm space-y-3">
                            {details.instructions?.map((instruction, id) => (
                                <li key={id}>{instruction}</li>
                            )) || (
                                <>
                                    <li>Lie on the bench with eyes under the bar and feet planted.</li>
                                    <li>Unrack with locked elbows and lower the bar to mid-chest.</li>
                                    <li>Press up in a slight arc until elbows lock without bouncing.</li>
                                    <li>Keep shoulder blades pinched and a natural arch in the back.</li>
                                </>
                            )}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-4">
                        <TodayPlanButton card = {details}/>
                        <SaveLaterButton card = {details}/>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkoutDetails;