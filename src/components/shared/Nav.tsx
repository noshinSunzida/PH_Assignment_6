import Image from 'next/image';
import logo from '@/assets/logo.png'
import NavBarButtons from '../Buttons/NavBarButtons';
import NavBarTab from '../Buttons/NavBarTab';

const Nav = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className=" hidden lg:flex justify-between p-4 my-1.5">
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt='' width={30} height={20}></Image>
      
                        <p className="text-white font-bold text-[20px]">FITLOG</p>
                    </div>
                    <div>
                        <NavBarTab/>
                    </div>

                    <div className="flex gap-3">
                        <NavBarButtons/>
                    </div>
            
                </div>
                    <hr className="border-gray-800"></hr>
            </div>
            
        </div>
    );
};

export default Nav;