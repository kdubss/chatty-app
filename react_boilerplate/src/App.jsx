import React, { Component } from 'react';

import home from '../styles/home.scss';
import NavBar from './Navbar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: []
      // currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      // messages: ["This is a test"
        // {
          // username: "Bob",
          // content: "Has anyone seen my marbles?",
          // id: '1'
        // }
        // {
        //   username: "Anonymous",
        //   content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
        //   id: '2'
        // }
      // ]
    }
    this.newChatMessage = this.newChatMessage.bind(this);
  }

  componentWillMount() {
    this.socket = new WebSocket("ws://localhost:3001");

    this.socket.addEventListener('message', (msg) => {
      this.setState({messages: this.state.messages.concat(JSON.stringify(msg.data))});
    });
  }

  newChatMessage(content) {
    // const id = this.state.messages[this.state.messages.length - 1].id + 1;
    const messages = this.state.messages;
    const newMessage = {
      username: this.state.currentUser.name,
      content: content
    };
    this.setState({messages: newMessage});
    this.socket.send(JSON.stringify(newMessage));
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <NavBar />
        <MessageList messages={ this.state.messages }/>
        <ChatBar currentUser={ this.state.currentUser } 
          newChatMessage={this.newChatMessage} />
      </div>
    );
  }

}

export default App;