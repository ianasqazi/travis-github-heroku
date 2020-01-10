/* server.js main file 1.4 */
var express = require('express');

var app = express();

var PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    // eslint-disable-next-line no-console
    console.log('req = \n', req);
    res.send('Test CI with Travis 1.0');
});

var server = app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('app running on port 3001');
});

// eslint-disable-next-line no-console
console.log('server = ', server);

module.exports = server;
