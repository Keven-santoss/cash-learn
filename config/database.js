const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "__//ab--00@",
  database: "TCC_SQL2"
});

module.exports = pool;
