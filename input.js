let connection;

const handleUserInput = function(key) {
  if (key === 's') {
    console.log("down")
    connection.write('Move: down')
  }
  if (key === 'w') {
    console.log("up")
    connection.write('Move: up')
  }
  if (key === 'a') {
    console.log("left")
    connection.write('Move: left')
  }
  if (key === 'd') {
    console.log("right")
    connection.write('Move: right')
  }
  if (key === '\u0003') {
    console.log("Thank you for playing!")
    process.exit();
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',handleUserInput)
  return stdin;
}
setupInput();

module.exports = { setupInput }