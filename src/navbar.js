import React from "react"
import logo from './airbnb-logo.png'
import './index.css'

export default function Navbar() {
    return (
        <nav className="Nav">
            <img src={logo} className="Nav-logo" alt="airbnb-logo"/>
         </nav>
    )
}