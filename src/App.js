import React, { Component } from 'react';
import Dashboard from './Dashboard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      catToAdopt: {
        imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street'
      },
      dogToAdopt: {
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Zeus',
        sex: 'Male',
        age: 3,
        breed: 'Golden Retriever',
        story: 'Owner Passed away'
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Dashboard catToAdopt={this.state.catToAdopt} dogToAdopt={this.state.dogToAdopt} />
      </div>
    );
  }
}

export default App;
