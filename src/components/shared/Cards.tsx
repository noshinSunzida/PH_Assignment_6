import { IWorkoutCards } from '@/types/WorkoutCardsType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFire } from 'react-icons/fa';

interface IWorkoutCardsProps{
    cards:IWorkoutCards
}

const Cards = ({cards}: IWorkoutCardsProps) => {
    return (
      <Link href={`/${cards.id}`}>
        <div className="card bg-[#15171C] w-96 shadow-sm rounded-2xl">
  <figure>
    <Image
      src={cards.image}
      alt={cards.image}
      width={400} 
      height={200}
      className=" h-50 object-cover rounded-t-2xl"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      
      <div className="flex gap-2">
                        {cards.muscleGroups?.map((muscle, id) => (
                            <span key={id} className="bg-[#ccff00] text-black text-xs font-semibold px-3 py-1 rounded-full">
                                {muscle}
                            </span>
                        ))}
                    </div>
    </h2>
    <p className="font-oswald text-2xl font-bold text-amber-50">{cards.name}</p>
    <p className=" text-sm text-gray-400">  {cards.equipment} </p>
    <hr className="border-gray-800"></hr>
                       
                   
    <div className="card-actions justify-start">
       <span className="flex items-center gap-2 text-gray-400">
                            <span>◷</span>
                            {cards.duration} min
                        </span>

                        <span className="flex items-center gap-2 text-gray-400">
                            <FaFire className="text-gray-400" />
                            {cards.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-2 text-gray-400">
                            <span>☆</span>
                            {cards.rating}
                        </span>

    </div>
  </div>
</div>
</Link>
    );
};

export default Cards;