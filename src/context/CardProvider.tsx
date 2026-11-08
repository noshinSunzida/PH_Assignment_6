"use client";
import { IWorkoutCards } from '@/types/WorkoutCardsType';
import React, {  createContext, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';

interface IcardContext {
   todaysplanCards: IWorkoutCards[];
   savedCards: IWorkoutCards[];
   setTodaysplanCards: React.Dispatch<React.SetStateAction<IWorkoutCards[]>>;
   setSavedCards: React.Dispatch<React.SetStateAction<IWorkoutCards[]>>;
   addToTodaysPlan: (card: IWorkoutCards) => void;
   addToSaved: (card: IWorkoutCards) => void;
}

export const CardContext = createContext<IcardContext>({
    todaysplanCards: [],
    setTodaysplanCards: () => {},
    savedCards: [],
    setSavedCards: () => {},
    addToTodaysPlan: () => {},
    addToSaved: () => {},
});


const CardProvider = ({children}: {children:ReactNode}) => {

    const [todaysplanCards, setTodaysplanCards] = useState<IWorkoutCards[]>([]);
    const [savedCards, setSavedCards] = useState<IWorkoutCards[]>([]);

    const addToTodaysPlan = (card:IWorkoutCards) => {
        const existsInToday = todaysplanCards.some((item) => item.id === card.id)
        const existsInSaved = savedCards.some((item) => item.id === card.id)
        
        if (existsInToday) {
            toast.info(`${card.name} is already in Today's Plan`);
            return;
        }

        if (existsInSaved) {
            toast.info(`${card.name} is already Saved`);
            return;
        }

        setTodaysplanCards((previous) => [...previous, card]);

        toast.success(`${card.name} added to Today's Plan!`);
    }

    const addToSaved = (card:IWorkoutCards) => {
        const existsInToday = todaysplanCards.some((item) => item.id === card.id)
        const existsInSaved = savedCards.some((item) => item.id === card.id)
        
        if (existsInToday) {
            toast.info(`${card.name} is already in Today's Plan!`);
            return;
        }

        if (existsInSaved) {
            toast.info(`${card.name} is already Saved!`);
            return;
        }

        setSavedCards((previous) => [...previous, card]);

        toast.success(`${card.name} saved for later`);
    }

    const sharedData = {
    todaysplanCards, 
    setTodaysplanCards,
    savedCards,
    setSavedCards,
    addToTodaysPlan,
    addToSaved,
    };

    return (
        <CardContext.Provider value ={sharedData}> {children} </CardContext.Provider>
    );
};

export default CardProvider;