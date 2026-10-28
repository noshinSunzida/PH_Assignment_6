import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IWorkoutCards } from "@/types/WorkoutCardsType";
import { CardContext } from "@/context/CardProvider";

const MyPlanCardList = ({ card }: { card: IWorkoutCards }) => {

     const { todaysplanCards, setTodaysplanCards, savedCards, setSavedCards } =
        useContext(CardContext);

    const [isDone, setIsDone] = useState(false);

    const handleRemove = () => {
        setTodaysplanCards(
            todaysplanCards.filter((item) => item.id !== card.id)
        );
        
     setSavedCards(
            savedCards.filter((item) => item.id !== card.id)
    ); 
}  
    return (
        <div className="flex items-center justify-between gap-4 rounded-xl bg-[#15171C] p-4">
            
            <div className="flex min-w-0 flex-1 items-center gap-3">
                <Image
                    src={card.image}
                    alt={card.name}
                    width={110}
                    height={65}
                    className="h-[65px] w-[105px] shrink-0 rounded-lg object-cover"
                />

                <div className="min-w-0">
                    <h2 className="truncate text-sm font-bold uppercase text-white">
                        {card.name}
                    </h2>

                    <p className="truncate text-xs text-gray-400">
                        {card.equipment}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                        <span>◷ {card.duration} min</span>
                        <span>🔥 {card.caloriesBurned} kcal</span>
                        <span>☆ {card.rating}</span>
                    </div>
                </div>
            </div>

            
            <div className="flex shrink-0 items-center gap-2">
                <Link
                    href={`/${card.id}`}
                    className="hidden rounded-full border border-[#343844] px-4 py-2 text-xs text-gray-300 hover:bg-[#252832] sm:inline-block"
                >
                    View Details
                </Link>

                <button  className="rounded-full bg-[#DFFF00] px-3 py-2 text-xs font-semibold text-black hover:bg-lime-300 cursor-pointer" 
                onClick={() => setIsDone(true)} disabled={isDone}>
                    
                    {isDone ? "✓ Completed" : "✓ Mark as Done"}
                </button>

                <button
                    aria-label="Remove workout" onClick={handleRemove}
                    className="hidden px-1 text-gray-500 hover:text-white sm:block"
                >
                    ×
                </button>
            </div>
        </div>
    
    );
};

export default MyPlanCardList;
