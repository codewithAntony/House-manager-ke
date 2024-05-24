import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    signInStart,
    signInSuccess,
    signInFailure,
} from '../redux/user/userSlice';
const SignIn = () => {
    const [formData, setFormData] = useState({});
    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(signInStart);
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
            if (data.success === false) {
                dispatch(signInFailure(data.message));
                return;
            }
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            dispatch(signInFailure(error.message));
        }
    };

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold pb-3">Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="border p-3 rounded-lg"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="border p-3 rounded-lg"
                    onChange={handleChange}
                />
                <button
                    disabled={loading}
                    className="border p-3 rounded-lg bg-[#3C4A5C] text-white font-semibold uppercase hover:opacity-95 disabled:opacity-80"
                >
                    {loading ? 'loading...' : 'SIGN IN'}
                </button>
                <div className="flex gap-2 mt-5">
                    <p>Dont have an account?</p>
                    <Link to={'/sign-up'}>
                        <span className="text-blue-700">Sign up</span>
                    </Link>
                </div>
                {error && <p className="text-red-500 mt-5">{error}</p>}
            </form>
        </div>
    );
};

export default SignIn;
