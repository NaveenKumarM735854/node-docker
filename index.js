// Import required modules
const http = require('http');

// Define request handler function
const requestHandler = (request, response) => {
  // Set response headers
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send response
  response.end('Hello, World! this is from kira\n');
};

// Create a server instance
const server = http.createServer(requestHandler);

// Define the port to listen on dynamically
const port = process.env.PORT || 3000; // Default port is 3000, but it can be overridden by the environment

// Start the server and listen for incoming requests
server.listen(port, (err) => {
  if (err) {
    return console.error('Error starting server:', err);
  }
  console.log(`Server is running on port ${port}`);
});
