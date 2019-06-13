import React, { Component } from 'react'
import NavBar from '../components/navbar'
import '../styles/about.css'

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <NavBar />
                <h1 className="title">About Route</h1>
            </div>
        )
    }
}

export default About