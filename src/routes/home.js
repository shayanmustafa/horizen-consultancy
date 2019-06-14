import React, { Component } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/home.css'
import posed from 'react-pose';
import SplitText from 'react-pose-text';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <header className="page-header">
                    <NavBar />
                </header>
                <main className="page-main">
                    <div>
                        <div class="text-wrapper title-wrapper">
                            <h1><SplitText initialPose="exit" pose="enter" 
                            charPoses={{exit: { opacity: 0 },
                            enter: { opacity: 1, delay: ({ charIndex }) => charIndex * 50 }}}>
                            Get your ERP solutions
                        </SplitText></h1>
                        </div>
                        <div class="text-wrapper p-wrapper">
                            <p><SplitText initialPose="exit" pose="enter" 
                            charPoses={{exit: { opacity: 0 },
                            enter: { opacity: 1, delay: ({ charIndex }) => charIndex * 10 }}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </SplitText></p>
                        </div>
                        <div class="text-wrapper p-wrapper">
                        <p><SplitText initialPose="exit" pose="enter" 
                            charPoses={{exit: { opacity: 0 },
                            enter: { opacity: 1, delay: ({ charIndex }) => charIndex * 10 }}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </SplitText></p>
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