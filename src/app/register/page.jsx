"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
    const navigation = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                }),
            });
            if (res.status === 201) {
                navigation.push('/login?success=Account has been created');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='John Doe'
                    required
                    name='name'
                    className={styles.input}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    name='email'
                    placeholder='Example123@gmail.com'
                    required
                    className={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name='password'
                    placeholder='............'
                    required
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.button}>Sign Up</button>
            </form>
            <Link href="/login">Already have an account ? Login</Link>
        </div>
    )
}
