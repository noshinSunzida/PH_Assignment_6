import Image from 'next/image';
import BannerImg from '@/assets/banner.png'

const Banner = () => {
    return (
         <div className="flex justify-between  max-w-7xl mx-auto m-6 items-center bg-[#15171C] " >
            <section>
                <p className=" font-bold text-[11px] font-inter text-lime-300">WORKOUT LIBRARY</p>
                <p className="text-5xl font-bold font-inter text-white">TRAIN WITH INTENT. LOG</p>
                <p className="text-5xl font-bold text-white py-8 ">EVERY SET.</p>
                <div className="flex gap-3 my-5">
                   
                    <button className=" text-[10px] cursor-pointer  text-black bg-lime-500 rounded-[10px] px-8 py-2 font-bold">BROWSE WORKOUTS</button>
                </div>
                
            </section>
            <Image src={BannerImg} alt=''></Image>
            
        </div>
    );
};

export default Banner;