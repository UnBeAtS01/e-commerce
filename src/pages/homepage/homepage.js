import { render } from '@testing-library/react';
import React from 'react';
import './homepage.scss';
import Directory from '../../components/directory/directory.components'
const Homepage = () => {
    return (
        <div className='homepage'>
            <Directory />

        </div>
    )

}
export default Homepage;