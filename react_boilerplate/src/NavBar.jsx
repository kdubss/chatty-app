import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    var clientCount = this.props.clientCount;
    return (
      <nav className='navbar'>
        <a href='/' className='navbar-brand'>Chatty</a>
        <h2 className="clientCount">{clientCount} <em>user(s) online</em></h2>
      </nav>
    )
  }
}

export default NavBar;