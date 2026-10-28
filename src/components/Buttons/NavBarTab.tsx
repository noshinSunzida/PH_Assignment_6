"use client";

import Link from "next/link";
import React, { useState } from 'react';

const NavBarTab = () => {
    const [activePage, setActivePage] = useState("Workouts");
    return (
        <div>
           <ul className="flex items-center gap-5">
            <li>
                <Link
                    href="/"
                    onClick={() => setActivePage("Workouts")}
                    className={`text-[14px] py-1.5 px-3 rounded-2xl ${
                        activePage === "Workouts"
                            ? "text-lime-300 bg-lime-900"
                            : "text-slate-400"
                    }`}
                >
                    Workouts
                </Link>
            </li>

            <li>
                <Link
                    href="/MyPlan"
                    onClick={() => setActivePage("MyPlan")}
                    className={`text-[14px] py-1.5 px-3 rounded-2xl ${
                        activePage === "MyPlan"
                            ? "text-lime-300 bg-lime-900"
                            : "text-slate-400"
                    }`}
                >
                    My Plan
                </Link>
            </li>
        </ul>
     
        </div>
    );
};

export default NavBarTab;