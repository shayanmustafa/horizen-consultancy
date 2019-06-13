import React, { Component } from 'react'
import NavBar from '../components/navbar'
import '../styles/home.css'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <NavBar />
                <h1 className="title">Home Route</h1>
            </div>
        )
    }
}

export default Home