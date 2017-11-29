import React, { Component } from 'react';

import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const messages = this.props.messages;
    const messageObj = messages;
    // console.log(messages);
    // return <Message username={messages.username} content={message.username} />
    // const messageObj = messages.map((message, index) => {
    //   return <Message key={message.id} username={message.username} 
    //     content={message.content} 
    //   />

    // Array of message objects (w/ username & content
    const messageList = this.props.messages;

    return (  
      <main className="messages">
         <Message username={messageObj.username} content={messageObj.content} />
        <div className="message system"></div>
      </main>
    );
  }
}

export default MessageList;