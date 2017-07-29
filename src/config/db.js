module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEV || 'postgres',
    password: process.env.DB_PASSWORD_DEV || 'postgres',
    database: process.env.DB_NAME_DEV || 'events',
    host: process.env.DB_HOST_DEV || '127.0.0.1',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
  test: {
    username: process.env.DB_USERNAME_TEST || 'postgres',
    password: process.env.DB_PASSWORD_TEST || 'postgres',
    database: process.env.DB_NAME_TEST || 'events',
    host: process.env.DB_HOST_TEST || '127.0.0.1',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
  production: {
    username: process.env.DB_USERNAME_PRO,
    password: process.env.DB_PASSWORD_PRO,
    database: process.env.DB_NAME_PRO,
    host: process.env.DB_HOST_PRO,
    dialect: 'postgres',
    pool: {
      max: 10,
      min: 5,
      idle: 30000,
    },
  },
};
