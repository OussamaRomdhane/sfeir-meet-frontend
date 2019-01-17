// prettier-ignore
const
    path    = require('path'),
    express = require('express'),
    app     = express();

app.use(express.static(path.join(__dirname, '../app/dist'), { maxAge: 86400000 }));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname, '../app/dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
