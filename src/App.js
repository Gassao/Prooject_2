
import React, { Component } from 'react';
import './App.css';
import Main from './Components/project/Main';


class App extends Component {
  constructor() {
    
    super()
  }
  render() {

    return (
      <div style={{ backgroundColor: '#F0E68C' }}>
        <h1 style={{ textAlign: "center" }}> Project React</h1>
        <hr />
        <Main/>
     

      </div>)
  }

}


export default App