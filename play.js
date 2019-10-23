
const { connect } = require('./client');
const { setupInput } = require('./input')
console.log('Connecting ...');
// connect();
const variable = connect()

setupInput(variable);




