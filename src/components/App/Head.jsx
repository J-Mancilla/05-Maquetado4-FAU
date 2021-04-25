import React from 'react'

import './Head.css'
import Dialog from './Dialog'
import HeadButton from '../Buttons/HeadButton'

import faulogo from '../../img/fau-logo-240x65.svg'

const Head = () => (
    <>
        <div className = 'whiteSpace'></div>
        <header>
            <Dialog  />
            <div className = 'headContainer'>
                <img src = {faulogo} alt = 'logo'/>
                <div className = 'buttons'>
                    {
                        buttons.map((text, index) => (
                            <HeadButton text = {text} style = {index===0 ? 'selected':''} red = {index===buttons.length-1 ? true : false} key = {`btnHead${index}`} />
                        ))
                    }
                </div>
            </div>
           
        </header>
    </>
)

const buttons = [
    'fau', 'people', 'education', 'research', 'outreach' , 'corona-info'
]


export default Head
