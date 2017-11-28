import React, { Component } from 'react';
import home from '../styles/home.scss';

import NavBar from './Navbar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <NavBar />
        <MessageList />
        <ChatBar />
      </div>
    );
  }
}

export default App;