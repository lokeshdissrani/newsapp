
import './App.css';

import React, { Component } from 'react'

import Navbar from './components/Navbar';
import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

export default class App extends Component {

  constructor(){
    super();
    this.state= {
        pageSize:"100",
        category:"business",
        country:"IN"

    }
}
    updatepage = async (newData) => {
      this.setState({pageSize:newData},() => { console.log('new state', this.state);});
      
    };
    updatecountry = async (newData) => {
      this.setState({country:newData});
};
    updatecategory = async (newData) => {
      this.setState({category:newData});
};
  render() {

    
    
    return (
      <div>
          <Navbar updatecategory={this.updatecategory} updatepage={this.updatepage} updatecountry={this.updatecountry} />
          <News pageSize={this.state.pageSize}  country={this.state.country} category={this.state.category} />
        
      </div>
    )
  }
}




