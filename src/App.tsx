import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//declaring an interface for state is necessary due to default readonly state { }
interface State { name: string } 
interface Props { }
class App extends Component<Props, State> {

  constructor(props:any) {
      super(props);
      this.state = { 
        name: "test"
      }
      
    }



    componentDidMount() {

     

    }

  render() {

     let Name : string = "testString";
      
      


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name}
          </p>
          <button onClick={() => {

            const testFunction = (name: string) => {
            this.setState({ name })
          return Name = name 
      };

      console.log(testFunction("benoit"));

          }}></button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
