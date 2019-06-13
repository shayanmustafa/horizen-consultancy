import React, { Component } from 'react'
import NavBar from '../components/navbar'
import '../styles/services.css'

class Services extends Component {
    render() {
        return(
            <div className="services-container">
                <NavBar />
                <h1 className="title">Services Route</h1>
            </div>
        )
    }
}

export default Services