// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react'
import Person from './Person/Person'

//EASY: Create a ‘constructor’ that takes in
//  ‘props’ , call the ‘super()’ method, and 
//  set ‘this.state’ to an empty object inside 
//  of the ‘App’ class. Inside of ‘this.state’ 
//  create a ‘person’ property and set it to an 
//   object


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        person: {}
      };
  } 
 
 
  
export default App;
