import React from 'react';
import IntroSection from '../../../.components/auth/IntroSection';
import classes from './page.module.scss';
import Textfield from '../../../.components/ui/Textfield';
import Passwordfield from '../../../.components/ui/Passwordfield';
import Button from '@/.components/ui/Button';
import photo from "@/../public/auth/login.png"
const Page = () => {
    return (
        <div className={classes.page}>
            <IntroSection photo={photo} text='Continue Learnging' />
            <div className={classes.Login} >
                <form className={classes.form}>
                    <Textfield title='Username:' name='username' />
                    <Passwordfield title='Password:' name='password' />
                    <Button title='Login' style={{ width: '60%' }} />
                </form>
                <button className={classes.join}>No Account ? JOIN US</button>
            </div>
        </div>
    );
}

export default Page;
