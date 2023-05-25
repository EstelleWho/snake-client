let connection;

const setupInput = function(conn) {
  console.log('hello');
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  // stdin.on('data', key => {
  //   console.log('hiii', key);
  //   process.stdout.write('hellooo');
  // });
  return stdin;
};

// handleUserInput function will receive data from stdin (aka keyboard input)
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0077') {
    connection.write('Move: up');
  }

  if (key === '\u0061') {
    connection.write('Move: left');
  }

  if (key === '\u0073') {
    connection.write('Move: down');
  }

  if (key === '\u0064') {
    connection.write('Move: right');
  }

  if (key === '\u0066') {
    connection.write('Say: Oopsy!');
  }

  if (key === '\u0065') {
    connection.write('Say: Oh No!');
  }

  if (key === '\u0071') {
    connection.write('Say: 🐍🐍🐍');
  }
};

// setupInput();

module.exports = { setupInput };


// // setup interface to handle user input from stdin
// // setupInput allows keyboard input and reaction
// // stdin = standard input