// server.js

const ws = require('ws');

const express = require('express');
const SocketServer = require('ws').Server;

const clients = [];

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server })

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', function connection(ws) {

  console.log("Client connected!");

  clients.push(ws);

  ws.on('message', function incoming(message) {
    const uuidv4 = require("uuid/v4");
    console.log("message obj: ", message);
    console.log("message user: ", message.username);
    console.log("message content: ", message.content);
    let returnedMessage = JSON.parse(message)
    returnedMessage = {
      id: uuidv4(),
      username: returnedMessage.username,
      content: returnedMessage.content
    };
    returnedMessage = JSON.stringify(returnedMessage);
    
    console.log("received: ", returnedMessage);

    // Broadcasting to all clients:
    clients.forEach((client) => {
      if (client.readyState == ws.OPEN) {
        console.log("Other Client is ready for message reception!");
        client.send(returnedMessage);
      };
    }); 

  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
