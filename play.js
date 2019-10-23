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
  
  return conn;
  
}

console.log('Connecting ...');
connect();

const conn = net.createConnection({ 
  host: '192.168.15.225',
  port: 50541
});

conn.on('connect', () => {
  console.log('Welcome to the party');
});

conn.on('data', () => {
  console.log('oh no to slow!');
});

