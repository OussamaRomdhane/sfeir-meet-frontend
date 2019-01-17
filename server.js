// prettier-ignore
const
    express = require('express'),
    app     = express();

require('dotenv').config();

app.use(express.static('dist'));

app.listen(process.env.PORT, () => {
  console.info('Server started at port ', process.env.PORT);
});
