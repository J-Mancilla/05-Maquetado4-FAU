import React from 'react'
import './NewsSection.css'
import FillButton from '../../Buttons/FillButton'

import new1 from '../../../img/new1.jpeg'
import new2 from '../../../img/new2.jpeg'
import new3 from '../../../img/new3.jpeg'

import NewCard from './NewCard'

const NewsSection = () => (
    <section className = 'newsSection'>
        {
            news.map(({title, image, description}, index) => (
                <NewCard title = {title} image = {image} description = {description} key = {`newCard${index}`}  />
            ))
        }
        <FillButton text='More news'  />
    </section>
)

const news = [
    {
        title:       'Now available to download: The new semester ticket',
        image:       new1,
        description: 'The basic ticket for VGN is now available to download or print.'
    },
    {
        title:       'Election of FAU Vice Presidents',
        image:       new2,
        description: 'The University Council has elected a new member to the Executive Board: Prof. Dr. Georg Schett will become Vice President Research on 1 April and succeed Prof. Dr. Günter Leugering, who is retiring. The previous board members Prof. Dr. Friedrich Paulsen, Prof. Dr. Bärbel Kopp,and Prof. Dr. Kathrin M. Möslein, were all re-elected via postal vote.'
    },
    {
        title:       'Hope for people with sensitive teeth',
        image:       new3,
        description: 'People with sensitive teeth are all too familiar with the painful sensation they experience as soon as they start eating ice cream. The cold thermoreceptor TRPC5 is responsible for sensitivity to cold temperatures in teeth. This is what an international team of researchers led by Prof. Dr. Katharina Zimmerman has now discovered.'
    }
]

export default NewsSection
