import React from 'react';
import IntroSection from '../../../.components/auth/IntroSection';
import classes from './page.module.scss';
import Textfield from '../../../.components/ui/Textfield';
import Passwordfield from '../../../.components/ui/Passwordfield';
import Button from '@/.components/ui/Button';
import photo from "@/../public/auth/signup.png"
const Page = () => {
    return (
        <div className={classes.page}>
            <IntroSection photo={photo} text='Start Learning NOW' />            <div className={classes.signup} >
                <form className={classes.form}>
                    <Textfield title='Username:' name='username' />
                    <Passwordfield title='Password:' name='password' />
                    <div className={classes.learnButtons}>
                        <Button title='I want to learn' style={{ width: '60%' }} />
                        <Button title='I want to Teach' style={{ width: '60%', backgroundColor: '#C1C1C1' }} />
                    </div>

                </form>
                <button className={classes.join}>Already With Us ? Login </button>
            </div>
        </div>
    );
}

export default Page;
