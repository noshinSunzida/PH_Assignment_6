"use client";

import { CardContext } from "@/context/CardProvider";
import { IWorkoutCards } from "@/types/WorkoutCardsType";
import { Bookmark, Check } from "lucide-react";
import React, { useContext } from "react";



const SaveLaterButton = ({card}: {card:IWorkoutCards}) => {
    const { savedCards, addToSaved } = useContext(CardContext);

    const isSaved = savedCards.some(
        (item) => item.id === card.id
    )

    

    return (
        <button
            className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white cursor-pointer font-semibold py-3 px-6 rounded-xl"
            onClick={() => addToSaved(card)}>
                {isSaved ? (
                <div className="flex items-center gap-2 ">
                    <Check size={18} />
                    Already Saved
                </div>
            ) : (
                <div className="flex items-center gap-2 ">
                    <Bookmark size={18} />
                    Save for later
                </div>
            )}
        </button>
        
    );
};

export default SaveLaterButton;
