import React from 'react';
import Home from './home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/index" exact component={Home} />
      </div>
    </Router>
    
  );
}

export default App;
