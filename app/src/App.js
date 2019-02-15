import React, { Component } from 'react';
import axios from 'axios';

const baseURL = `https://brandonlent-projects-actions.herokuapp.com/`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      actions: [],
    };
  }

  componentDidMount() {
    this.getProjects();
    this.getActions();
  }
  getProjects = () => {
    axios
      .get(`${baseURL}/projects`)
      .then(res => this.setState({ projets: res.data }))
      .catch(err => console.log(err));
  };
  getActions = () => {
    axios
      .get(`${baseURL}/actions`)
      .then(res => {
        this.setState({ actions: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>my app</h1>
      </div>
    );
  }
}

export default App;
