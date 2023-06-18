import React from "react"
import Navbar from "./navbar"
import Hero from "./Hero"
import Card from "./Card"
import Footer from "./footer"

import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
            <Footer />
        </div>
    )
}
