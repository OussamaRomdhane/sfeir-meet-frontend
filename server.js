// prettier-ignore
const
    express = require('express'),
    app     = express();

require('dotenv').config();

const assetsPath = __dirname + '/dist';

app.use(express.static(assetsPath));

app.listen(process.env.PORT, () => {
  console.info('Server started at port ', process.env.PORT);
  console.info('Assets hosted at ', assetsPath);
});
