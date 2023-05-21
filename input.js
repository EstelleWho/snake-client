let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => handleUserInput(key));
  return stdin;
};

// handleUserInput function will receive data from stdin (aka keyboard input)
const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    };
    if (key === '\u0077') {
      connection.write('Move: UP');
    }

    if (key === '\u0061') {
      connection.write('Move: LEFT');
    }

    if (key === '\u0073') {
      connection.write('Move: DOWN');
    }

    if (key === '\u0064') {
      connection.write('Move: RIGHT');
    }
  };

// setupInput();

module.exports = { setupInput };


// // setup interface to handle user input from stdin
// // setupInput allows keyboard input and reaction
// // stdin = standard input