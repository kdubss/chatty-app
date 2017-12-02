<h1>Week 5: Chatty App</h1>
<h4><a id='#toc'>ToC</h4>
<ul>
  <li><a href="#description"><code>App</code> Description</a></li>
  <li><a href="#functionalreq">Functional requirements</a></li>
  <li><a href="#behaviourreq">Behaviour requirements</a></li>
  <li><a href="#technicalreq">Technical requirements</a></li>
  <li><a href="#finishedproduct">Finished product</a></li>
  <li><a href="#react_reading"<code>React readings</code></a></li>
</ul>
(<a href="#toc">Back to top &#x21EA;</a>)
<hr>
<h2><a id="#description">Description</a></h2>
<p>
  <code>Chatty</code> is a real-time chat application similar to Slack.
  This app utilizes the following <code>JavaScript</code> libraries,
  <ul>
    <li><code>React</code></li>
    <li><a href="https://babeljs.io/">Babel</a></li>
    <li><a href="https://webpack.js.org/">Webpack</a></li>
  </ul>
</p>
<p>
  <code>Chatty</code> is comprised of 3 child 'components' (<code>Message</code>, <code>MessageList</code>, <code>ChatBar</code>, and <code>NavBar</code>), which interact together through one main App component.

  When a user creates a new message it will be sent to a simple server that broadcasts the message to all other connected users.

  Instead of AJAX (over HTTP), the Chatty application will implement the client-server communication using an alternative protocol called WebSocket.
</p>
(<a href="#toc">Back to top &#x21EA;</a>)
<hr>
<h2><a id="#functionalreq">Functional Requirements</a></h2>
<ul>
  <li>Primarily a client-side SPA (single-page app) built with ReactJS,
  <ul>
    <li>Based on the HTML and CSS provided</li>
    <li>Contains a chat log displaying messages and notifications</li>
    <li>Contains an input field to change your name and an input field to send a message</li>
  </ul>
  </li>
  <li>The client-side app communicates with a server via WebSockets for multi-user real-time updates</li>
  <li>No persistent database is involved; the focus is on the client-side experience</li>
</ul>
<br>

(<a href="#toc">Back to top &#x21EA;</a>)
<h2><a id="#behaviourreq">Behaviour Requirements</a></h2>
<ul>
  <li>When any connected user sends a chat message, all connected users receive and display the message</li>
  <li>When any connected user changes their name, all connected users are notified of the name change,
  <ul>
    <li>Notifications are styled differently from chat messages</li>
  </ul>
  </li>
  <li>Header will display the count of connected users</li>
  <li>When the number of connected users changes, this count will be updated for all connected users</li>
  <li>(<b>STRETCH</b>) Different users' names will each be coloured differently
  <ul>
    <li>Bonus: the colouring is consistent between connected user instances or is calculated algorithmically based on their name, or is manually selectable by users, or any other interesting approach!</li>
  </ul>
  </li>
</ul>
<br>
(<a href="#toc">Back to top &#x21EA;</a>)

<h2><a id="#technicalreq">Technical Specifications</a></h2>
<ul>
  <li><b>Stack:</b>
  <ul>
    <li>Webpack with Babel, JSX, ES6, webpack dev server (comes with boilerplate)</li>
    <li>WebSockets using Node package ws on the server-side, and native WebSocket on client side
    ReactJS</li>
  </ul>
  </li>
  <br>
  <li><b>React component guidelines:</b>
  <ul>
    <li>A single root component (e.g. App) should be responsible for the main application state, as well as communication with the WebSocket server
    <ul>
      <li>A message list component renders the chat log (chat messages and system notifications)</li>
      <li>A chat bar component provides an input field for changing your username and an input field for sending messages. These input fields do not need to be React-style "controlled inputs", although they can be.</li>
    </ul>
    </li>
  </ul>
  <br>
  <li><b>Client websocket behaviour:</b>
  <ul>
    <li>opens a websocket connection as soon as the App component is mounted</li>
    <li>the connection stays open until the client closes the page (or otherwise disconnects)
    sends chat messages and (name change) notifications initiated by the current user
    handles broadcast messages (chat, notifications, user count) from the server and may alter state accordingly</li>
  </ul>
  <br>
  <li><b>Websocket server specs:</b>
  <ul>
    <li>The Chatty client app and Chatty websocket server are separate Node apps each with their own package.json</li>
    <li>It's a simple server using express and <code>ws</code></li>
    <li>The server should send and receive JSON-encoded messages</li>
    <li>When a client sends a message:
    <ul>
      <li>the server should determine what to do based on the message's type property</li>
      <li>it should construct a message to send back in response with a corresponding type and a generated unique id (e.g. a UUID)</li>
      <li>When a client connects or disconnects, the server should broadcast the current user count to all connected clients</li>
      <li>(<b>STRETCH</b>) the server may assign and/or keep track of user colours (there are several ways of solving this)</li>
    </ul>
  </ul>
</ul>
(<a href="#toc">Back to top &#x21EA;</a>)




<hr>
<h2><a id="#finishedproduct"><i><code>Chatty App</code></i> finished product 
(what it should look like)</a></h2>
<img src='https://github.com/kdubss/chatty-app/blob/master/imgs/chatty-app-01-final.png'>
<br>
(Messages typed by one user will be broadcast to all users currently connected with <code>Chatty</code>)
<img src="https://github.com/kdubss/chatty-app/blob/master/imgs/chatty-multiple-clients.png">
<br>
(Multiple users can interact with each other in the same chat space)
<img src="https://github.com/kdubss/chatty-app/blob/master/imgs/chatty-multiple-clients2.png">
<br>
(Users have the ability to change their chat pseudo-name if they choose to)
<img src="https://github.com/kdubss/chatty-app/blob/master/imgs/chatty-multiple-clients3.png">
<img src="https://github.com/kdubss/chatty-app/blob/master/imgs/chatty-multiple-clients4.png">
<br>
(Current number of users connected with <code>Chatty</code> is displayed in the top right of the nav-bar.  New users connecting with <code>Chatty</code> will not be able to see the past chat history, which are still accessible to already connected users.)
<img src="https://github.com/kdubss/chatty-app/blob/master/imgs/chatty-multiple-clients5.png">
<br>
(<a href="#toc">Back to top &#x21EA;</a>)


<hr>
<h2><a id="#react_reading"><code>React</code> Readings & Assignments</h2>
<ul>
  <li><a href="https://web-compass.lighthouselabs.ca/days/w5d5/activities/479">Prototypes in <code>JS</code></a> - w5d5 </li>
  <li>
    <ul>
      <li><a href="https://gist.github.com/davidvandusen/f1d5e53b654303325cb4d1c38914eb99">Notes for Morning Lecture (w5d5)</a></li>
      <li><a href="https://web-compass.lighthouselabs.ca/days/w5d5/activities/390"><code>JavaScript</code> Prototypes</a></li>
      <li><a href="https://web-compass.lighthouselabs.ca/days/w5d5/activities/391"><code>JavaScript</code> Prototypes...Pt.II</a></li>
      <li><a href="https://web-compass.lighthouselabs.ca/days/w5d5/activities/392"><code>JavaScript</code> Prototypes...Practice</a></li>
      <li><a href="https://web-compass.lighthouselabs.ca/days/w5d5/activities/393">ES6 Classes</a></li>
    </ul>
  </li>
  <li><a href="https://web-compass.lighthouselabs.ca/days/w5d4/activities/379">Displaying Users Online (Assignment 2 - w5d4)</a></li>
  <li><a href="https://web-compass.lighthouselabs.ca/days/w5d4/activities/378">Notifications (Assignment 1 - w5d4)</a></li>
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
(<a href="#toc">Back to top &#x21EA;</a>)
