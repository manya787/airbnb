import React from "react"
import photo from './photo-grid.png'
import './index.css'

export default function Hero() {
    return (
        <section className="Hero">
            <img src={photo} className="Hero-Grid" alt="grid"/>
            <h1 className="Header">Online Experiences</h1>
            <p className="Text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}