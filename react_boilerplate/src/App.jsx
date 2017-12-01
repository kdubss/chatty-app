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
    }
    this.newChatMessage = this.newChatMessage.bind(this);
  }

  componentWillMount() {
    this.socket = new WebSocket("ws://localhost:3001");

    this.socket.addEventListener('message', (msg) => {
      const messageIncoming = JSON.parse(msg.data);
      if (messageIncoming.type === "NewMessage") {
        this.setState({messages: this.state.messages.concat(messageIncoming)});
      } else if (messageIncoming.type === "user_count") {
        console.log("New user!");
      }
    });
  }

  newChatMessage(content) {
    var newMessage;
    if(content.type === "Notification") {
      newMessage = {
        content: this.state.currentUser.name +  ' has changed their name to  ' + content.username
      };
      this.setState({
        currentUser: {
          name: content.username
        }
      });
    } else if (content.type === "NewMessage") {
      newMessage = {
        username: content.username,
        content: content.content
      };
    }
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