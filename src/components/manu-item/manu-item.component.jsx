import React from 'react';
import './manu-item.style.scss'

const ManuItem = ({title, id, imageUrl, size}) => (
    <div key={id} className={`${size} menu-item`}>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default ManuItem
