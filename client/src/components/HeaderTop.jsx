import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { MdPhone } from 'react-icons/md';

const HeaderTop = () => {
    return (
        <header className="bg-[#F9F9FA]">
            <div className="mx-auto max-w-6xl p-3 ">
                <div className="flex flex-col gap-2">
                    <div className="sm:flex sm:gap-8">
                        <div className="flex items-center gap-1 sm:gap-2">
                            <CiLocationOn />
                            <h2 className="font-medium sm:text-1xl text-gray-700">
                                Galaxy House Managers, Nairobi Kenya
                            </h2>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-2">
                            <MdPhone />
                            <h2 className="font-medium sm:text-1xl text-gray-700">
                                +254 725 010 898
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderTop;
