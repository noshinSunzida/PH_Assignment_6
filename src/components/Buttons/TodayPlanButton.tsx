"use client";
import { CardContext } from '@/context/CardProvider';
import { IWorkoutCards } from '@/types/WorkoutCardsType';
import { CalendarPlus, Check } from 'lucide-react';
import React, { useContext, } from 'react';
import { toast } from 'react-toastify';

const TodayPlanButton = ({card}:{card:IWorkoutCards}) => {

    const {todaysplanCards, setTodaysplanCards} = useContext(CardContext)

    const isAdded = todaysplanCards.some(
        (item) => item.id === card.id
    );

    const handlePlan = () =>{

        if (isAdded) return;

        setTodaysplanCards([...todaysplanCards, card])
        toast.success(`${card.name} added to today's plan!`);
    }
    return (
        <div>
            <button className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-semibold py-3 px-6 rounded-xl cursor-pointer  transition-colors" 
            onClick={() => handlePlan()} disabled={isAdded}>{isAdded ? (
                    <div className="gap-2 flex items-center">
                        <Check size={18} />
                        Added to today's plan
                    </div>
                ) : (
                    <div className="gap-2 flex items-center">
                        <CalendarPlus size={18} />
                        Add to today's plan
                    </div>
                )}
            </button>
               
                    
                        
        </div>
    );
};

export default TodayPlanButton;