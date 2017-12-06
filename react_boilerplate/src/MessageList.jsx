import React, { Component } from 'react';

import Message from './Message.jsx';

function Notification(props){
  return <div className="message system">
    {props.content}
  </div>;
}

function MessageList(props){
  const messages = props.messages.map(message => {
    if(message.type === 'Notification'){
      return <Notification key={message.id} content={message.content}/>
    }
    return <Message key={ message.id} username={message.username} content={message.content} type={message.type} />;
  });

  return (  
    <main className="messages">
      { messages }
      <div className="message system"></div>
    </main>
  );

}

export default MessageList;