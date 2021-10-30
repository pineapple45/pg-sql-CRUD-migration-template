const { config } = require('dotenv');
config();
const app = require('./src/app');
const pool = require('./src/pool');

// console.log(process.env);

pool
  .connect({
    host: process.env.HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  })
  .then(() => {
    app().listen(3005, () => {
      console.log('Listening on PORT 3005');
    });
  })
  .catch((err) => {
    console.error(err);
  });
