import React, { useState } from 'react';
import { app } from '../firebase';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            await app.sendPasswordResetEmail(email);
            setMessage('Password reset email sent. Check your inbox.');
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div>
            <h1>ForgotPassword</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Send password reset email</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ForgotPassword;
