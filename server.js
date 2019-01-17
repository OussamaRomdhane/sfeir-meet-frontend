import * as express from 'express';

const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT, () => {
  console.info('Server started at port ', process.env.PORT);
});
