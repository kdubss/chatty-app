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
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
          id: '1'
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
          id: '2'
        }
      ]
    }

    this.newChatMessage = this.newChatMessage.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");

      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
    }, 3000);
  }


  newChatMessage(content) {
    const id = this.state.messages[this.state.messages.length - 1].id + 1
    const newMessage = {id: id, username: "Kang", content: content};
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
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