"use client";
import { IWorkoutCards } from '@/types/WorkoutCardsType';
import React, {  createContext, ReactNode, useState } from 'react';

interface IcardContext {
   todaysplanCards: IWorkoutCards[];
   setTodaysplanCards: React.Dispatch<React.SetStateAction<IWorkoutCards[]>>;
}

export const CardContext = createContext<IcardContext>({
    todaysplanCards: [],
    setTodaysplanCards: () => {},
});


const CardProvider = ({children}: {children:ReactNode}) => {

    const [todaysplanCards, setTodaysplanCards] = useState<IWorkoutCards[]>([]);

    const sharedData = {
    todaysplanCards, 
    setTodaysplanCards,
    };

    return (
        <CardContext.Provider value ={sharedData}> {children} </CardContext.Provider>
    );
};

export default CardProvider;