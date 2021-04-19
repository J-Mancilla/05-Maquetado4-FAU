import React from 'react'
import './CardsSection.css'

import Card from './Card'
import img1 from '../../img/FAU-eei_Hartfiel-quadrat-480x480.jpg'
import img2 from '../../img/Hoersaal_0981_minx-quadrat-480x480.jpg'
import img3 from '../../img/Themenbox_Arbeiten-an-der-FAU-quadrat-480x480.jpg'

const CardsSection = () => (
    <section className = 'cardsSection'>
        <Card  text = 'Study at FAU' image = {img2}/>
        <Card  text = 'RESEARCH AT FAU' image = {img1}/>
        <Card  text = 'Work at fau' image = {img3}/>
    </section>
)


export default CardsSection
