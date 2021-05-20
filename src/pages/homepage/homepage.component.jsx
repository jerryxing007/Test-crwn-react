import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.style.scss';

const Homepage = () => (
    <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
        <Directory/>
    </div>
);

export default Homepage;