"use client";

import { CardContext } from "@/context/CardProvider";
import { IWorkoutCards } from "@/types/WorkoutCardsType";
import React, { useContext } from "react";

const SaveLaterButton = ({card}: {card:IWorkoutCards}) => {
    const { savedCards, setSavedCards } = useContext(CardContext);

    const handleSavedPlan = () => {
        setSavedCards([...savedCards, card])

    }

    return (
        <button
            className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl"
            onClick={() => handleSavedPlan()}>Save for later</button>
        
    );
};

export default SaveLaterButton;
