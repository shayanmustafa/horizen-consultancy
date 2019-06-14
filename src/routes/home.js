import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/home.css'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <NavBar />
                <h1 className="title">Home Route</h1>
                <Footer />
            </div>
        )
    }
}

export default Home