const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.15.225',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', () => {
    console.log('oh no to slow!');
  });
  conn.on('connect', () => {
    console.log('Welcome to the party');
  });
  conn.on('connect', () => {
    conn.write('Name: GT');
  });

  conn.on('connect', () => {
    conn.write('Move: down');
  });
  
  return conn;
  
}

module.exports = { connect };