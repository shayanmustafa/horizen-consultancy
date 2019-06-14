import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/about.css'

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <header className="about-header">
                    <NavBar />
                </header>
                <main className="about-main">
                    <div className="section-1">
                        <h1>About</h1>
                        <h1>Horizen Consultancy</h1>
                    </div>
                    <div className="section-2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
                    </div>
                </main>
                <footer className="about-footer">
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default About