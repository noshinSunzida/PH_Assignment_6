"use client";
import Image from 'next/image';
import logo from '@/assets/logo.png'
import NavBarButtons from '../Buttons/NavBarButtons';
import NavBarTab from '../Buttons/NavBarTab';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className=" hidden lg:flex justify-between p-4 my-1.5">
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt='' width={30} height={20}/>
      
                        <p className="text-white font-bold text-[20px]">FITLOG</p>
                    </div>
                    <div>
                        <NavBarTab/>
                    </div>

                    <div className="flex gap-3">
                        <NavBarButtons/>
                    </div>
            
                </div>

                <div className="flex lg:hidden justify-between items-center p-4">

                    <div className="flex items-center gap-2">
                        <Image src={logo} alt="FitLog logo" width={30} height={20} />
                        <p className="text-white font-bold text-[20px]">FITLOG</p>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white text-2xl"
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
                    </button>

                </div>


                {/* Mobile and Tablet Dropdown Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden flex flex-col gap-5 p-5 border-t border-gray-800">

                        <div onClick={() => setIsMenuOpen(false)}>
                            <NavBarTab />
                        </div>

                        <div onClick={() => setIsMenuOpen(false)}>
                            <div className="flex flex-col gap-3">
                                <NavBarButtons />
                            </div>
                        </div>

                    </div>
                )}
                
            </div>
                    <hr className="border-gray-800"/>
        </div>
            
        
    );
};

export default Nav;