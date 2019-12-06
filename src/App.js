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
          <Router basename="/horizen-consultancy">
                <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
                <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
                <Route path={`${process.env.PUBLIC_URL}/services`} component={Services} />
                <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
