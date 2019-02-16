import React, { Component } from "react";
import logo from "./logo.svg";
import { TEST } from "./actions/testAction";
import "./App.css";
const { connect } = require("react-redux");

//declaring an interface for state is necessary due to default readonly state { }
interface State {
  name: string;
}
interface Props {
  data: string;
  dispatch: any;
  staticContext: any;
  __proto__: object;
}

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "test"
    };
  }

  componentDidMount() {}

  render() {
    let Name: string = "testString";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.name}</p>
          <p>{this.props.data}</p>
          <button
            onClick={() => {
              const testFunction = (name: string) => {
                this.setState({ name });
                return (Name = name);
              };

              let data: string = "dataTest";
              console.log(this.props.dispatch({ type: TEST, data }));
              console.log(this.props);
              testFunction("benoit");
            }}
          />
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

const mapStateToProps = (state: any) => {
  return {
    data: state.testReducer.data
  };
};

const Connected = connect(mapStateToProps)(App);

export default Connected;