import React from 'react';

import './sign-in-sign-out.styles.scss';
import SignIn from '../../components/signIn/signIn.components';
import SignUp from '../../components/sign-up/sign-up.component';
const SignInSignOut = () => {
    return (
        <div className='Signin'>
            <SignIn />
            <SignUp />
        </div>
    )

}

export default SignInSignOut;