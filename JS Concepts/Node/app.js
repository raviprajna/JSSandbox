 var hello = require('./Hello');
 var fs = require('fs');
 hello.hello3();
 hello.helloMet();
 fs.writeFileSync("Node.txt", " Hey I am NODE");