import app from './app';
import * as debugModule from 'debug';
import * as http from 'http';

const debug = debugModule('node-express-typescript:server');

// Get port from environment and store in Express.
// por defecto se coloca el puerto 8080 pero si el ambiente es escritorio se coloca el puerto 49215
let portV = '8080';
const env = process.env.NODE_ENV || "development";
if (env == "desktop") {
  portV = '49215'
}

const port = normalizePort(process.env.PORT || portV);
app.set('port', port);


// create server and listen on provided port (on all network interfaces).
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
//console.log('Puerto actual: ', port)
//console.log('env: ', process.env)
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: any): number | string | boolean {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

  console.log('Listening on ' + bind);

}
