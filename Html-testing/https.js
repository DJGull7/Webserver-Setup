const https = require('http');
const server = https.createServer();

server.on('connection', (socket) => {
    console.log('New connection....');
    location.href = "https://gull.winsposure.com/Html-testing/index.html";


})

server.listen(5500)


console.log('Listening on port 5500....')
