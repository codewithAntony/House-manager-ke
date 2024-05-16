import React from 'react';
import HeaderTop from './HeaderTop';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <HeaderTop />
            <header className="bg-[#E2E8F0]">
                <div className="flex mx-auto max-w-6xl p-3">
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
                </div>
            </header>
        </div>
    );
};

export default Header;
