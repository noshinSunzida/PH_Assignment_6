import { CardContext } from '@/context/CardProvider';
import Link from 'next/link';
import React, { useContext } from 'react';

const NavBarButtons = () => {

    const {todaysplanCards,savedCards} = useContext(CardContext)

    return (
        <div>
            
            <Link href="/MyPlan"><button className="text-slate-400 rounded-3xl cursor-pointer px-1  font-semibold text-[14px]">
                My Plan</button> <span className="text-black text-[13px] font-semibold bg-lime-400 px-1.5 rounded-full">{todaysplanCards.length}</span> </Link>

            <Link href="/MyPlan"><button className="text-slate-400 rounded-3xl cursor-pointer px-2 font-semibold text-[14px]">
                Saved</button> <span className="text-amber-50 text-[13px] font-semibold border border-slate-400 rounded-full px-1">{savedCards.length}</span> </Link>
        </div>
    );
};

export default NavBarButtons;