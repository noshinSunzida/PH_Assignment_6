import Image from 'next/image';
import logo from '@/assets/logo.png'
import React from 'react';

const Footer = () => {
    return (

        <div className="max-w-7xl mx-auto mt-5">
            <hr className="border-gray-800"></hr>
             <div className=" hidden lg:flex justify-between p-5 my-1.5">
    
            <div className="flex items-center gap-3">
                
                        <Image src={logo} alt=''></Image>
                        <p className="text-white font-bold">Fit-Log</p>
            </div>
            <p className="text-slate-400">© 2026 FitLog — Workout Library. Train hard, log honest. </p>
        </div>
        </div>

       
    );
};

export default Footer;