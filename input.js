let connection;
let currentIntervalID;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // sets connection to the connect function from play.js
  connection = conn;
  // listens for user input
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  let snakeSpeed = 70;
  // quits the game if the user presses ctrl + c
  if (data === '\u0003') {
    process.stdout.write("You have quit the game!\n");
    process.exit();
  }
  // log a message with o or p
  if (data === 'o') {
    connection.write("Say: I'm hungry :(");
  }
  if (data === 'p') {
    connection.write("Say: worm life");
  }
  // user controls
  if (data === 'w') {
    clearInterval(currentIntervalID);
    currentIntervalID = setInterval(() => {
      connection.write("Move: up");
    }, snakeSpeed);
  }
  else if (data === 'a') {
    clearInterval(currentIntervalID);
    currentIntervalID = setInterval(() => {
      connection.write("Move: left");
    }, snakeSpeed);
  }
  else if (data === 's') {
    clearInterval(currentIntervalID);
    currentIntervalID = setInterval(() => {
      connection.write("Move: down");
    }, snakeSpeed);
  }
  else if (data === 'd') {
    clearInterval(currentIntervalID);
    currentIntervalID = setInterval(() => {
      connection.write("Move: right");
    }, snakeSpeed);
  }
};

module.exports = {
  setupInput,
};