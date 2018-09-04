const requireModule = require('esm')(module, {})
const person = requireModule('./main')
console.log(person);
