const app = require('express')();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT, () => {
  console.info('Server started at port ', process.env.PORT);
});
