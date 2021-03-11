import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProp }) => {
    return (
        <button className={`${inverted ? 'inverteds' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProp}>
            {children}
        </button>
    )
}

export default CustomButton;