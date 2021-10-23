//Install express server
const cors = require('cors')

const express = require('express');
const path = require('path');

const app = express();
app.use(cors());
app.options('*', cors());
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/web-speech-to-text'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/web-speech-to-text/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
