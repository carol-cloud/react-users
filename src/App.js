import React, { Component } from 'react';
import Users from './components/Users/Users.js'
import Toggle from './components/toggle/Toggle.js'

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

  handleShowUsers = (isChecked) => {
    this.setState({showUsers: isChecked});
  }

// refatoração do componente toggle
  render() {
    const { showUsers, users } = this.state;
    return (
      <div>
        <h3>React LifeCycle</h3>
        <Toggle description="Mostrar usuários:" enabled={showUsers} onToggle={this.handleShowUsers}/>
        <hr />
        {/* if showUsers === true, show div */}
        {showUsers && <Users users={users} />}
      </div>
    );
  }
}
