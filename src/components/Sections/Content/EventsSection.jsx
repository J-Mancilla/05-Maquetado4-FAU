

import React from 'react'

import FillButton from '../../Buttons/FillButton'
import './EventsSecion.css'

const EventsSection = () => (
    <section className='eventsSection'>
        <h4>Events</h4>
        {
            events.map(({day, month, hour, title}, index) => (
                <div className='event' key={`eventNum${index}`}>
                    <div className='date'>
                        <p>{month}</p>
                        <p>{day}</p>
                    </div>
                    <div className='details'>
                        <p>{hour}</p>
                        <p>{title}</p>
                    </div>
                </div>
            ))
        }
        <FillButton text='More events'  />
        
    </section>
)

const events = [
    {
        day:   '27',
        month: 'APR',
        hour:  '7:00 pm - 8:00 pm',
        title: 'Online meetup for interested students: International Information Systems'
    },
    {
        day:   '28',
        month: 'APR',
        hour:  '6:15 pm - 7:45 pm',
        title: 'Lecture Series in Climate Protection: Sustainability in a Post-Pandemic World'
    },
    {
        day:   '05',
        month: 'MAY',
        hour:  '6:15 pm - 7:45 pm',
        title: 'Lecture Series in Climate Protection: Economic Case for a Sustainable Recovery from COVID-19'
    },
    {
        day:   '12',
        month: 'MAY',
        hour:  '6:15 pm - 7:45 pm',
        title: 'Lecture Series in Climate Protection'
    },
    {
        day:   '19',
        month: 'MAY',
        hour:  '6:15 pm - 7:45 pm',
        title: 'Lecture Series in Climate Protection'
    }
]


export default EventsSection
