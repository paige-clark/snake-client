const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // listens for user input
  stdin.on("data", handleUserInput);

  return stdin;
};

// quits the game if the user presses c
const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.stdout.write("You have quit the game!\n");
    process.exit();
  }
};

module.exports = {
  setupInput,
};