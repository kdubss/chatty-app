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
      messages: [], 
      userCount: 0
    }
    this.newChatMessage = this.newChatMessage.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");

    this.socket.addEventListener('message', (msg) => {
      const messageIncoming = JSON.parse(msg.data);
      console.log(messageIncoming);
      if (messageIncoming.type === "NewMessage" || messageIncoming.type == "Notification") {
        this.setState({messages: this.state.messages.concat(messageIncoming)});
      } else if (messageIncoming.type === "user_count") {
        // console.log("user(s) online!");
        this.setState({
          userCount: messageIncoming.count
        });
      }
      console.log("Current clients connected: ", this.state.userCount);
    });
  }

  newChatMessage(content) {
    var newMessage;
    // TODO: style the notification differently than the rest of the chat messages!
    if(content.type === "Notification") {
      newMessage = {
        content: this.state.currentUser.name +  ' has changed their name to  ' + content.username,
        type: 'Notification'
      };
      this.setState({
        currentUser: {
          name: content.username,
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
        <NavBar clientCount={this.state.userCount} />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} 
          newChatMessage={this.newChatMessage} />
      </div>
    );
  }

}

export default App;