<h1>Week 5: Chatty App</h1>
<h4><a id='#toc'>ToC</h4>
<ul>
  <li><a href="#react_reading"<code>React readings</code></a></li>
</ul>
<hr>
<h2>Description</h2>
<p>
  Your application will be comprised of 3 child 'components' (<code>Message</code>, <code>MessageList</code>, 
  and <code>ChatBar</code>), which interact together through one main App component.

  When a user creates a new message it will be sent to a simple server that broadcasts the message to all other connected users.

  Instead of AJAX (over HTTP), your Chatty application will implement the client-server communication using an alternative protocol called WebSocket.
</p>
<hr>
<h5><i><code>Chatty App</code></i> finished product 
(what it should look like)</h5>
<img src='https://github.com/kdubss/chatty-app/blob/master/imgs/chatty-app-01-final.png'>
<hr>
<h2><a id="#react_reading"><code>React</code> Readings & Assignments</h2>
<ul>
  <li><a href="https://web-compass.lighthouselabs.ca/days/w5d3/activities/373">Creating a <code>websocket</code> server</a>
    <ul>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications">Web Socket Tutorial</a></li>
      <li><a href="https://github.com/websockets/ws">Github page</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API">MDN docs</a></li>
      <li><a href="https://www.npmjs.com/package/ws">NPM <code>ws</code> docs</a></li>
      <li><a href="https://gist.github.com/donburks/5a6dfebc8aa22ba68841620f11dcadcc">Code from todays lecture (w5d3)</a></li>
    </ul>
  </li>
  <li><a href="https://web-compass.lighthouselabs.ca/days/w5d3/activities/372">Web Sockets</a></li>
  <li><a href="https://reactjs.org/docs/lists-and-keys.html">Lists And Keys</a></li>
  <li><a href="https://web-compass.lighthouselabs.ca/days/w5d2/activities/368">Data Flow in <code>Chatty</code></a></li>
  <li><a href="https://web-compass.lighthouselabs.ca/days/w5d2/activities/367">
    Component States and Props</a></li>
  <li><a href="https://github.com/jensen/react-notes">Class lecture notes (W5d2)</a></li>
  <li><a href="https://www.npmjs.com/package/react-dom">Components</a></li>
</ul>