import React from 'react'
import './SupportSection.css'
import suppImage from '../../../img/support.jpeg'

const SupportSection = () => (
    <section className='supportSection'>
        <h4>Support FAU</h4>
        <div>
            <img src={suppImage} alt='SupportImage' />
            <p>Support FAU by donating innovation</p>
        </div>
    </section>
)


export default SupportSection
