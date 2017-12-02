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

function broadcastClientsCount() {
  const clientsCountMessage = {
    type: "user_count",
    count: wss.clients.size,
  };
  wss.broadcast(clientsCountMessage);
}

wss.on('connection', function connection(ws) {

  let numberOfClients = wss.clients.size + ' user(s) online';
  console.log("Client connected!");
  clients.push(ws);

  console.log("\n" + wss.clients.size + " user(s) online");

  broadcastClientsCount();

  ws.on('message', function incoming(message) {
    const uuidv4 = require("uuid/v4");

    let returnedMessage = JSON.parse(message)
    returnedMessage = {
      id: uuidv4(),
      type: "NewMessage",
      username: returnedMessage.username,
      content: returnedMessage.content
    };
    wss.broadcast(returnedMessage);

  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    broadcastClientsCount();
  });

})
