"use client";

import MyPlanCardList from '@/components/shared/MyPlanCardList';
import { CardContext } from '@/context/CardProvider';
import { IWorkoutCards } from '@/types/WorkoutCardsType';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {

    const {todaysplanCards,savedCards} = useContext(CardContext)

    const [activeTab,setActiveTab] = useState<"Today's Plan"| "Saved">("Today's Plan");
    const [sortBy,setSortBy] = useState<"duration"| "rating" | "calories">("duration");

    const currentCards = activeTab === "Today's Plan" ? todaysplanCards : savedCards;

    const totalExercise = currentCards.length
    const totalMinutes = currentCards.reduce((sum , value) => sum + value.duration,0);
    const totalCalories = currentCards.reduce((sum , value) => sum + value.caloriesBurned,0);

    const sortCards = (card:IWorkoutCards[]) => {
        const sortedCards = [...card];

        if(sortBy === "duration"){
            sortedCards.sort((a,b) => a.duration - b.duration)
        }
        else if(sortBy === "calories"){
            sortedCards.sort((a,b) => a.caloriesBurned - b.caloriesBurned)
        }
        else if(sortBy === "rating"){
            sortedCards.sort((a,b) => a.rating - b.rating)
        }

        return sortedCards;
    }
    

    const sortedTodaysPlanCards = sortCards(todaysplanCards);
    const sortedSavedCards = sortCards(savedCards);

    return (
        <div className="max-w-7xl mx-auto w-full gap-8 p-16 ">
            <p className="text-white font-bold text-2xl ml-3">MY PLAN</p>
            <p className="text-white mb-7 ml-3">Cap of five lifts for today. Finish them, then load more.</p>

            <div className="max-w-7xl mx-auto flex flex-col  gap-6 px-4 ">
            {/* Added w-full here */}
            <div className="stats stats-vertical lg:stats-horizontal shadow bg-[#15171C] rounded-2xl border border-[#262A33] ">
                <div className="stat text-amber-50">
                    <div className="stat-title text-amber-50">Exercises</div>
                    <div className="stat-value">{totalExercise}</div>
                    
                </div>

                <div className="stat text-amber-50">
                    <div className="stat-title text-amber-50">Minutes</div>
                    <div className="stat-value">{totalMinutes}</div>
                    
                </div>

                <div className="stat text-amber-50">
                    <div className="stat-title text-amber-50">Calories</div>
                    <div className="stat-value">{totalCalories}</div>
                    
                </div>
            </div>

            
            
<div>
    
    <div className="flex items-center justify-between rounded-xl bg-[#15171C] p-2">
        <div className="flex gap-2">
            <button
                onClick={() => setActiveTab("Today's Plan")}
                className={`rounded-lg px-4 py-2 text-sm cursor-pointer ${
                    activeTab === "Today's Plan"
                        ? "bg-[#252832] text-white"
                        : "text-gray-400"
                }`}
            >
                Today's Plan
            </button>

            <button
                onClick={() => setActiveTab("Saved")}
                className={`rounded-lg px-4 py-2 text-sm cursor-pointer ${
                    activeTab === "Saved"
                        ? "bg-[#252832] text-white"
                        : "text-gray-400"
                }`}
            >
                Save for later
            </button>
        </div>

        <div className="flex items-center gap-2 px-3">
            <p className="whitespace-nowrap text-sm  text-white">Sort By</p>
            <select value={sortBy} onChange={(e)=> setSortBy(e.target.value as "duration"| "rating" | "calories" )}
              className="select select-sm">
                <option value="duration">Duration</option>
                <option value="rating">Rating</option>
                <option value="calories">Calories</option>
            </select>
        </div>
    </div>

    {/* Selected tab content */}
    <div className="mt-4 flex flex-col gap-3">
        {activeTab === "Today's Plan" ? (
            sortedTodaysPlanCards.length > 0 ? (
                sortedTodaysPlanCards.map((card: IWorkoutCards) => (
                    <MyPlanCardList key={card.id} card={card} />
                ))
            ) : (
                <p className="mt-4 text-white bg-[#15171C] rounded-2xl border text-center border-[#262A33] py-7">
                    No workouts added yet.
                </p>
            )
        ) : (
            sortedSavedCards.length > 0 ? (
                sortedSavedCards.map((card: IWorkoutCards) => (
                    <MyPlanCardList key={card.id} card={card} />
                ))
            ) : (
                <p className="mt-4 text-white bg-[#15171C] rounded-2xl border border-[#262A33] text-center py-7">
                    No saved workouts added yet.
                </p>
            )
        )}
    </div>
</div>


            

        </div>
        </div>
    );
};

export default MyPlanPage;