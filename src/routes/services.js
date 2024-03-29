import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Slide from 'react-reveal/Slide';
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
                        <Slide down>
                            <div className="services-info">
                                <h1>Our Services</h1>
                                <p>What do we provide?</p>
                            </div>
                        </Slide>
                    </div>
                    <Slide up>
                        <div className="s-section-2">
                        <h3>Comprehensive Services</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p> 
                        </div>
                    </Slide>
                    <Slide left>
                        <div className="s-section-3">
                            <div className="s-section-3-1">
                            <h5>Service A</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className="s-section-3-2">
                            <h5>Service B</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </Slide>
                    <Slide left>
                        <div className="s-section-4">
                            <div className="s-section-4-1">
                            <h5>Service C</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className="s-section-4-2">
                            <h5>Service D</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </Slide>     
                </main>
                <footer className="services-footer">
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Services