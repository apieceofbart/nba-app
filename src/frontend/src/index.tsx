import * as React from "react";
import * as ReactDOM from "react-dom";

type AppProps = {
  greetings?: string;
};

class App extends React.Component<AppProps> {
  static defaultProps = {
    greetings: "Hello there!"
  };
  render() {
    return <h1>{this.props.greetings}</h1>;
  }
}

ReactDOM.render(<App greetings="Hello Typescript and React!" />, document.getElementById("root"));
