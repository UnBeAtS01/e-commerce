import React from 'react';

import './signIn.styles.scss';
import CustomButton from '../custom-button/custom-button.components'
import FormInput from '../Forminput/FormInput.components';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { setInside } from '../../redux/cart/cart.action';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();//to override basic form submission event
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
            this.props.setInside();
        } catch (error) {
            console.log(error)
        }
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });//work same as unordered map

    }

    render() {

        return (
            <div className='sign-in' >
                <h2 className='title'>
                    I already have an account
            </h2>
                <span> Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput Changes={this.handleChange} name="email" value={this.state.email} type='email' required label="email" />

                    <FormInput type="password" Changes={this.handleChange} value={this.state.password} name="password" required label="password" />
                    <div className='buttonss'>
                        <CustomButton type="submit" value='submit' > Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }

}
const mapDispatchToProps = dispatch => ({
    setInside: () => dispatch(setInside())
}
)
export default connect(null, mapDispatchToProps)(SignIn);
