'use strict';

let express = require('express');
let app = express();

let env = process.env.NODE_ENV || 'development';
let port = process.env.PORT || 3000;

// port, env
app.set('port', port);
app.set('env', env);

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/assets', express.static('assets'));

app.listen(port, () => {
  console.log('Server started, listened on ' + port + '.')
});
