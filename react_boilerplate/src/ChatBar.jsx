import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '', 
      value: '', 
      username: 'Bob'
    }
    this.onEnterKey = this.onEnterKey.bind(this);
    this.onNewContent = this.onNewContent.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleUserNameSubmit = this.handleUserNameSubmit.bind(this);
    this.userNameChange = this.userNameChange.bind(this);
  }

  handleUserNameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleUserNameSubmit(event) {
    let newUserName = this.state.username;
    if (event.key === "Enter") {
      alert("New User Name: ", newUserName);
    }
  }

  onNewContent(event) {
    this.setState({
      content: event.target.value
    });
  }

  userNameChange(event){
    if(event.key==='Enter'){
      var newMessage = {
        type: 'Notification',
        username: this.state.username
      };
      this.props.newChatMessage(newMessage);
    }
  }

  onEnterKey(event) {
    if (event.key === 'Enter') {
      var newMessage = {
        type: 'NewMessage',
        username: this.state.username,
        content: this.state.content
      };
      this.props.newChatMessage(newMessage);
    }
  }

  render() {
    const user = this.props.currentUser.name;
    return (
      <footer className="chatbar">
        <input className="chatbar-username" value={this.state.username} 
          onChange={this.handleUserNameChange} onKeyPress={this.userNameChange} />


        <input className="chatbar-message" placeholder="Type a message and hit ENTER" 
          onChange={this.onNewContent} value={this.state.content} 
          onKeyPress={this.onEnterKey} /> 
      </footer>
    );
  }
}

export default ChatBar;