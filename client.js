const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log('Successfully connected to Game Server!');
    conn.write('Name: EST');
    // conn.write('Move: up');
    // conn.write('Move: down');
    // setInterval(function() { conn.write('Move: left'); }, 100);

  });

  conn.on("data", (data) => {
    console.log("Data received", data);
  });

  return conn;
};

module.exports = { connect };