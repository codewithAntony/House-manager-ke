import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold pb-3">Sign Up</h1>
            <form className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    className="border p-3 rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    className="border p-3 rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Password"
                    id="password"
                    className="border p-3 rounded-lg"
                />
                <button className="border p-3 rounded-lg bg-[#3C4A5C] text-white font-semibold uppercase hover:opacity-95 disabled:opacity-80">
                    SIGN UP
                </button>
                <div className="flex gap-2 mt-5">
                    <p>Have an account?</p>
                    <Link to={'/sign-in'}>
                        <span className="text-blue-700">Sign in</span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
