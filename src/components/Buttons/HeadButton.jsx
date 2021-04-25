

import React from 'react'
import PropTypes from 'prop-types'

import './HeadButton.css'

const HeadButton = ({text, red, style}) => {
    const decorate = red ? '' : ' ▾'
    return (
        <button className = {red ? 'redHeadButton' : 'headButton '+style}>
            {text.toUpperCase()+decorate}
        </button>
    );
}


HeadButton.propTypes = {
    text:  PropTypes.string.isRequired,
    red:   PropTypes.bool,
    style: PropTypes.string
}

export default HeadButton
