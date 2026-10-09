import Image from 'next/image';
import logo from '@/assets/logo.png'

const Nav = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className=" hidden lg:flex justify-between p-4 my-1.5">
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt=''></Image>
                        <p className="text-white font-bold">Fit-Log</p>
                    </div>
                    <ul className="flex items-center gap-5">
                        <li><a href="" className="text-lime-300 font-sans bg-lime-900 py-1 px-2 rounded-2xl">Workouts</a></li>
                        <li><a href="" className="text-slate-600 ">My Plan</a></li>
                    </ul>

                    <div className="flex gap-3">
                        <button className="text-slate-600 px-4  font-semibold text-[14px] cursor-pointer">My Plan</button>
                        <button className="text-white rounded-3xl cursor-pointer px-5 py-2  font-semibold text-[14px]">Saved</button>
                    </div>
            
                </div>
                    <hr className="border-gray-600"></hr>
            </div>
            
        </div>
    );
};

export default Nav;