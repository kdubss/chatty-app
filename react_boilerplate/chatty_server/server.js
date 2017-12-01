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
const wss = new SocketServer({ server })// www.clients.size;

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === ws.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on('connection', function connection(ws) {

  let numberOfClients = wss.clients.size + ' user(s) online';
  console.log("Client connected!");
  clients.push(ws);

  console.log("\n" + wss.clients.size + " user(s) online");

  ws.on('message', function incoming(message) {
    const uuidv4 = require("uuid/v4");

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
        client.send(numberOfClients);
        // Must send the # clients to app.jsx with client.send
      };
    }); 

  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected. ' + wss.clients.size + ' user(s) online'));

})
