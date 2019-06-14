import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/about.css'

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <header className="page-header">
                    <NavBar />
                </header>
                <main className="page-main">
                    <h1 className="title">About Route</h1>
                </main>
                <footer className="page-footer">
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default About