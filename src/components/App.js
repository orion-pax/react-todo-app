import React, { Component } from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Footer from './Footer'

class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Navbar />
                <MainContent />
                <Footer />
            </div>
        )
    }
}

export default App