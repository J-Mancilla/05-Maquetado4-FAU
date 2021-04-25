import React from 'react'
import PropTypes from 'prop-types'
import './FillButton.css'

const FillButton = ({text}) => (
    <button className='fillButton'>
        {text}
    </button>
)

FillButton.propTypes = {
    text: PropTypes.string.isRequired
}

export default FillButton
