"use client";

import MyPlanDetailsPage from '@/components/MyPlanDetails/MyPlanDetailsPage';
import Cards from '@/components/shared/Cards';
import { CardContext } from '@/context/CardProvider';
import { IWorkoutCards } from '@/types/WorkoutCardsType';
import React, { useContext } from 'react';

const MyPlanPage = () => {

    const {todaysplanCards} = useContext(CardContext)
    return (
        <div className="max-w-7xl mx-auto w-full">
            <p className="text-white font-bold text-2xl">THE LIBRARY</p>
            <p className="text-white">Twelve lifts covering every major muscle group.</p>

            <MyPlanDetailsPage/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
                {todaysplanCards.map((cards:IWorkoutCards) => {
                return <Cards key={cards.id} cards={cards} />
                })}
            </div>

            {todaysplanCards.length === 0 && (
            <p className="text-white mt-4">No workouts added yet.</p>
            )}

        </div>
    );
};

export default MyPlanPage;