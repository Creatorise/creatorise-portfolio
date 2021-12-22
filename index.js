const server = require('./src/server');

const port = process.env.PORT || 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
