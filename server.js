// prettier-ignore
const
    path    = require('path'),
    express = require('express'),
    app     = express();

require('dotenv').config();

const assetsPath = path.join(__dirname, '../app/dist');

app.use(express.static(assetsPath));

app.listen(process.env.PORT, () => {
  console.info('Server started at port ', process.env.PORT);
  console.info('Assets hosted at ', assetsPath);
});
