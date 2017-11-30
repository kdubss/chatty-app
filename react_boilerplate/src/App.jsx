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
      this.setState({messages: this.state.messages.concat(JSON.parse(msg.data))});
    });
  }

  newChatMessage(content) {

    console.log("content received from client:",content);
    console.log("rohit" +content.type);
    if(content.type==="Notification"){
      
      var newMessage = {
        content: this.state.currentUser.name +  ' has changed its name to '+content.username
      }

      this.setState({
        currentUser: {
          name: content.username
        }
      });
    } else if (content.type==="NewMessage"){
      var newMessage = {
        username: content.username,
        content: content.content
      };
    }
    // const newMessage = {
    //   username: this.state.currentUser.name,
    //   content: content
    // };
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