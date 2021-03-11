import React from 'react';


import './FormInput.styles.scss';

const FormInput = ({ Changes, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={Changes} {...otherProps} />
            {
                label ? (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                    : null
            }
        </div>
    )
}

export default FormInput;