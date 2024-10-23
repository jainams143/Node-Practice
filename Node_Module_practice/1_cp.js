const cp = require('child_process')
const { log } = require('console')

console.log("" + cp.execSync(" node demo.js "));
