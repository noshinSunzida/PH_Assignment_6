import Image from 'next/image';
import BannerImg from '@/assets/banner.png'

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto my-10 px-2 ">
            <div className="flex justify-between gap-8 p-16  m-6 items-center bg-[#15171C] rounded-2xl border border-[#262A33]" >
            <section>
                <p className=" font-bold text-[11px] font-sans text-lime-300 mb-7">WORKOUT LIBRARY</p>
                <p className="text-6xl font-bold font-oswald text-white">TRAIN WITH INTENT. LOG <br />EVERY SET.</p>

                <p className="text-2xl md:text-lg text-gray-400 leading-relaxed max-w-xl mt-6">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.
                </p>
                
                <div className="flex gap-3 my-5 text-gray-400">
                   
                    <button className=" text-[15px] cursor-pointer  text-black bg-lime-300 rounded-[10px] px-8 py-3 font-bold">BROWSE WORKOUTS</button>
                </div>
                
            </section>
            <Image src={BannerImg} alt=''></Image>
            
        </div>
        </div>
         
    );
};

export default Banner;