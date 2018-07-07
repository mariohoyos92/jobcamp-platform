require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DEV_DB_HOST,
      database: process.env.DEV_DB_NAME,
      port: process.env.DEV_DB_PORT,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PW,
      ssl: true
    },
    migrations: {
      directory: `${__dirname}/server/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/server/db/seeds`
    }
  }
};
