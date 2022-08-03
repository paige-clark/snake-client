const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // on receiving data, log it
  conn.on("data", (data) => {
    console.log(data.toString());
  });

  // on connecting 
  conn.on("connect", () => {
    console.log('You have connected!');
    conn.write("Name: UFO");
  });

  //move the snake up on join
  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 500);
  // });
  
  return conn;
};

module.exports = {
  connect,
};
/*
- with set interval going, I think we will be looking for key inputs, and when key input, we change direction
- need to handle error

"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/