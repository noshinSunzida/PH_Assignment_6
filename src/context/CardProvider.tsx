"use client";
import { IWorkoutCards } from '@/types/WorkoutCardsType';
import React, {  createContext, ReactNode, useState } from 'react';

interface IcardContext {
   todaysplanCards: IWorkoutCards[];
   savedCards: IWorkoutCards[];
   setTodaysplanCards: React.Dispatch<React.SetStateAction<IWorkoutCards[]>>;
   setSavedCards: React.Dispatch<React.SetStateAction<IWorkoutCards[]>>;
}

export const CardContext = createContext<IcardContext>({
    todaysplanCards: [],
    setTodaysplanCards: () => {},
    savedCards: [],
    setSavedCards: () => {},
});


const CardProvider = ({children}: {children:ReactNode}) => {

    const [todaysplanCards, setTodaysplanCards] = useState<IWorkoutCards[]>([]);
    const [savedCards, setSavedCards] = useState<IWorkoutCards[]>([]);

    const sharedData = {
    todaysplanCards, 
    setTodaysplanCards,
    savedCards,
    setSavedCards,
    };

    return (
        <CardContext.Provider value ={sharedData}> {children} </CardContext.Provider>
    );
};

export default CardProvider;