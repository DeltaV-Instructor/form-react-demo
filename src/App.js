//1. imports
import React from "react";
//bootstrap form
import ListGroup from "react-bootstrap/ListGroup";

//form html
//class
//select for form
//diff between forms
//event listeners
//state for user name and sorted data
//going to filter helper function for selecting even or odd or all numbers.
// we have to update state and with forms it can be weird.
//helper functions will be for taking in form data, also taking in form input as user is typing it.
//2.
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.Component {
  //is a good place to add our helper functions

  render() {
    console.log("🚀 ~ file: App.js:18 ~ data", data);
    let numbers = data.map((number,index) => {
      return (
        <ListGroup.Item key={index}>{number}</ListGroup.Item>
      ) 

    });

    return (
      <>
        <header>Forms in React</header>
        <main>
          <ListGroup>{numbers}</ListGroup>
        </main>
      </>
    );
  }
} // closes our class....

//3.
export default App;
