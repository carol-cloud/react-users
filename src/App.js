import React, { Component } from 'react';
import ProjetoBase from './components/ProjetoBase/ProjetoBase';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      showUsers: false,
    };
  }
  async componentDidMount() {
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    );

    const json = await res.json();
    this.setState({
      users: json.results,
    });
  }
  componentDidUpdate() {
    console.log('componentDidUpdate de App.js');
  }

  componentDidWillUnMount() {
    console.log('componentDidWillUnMount de App.js');
  }

  render() {
    return (
      <div>
        <div className="switch">
          <label>
            Mostrar usuários:
            <input type="checkbox" />
            <span className="lever"></span>
          </label>
        </div>
        <hr />
        <div>Users</div>
      </div>
    );
  }
}
