"use client"
import { signup } from '@/utils/actions';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import IntroSection from '../../../.components/auth/IntroSection';
import classes from './page.module.scss';
import Textfield from '../../../.components/ui/Textfield';
import Passwordfield from '../../../.components/ui/Passwordfield';
import Button from '@/.components/ui/Button';
import photo from "@/../public/auth/signup.png"
const Page = () => {
    const router = useRouter();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    async function handleStudent() {
        if (usernameRef.current && passwordRef.current) {
            setIsDisabled(true);
            const res = await signup({ username: usernameRef.current.value, password: passwordRef.current.value });
            if (res.error) {
                setError(res.error.message);
                setIsDisabled(false);
            }
            else {
                setError('');
                setSuccess("User Created Successfully");
                setTimeout(() => router.push('/auth/login'), 3000);

            }
        }
    }
    return (
        <div className={classes.page}>
            <IntroSection photo={photo} text='Start Learning NOW' />            <div className={classes.signup} >
                <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                    <Textfield ref={usernameRef} title='Username:' name='username' />
                    <Passwordfield ref={passwordRef} title='Password:' name='password' />
                    <p style={{ color: 'red' }}>{error}</p>
                    <p style={{ color: 'green' }}>{success}</p>
                    <div className={classes.learnButtons}>
                        <Button disabled={isDisabled} onClick={handleStudent} title='I want to learn' style={{ width: '60%' }} />
                        <Button disabled={isDisabled} title='I want to Teach' style={{ width: '60%', backgroundColor: '#C1C1C1' }} />
                    </div>
                </form>
                <button onClick={() => router.push('/auth/login')} className={classes.join}>Already With Us ? Login </button>
            </div>
        </div>
    );
}

export default Page;
