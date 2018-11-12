import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './routes/Home';
import Work from './routes/Works';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route exact path='/' component={Home}/>
                <Route exact path='/work' component={Work}/>
            </div>
        </Router>
    );
  }
}

export default App;
