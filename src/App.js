import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './routes/home'
import About from './routes/about'
import Services from './routes/services'
import Contact from './routes/contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/services/" component={Services} />
                <Route path="/contact/" component={Contact} />
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
