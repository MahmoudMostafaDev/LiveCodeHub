"use client"
import React, { FormEvent, useState } from 'react';
import IntroSection from '../../../.components/auth/IntroSection';
import classes from './page.module.scss';
import Textfield from '../../../.components/ui/Textfield';
import Passwordfield from '../../../.components/ui/Passwordfield';
import Button from '@/.components/ui/Button';
import photo from "@/../public/auth/login.png"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    async function submitHandler(e: FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        if (!formData.get("username") || !formData.get("password")) {
            setError("We don't accept Empty here...")
            return
        }
        const result = await signIn("credentials", { redirect: false, username: formData.get("username"), password: formData.get("password") })
        if (!result?.ok) {
            setError(result?.error as string);
            return
        }

        router.push("/")
    }
    return (
        <div className={classes.page}>
            <IntroSection photo={photo} text='Continue Learnging' />
            <div className={classes.Login} >
                <form className={classes.form} onSubmit={submitHandler}>
                    <Textfield title='Username:' name='username' />
                    <Passwordfield title='Password:' name='password' />
                    <Button title='Login' style={{ width: '60%' }} />
                </form>
                <p style={{ color: "red" }}>{error}</p>
                <button onClick={() => router.push('/auth/signup')} className={classes.join}>No Account ? JOIN US</button>
            </div>
        </div>
    );
}

export default Page;
