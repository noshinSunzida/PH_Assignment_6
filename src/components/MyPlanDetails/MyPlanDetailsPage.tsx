import React from 'react';

const MyPlanDetailsPage = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col  gap-6 px-4">
            {/* Added w-full here */}
            <div className="stats stats-vertical lg:stats-horizontal shadow ">
                <div className="stat text-amber-50">
                    <div className="stat-title text-amber-50">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc text-amber-50">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat text-amber-50">
                    <div className="stat-title text-amber-50">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat text-amber-50">
                    <div className="stat-title text-amber-50">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>

            {/* Added w-full here */}
            <div className="tabs tabs-box ">
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

                <div className="ms-auto flex items-center gap-2 px-3">
                    <p className="whitespace-nowrap text-sm">Sort By</p>
                    <select defaultValue="Pick a color" className="select select-sm">
                        <option disabled={true}>Duration</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select>
                </div>
                
            </div>
        </div>
    );
};

export default MyPlanDetailsPage;