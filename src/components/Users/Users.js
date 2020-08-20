import React, { Component } from 'react'

export default class Users extends Component {
  render() {
    const { users } = this.props;
    console.log(users);
    return <div>{users.map(user => {
      const { login, name, picture } = user;
      return <p key={login.uuid}>{user.name.first}</p>
    } )}</div>;
    
  }
}
