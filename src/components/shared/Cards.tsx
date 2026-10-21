import { IWorkoutCards } from '@/types/WorkoutCardsType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IWorkoutCardsProps{
    cards:IWorkoutCards
}

const Cards = ({cards}: IWorkoutCardsProps) => {
    return (
      <Link href={`/${cards.id}`}>
        <div className="card bg-base-100 w-96 shadow-sm rounded-2xl">
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
      {cards.difficulty}
      <div className="flex gap-2">
                        {cards.muscleGroups?.map((muscle, id) => (
                            <span key={id} className="bg-[#ccff00] text-black text-xs font-semibold px-3 py-1 rounded-full">
                                {muscle}
                            </span>
                        ))}
                    </div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</Link>
    );
};

export default Cards;