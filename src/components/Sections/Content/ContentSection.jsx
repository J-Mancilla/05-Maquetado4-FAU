import React from 'react'
import './ContentSection.css'

import NewsSection from './NewsSection'
import SupportSection from './SupportSection'
import EventsSection from './EventsSection'

const ContentSection = () => (
    <section className = 'contentSection'>
        <NewsSection />
        <SupportSection  />
        <EventsSection  />
    </section>
)


export default ContentSection
