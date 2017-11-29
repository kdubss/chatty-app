import React, { Component } from 'react';

import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const messages = this.props.messages;
    //console.log(messages);
    const messageObj = messages.map((message, index) => {
      return <Message key={message.id} username={message.username} 
        content={message.content} 
      />
    });

    // Array of message objects (w/ username & content
    const messageList = this.props.messages;

    return (  
      <main className="messages">
         { messageObj }
        <div className="message system"></div>
      </main>
    );
  }
}

export default MessageList;