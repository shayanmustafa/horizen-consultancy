import React, { Component } from 'react'
import NavBar from '../components/navbar'
import '../styles/contact.css'

class Contact extends Component {
    render() {
        return(
            <div className="contact-container">
                <NavBar />
                <h1 className="title">Contact Route</h1>
            </div>
        )
    }
}

export default Contact