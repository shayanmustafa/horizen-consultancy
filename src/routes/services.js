import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/services.css'

class Services extends Component {
    render() {
        return(
            <div className="services-container">
                <header className="services-header">
                    <NavBar />
                </header>
                <main className="services-main">
                    <div className="s-section-1">
                        <h1>Our Services</h1>
                    </div>
                    <div className="s-section-2">
                       <h3>Comprehensive Services</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p> 
                    </div>
                    <div className="s-section-3">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="s-section-4">
                        <div></div>
                        <div></div>
                    </div>
                </main>
                <footer className="services-footer">
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Services