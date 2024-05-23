import React from 'react';
import HeaderTop from './HeaderTop';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <HeaderTop />
            <header className="bg-[#E2E8F0]">
                <div className="flex justify-between mx-auto max-w-6xl p-3">
                    <Link to="/" className="cursor-pointer">
                        <h1 className="">
                            <span className="font-medium text-slate-500">
                                Galaxy
                            </span>
                            <span className="font-medium text-slate-500">
                                House
                            </span>
                            <span className="font-medium text-slate-700">
                                Managers
                            </span>
                        </h1>
                    </Link>
                    <div className="flex">
                        <div className="flex gap-1 sm:gap-5">
                            <Link to="/">
                                <h1 className="hidden text-slate-500 text-1xl hover:underline  sm:inline">
                                    Home
                                </h1>
                            </Link>
                            <Link to="/about">
                                <h1 className="hidden text-slate-500 text-1xl hover:underline sm:inline">
                                    About
                                </h1>
                            </Link>
                            <Link to="sign-in">
                                <h1 className="text-slate-900 font-normal">
                                    SignIn
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
