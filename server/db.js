const Pool = require("pg").Pool;

const pool = new Pool({
     user: "postgres",
     password: "postgres@3625",
     host: "localhost",
     port: 5432,
     database: "perntodoapp",
});

module.exports = pool;