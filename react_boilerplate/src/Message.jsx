import React, { Component } from 'react';

class Message extends Component {
  render() {
    var styleNotification = {
      textAlign: "left",
      backgroundcolor: 'red',
    
    };
    var t = this.props.type;
    var message;
    if(t=='NewMessage'){
      message = (
        <div className="styleNotification">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      )
    } else {
      message = (
        <div className="message">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      )
    }
    return (

      <div>
        {message}
      </div>
      // <div className="message">
      //   <span className="message-username">{this.props.username}</span>
      //   <span className="message-content">{this.props.content}</span>
      // </div>
    );
  }
}

export default Message;