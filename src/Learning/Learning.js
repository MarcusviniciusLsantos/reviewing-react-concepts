import React from "react";

class Learning extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "qualquer",
        color: "red",
        user: {
          name: "teste",
          email: "teste@gmail.com",
          job: "desenv",
          age: 22,
        },
      };
    }
  
    componentDidMount() {
      console.log("name 1", this.state.name);
      console.log("name 2", this.state.name);
      //this.state.user.name = "Larissa";
      
      this.setState({user: { ...this.state.user, name: 'larissa'} });
    }
  
    componentWillUnmount() {}
  
    render() {
      return (
        <div style={{backgroundColor:'orange'}}> 
          <h2 >It is <p style={{color: this.state.color}}>{this.state.name}</p>.</h2>
          <h3>{this.state.user.name}</h3>
          <h4>{this.state.user.job}</h4>
          {this.state.user.age > 18 ? <p>{this.state.user.age}</p> : <p>Você é menor de idade</p>}
          <div > </div>
          <button
            onClick={() =>
              this.setState({ name: "Matheus", color: "blue", user: { ...this.state.user, name: "Luciana", age:17} })
            }>
            troca
          </button>
        </div>
      );
    }
  }
  
  export default Learning;