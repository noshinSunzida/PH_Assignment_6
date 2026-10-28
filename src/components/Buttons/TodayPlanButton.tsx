"use client";
import { CardContext } from '@/context/CardProvider';
import { IWorkoutCards } from '@/types/WorkoutCardsType';
import React, { useContext } from 'react';

const TodayPlanButton = ({card}:{card:IWorkoutCards}) => {

    const {todaysplanCards, setTodaysplanCards} = useContext(CardContext)

    const handlePlan = () =>{
        setTodaysplanCards([...todaysplanCards, card])
    }
    return (
        <div>
            <button className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors"
            onClick={() => handlePlan()}>
                    Add to todays plan </button>
                        
        </div>
    );
};

export default TodayPlanButton;