import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import JobItem from './components/JobListElement';
import jobs from './data/jobs';
import List from './components/list';
import JobCreationForm from './components/jobcreationform';
const items = ['apple', 'bananana', 'orange'];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <JobCreationForm />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
