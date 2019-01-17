// prettier-ignore
const
  express = require('express'),
  favicon = require('express-favicon'),
  path    = require('path'),
  port    = process.env.PORT,
  app     = express();

app.use(favicon(__dirname + '/dist/favicon.ico'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.info('Server started on port', port);
});
