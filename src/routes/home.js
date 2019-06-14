import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/home.css'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <header className="page-header">
                    <NavBar />
                </header>
                <main className="page-main">
                <div>
                    <div class="text-wrapper">
                        <h1>Get your ERP solutions</h1>   
                    </div>
                    <div class="text-wrapper p-wrapper">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                    </div>
                    <div class="text-wrapper p-wrapper">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    </div>
                </main>
                <footer className="page-footer">
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Home