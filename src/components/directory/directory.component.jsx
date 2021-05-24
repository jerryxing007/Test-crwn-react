import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ManuItem from '../manu-item/manu-item.component';
import { selectorDirectorySections } from '../../redux/directory/directory.selector';

import './directory.style.scss'

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({id, ...otherSectionProps}) => (
                <ManuItem key={id} {...otherSectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector(
    {sections: selectorDirectorySections}
)

export default connect(mapStateToProps)(Directory)


