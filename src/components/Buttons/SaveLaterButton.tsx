"use client";

import { CardContext } from "@/context/CardProvider";
import { IWorkoutCards } from "@/types/WorkoutCardsType";
import { Bookmark, Check } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";


const SaveLaterButton = ({card}: {card:IWorkoutCards}) => {
    const { savedCards, setSavedCards } = useContext(CardContext);

    const isSaved = savedCards.some(
        (item) => item.id === card.id
    );

    const handleSavedPlan = () => {

        if (isSaved) return;
        setSavedCards([...savedCards, card])
        toast.success(`${card.name} saved for later!`);

    }

    return (
        <button
            className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white cursor-pointer font-semibold py-3 px-6 rounded-xl"
            onClick={() => handleSavedPlan()} disabled={isSaved}>{isSaved ? (
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
