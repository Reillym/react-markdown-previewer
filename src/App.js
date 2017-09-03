import React, { Component } from "react";
import marked from "marked";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "# hello, This is Markdown Live Preview"
    };
  }

  generateMarkup(input) {
    const markup = marked(input);
    return { __html: markup, sanitize: true };
  }

  updateValue = value => {
    this.setState({ input: value });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Markdown Preview</h2>
        </div>
        <p className="App-intro">
          Type markdown in the editor and get instant results.
        </p>
        <div className="grid">
          <div className="editor">
            <textarea
              value={this.state.input}
              onChange={e => this.setState({ input: e.target.value })}
              cols="70"
              rows="30"
              autoFocus
            />
          </div>
          <div clasName="markdown">
            <span
              dangerouslySetInnerHTML={this.generateMarkup(this.state.input)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
