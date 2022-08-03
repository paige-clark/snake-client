const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // on connecting 
  conn.on("connect", () => {
    console.log('You have connected!');
    conn.write("Name: UFO");
  });

  // on receiving data, log it
  conn.on("data", (data) => {
    console.log(data.toString());
  });



  return conn;
};

module.exports = {
  connect,
};