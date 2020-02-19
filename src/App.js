import React from 'react';
import './App.css';
import Countries from './Components/Countries/index.js';


class App extends React.Component {
    render() {
        return (
          <div className="App">
            
            <Countries />
          </div>
        );
    }
}

export default App;
