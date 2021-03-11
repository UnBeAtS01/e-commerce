import React from 'react';

import './sign-up.styles.scss';
import FormInput from '../Forminput/FormInput.components';
import CustomButton from '../custom-button/custom-button.components';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmpassword } = this.state;
        if (password !== confirmpassword) {
            alert("passwords don't match");
            return;
        }
        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmpassword: ''
            });
        } catch (error) {
            console.error(error)
        }


    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const { displayName, email, password, confirmpassword } = this.state;
        return (
            <div className='sign-Up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    ></FormInput>
                    <FormInput type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    ></FormInput>
                    <FormInput type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    ></FormInput>
                    <FormInput type='password'
                        name='confirmpassword'
                        value={confirmpassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    ></FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>
        );
    }
}

export default SignUp;