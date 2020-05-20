// import React from 'react';
import './App.css';
import React, { Component } from 'react';
import BasicInfo from './BasicInfo/BasicInfo'


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
        person: [
          {
          name: 'Jose',
          number: 7041234567,
          DOB: '04/09/1994'},
          {
            name: 'Juan',
            number: 7044034567,
            DOB: '08/04/1903'},{
              name: 'John',
              number: 7041238467,
              DOB: '11/28/1989'}
        ]
      }
  } 
 
  render(){
    return (
      
        <BasicInfo person={this.state.person}/>

      
    )
  }
}


// MEDIUM: Replace all of the hard-coded with
//  data from ‘this.state.person’ in the constructor. 
//   Then take the returned ‘div’ and create a 
//   component, pass state into it and import it
//    as ‘BasicInfo’. (This challenge should not
//      change the look of the page)





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
