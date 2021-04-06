import React from "react";
import Example from "./Hooks/Example.js";
import Learning from "./Learning/Learning.js";


class App extends React.Component {

  componentDidMount() {

  }
  render() {
    return (
      <div style={{color: 'red', paddingBottom:'10px'}}>
        <h1>Hello</h1> 
        <Example/> 
        </div>
    );
  }
}

export default App;