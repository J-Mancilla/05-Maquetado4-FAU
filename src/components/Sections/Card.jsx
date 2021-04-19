import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

const Card = ({text, image}) => (
    <div className = 'card' style = {{backgroundImage: `url(${image})`}} >
        <p>{text.toUpperCase()}</p>
    </div>
)

Card.propTypes = {
    text:  PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Card
