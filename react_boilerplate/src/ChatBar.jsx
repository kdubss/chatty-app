import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = this.props.currentUser.name;

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={ user } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" /> 
      </footer>
    );
  }
}

export default NavBar;