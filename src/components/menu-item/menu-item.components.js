import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom'
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
    return (
        //match.url + linkUrl=${match.url}${link.url}--es6feature to catenate the string
        <div className={`${size} menu-item`} onClick={() => history.push(match.url + linkUrl)}>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'>

            </div>
            <div className='content'>
                <h1 className='title'>
                    {title.toUpperCase()}
                </h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>

        </div>

    );
}
export default withRouter(MenuItem);