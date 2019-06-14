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
                <main className="about-main1">
                    <div className="section-1">
                        <div className="about-info">
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div className="section-2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </main>
                <main className="about-main2">
                    <div className="section-3">
                        <h2>Our Team</h2>
                    </div>
                    <div className="section-4">
                        <div className="section-4-1"></div>
                        <div className="section-4-2"></div>
                        <div className="section-4-3"></div>
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