var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./server-dir')).listen(3000);
