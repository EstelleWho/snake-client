// setup interface to handle user input from stdin
// setupInput allows keyboard input and reaction
// stdin = standard input

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// handleUserInput function will receive data from stdin (aka keyboard input)
const handleUserInput = function () {
  stdin.on('data', (key) => {
// \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
    };
  });
};

setupInput();

module.exports = { setupInput };
