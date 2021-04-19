import React from 'react'
import PropTypes from 'prop-types'
import './NewCard.css'

const NewCard = ({title, description, image}) => (
    <div className = 'newCard'>
        <h3>{title}</h3>
        <img src = {image}  alt = ''/>
        <p>{description}</p>
    </div>
)


NewCard.propTypes = {
    title:       PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image:       PropTypes.string.isRequired
}

export default NewCard
