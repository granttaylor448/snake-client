const net = require('net');
const { IP, PORT } = require('./constants')

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', () => {
    console.log('oh no to slow!');
  });
  // conn.on('connect', () => {
    // console.log('Welcome to the party');
  // });
  conn.on('connect', () => {
    console.log('Welcome to the party');
    conn.write('Name: GT');
    // setTimeout(() => conn.write('Move: down'), 500);
    // setTimeout(() => conn.write('Move: left'), 1000);
    // setTimeout(() => conn.write('Move: up'), 1500);
    // setTimeout(() => conn.write('Move: right'), 2000);
    // setInterval(() => conn.write('Move: left'), 500)
  });

  // conn.on('connect', () => {
    // conn.write('Move: down');
  // });
  
  return conn;
  
}

module.exports = { connect };