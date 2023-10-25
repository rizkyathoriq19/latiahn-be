const mySql = require("mysql2")
const db = mySql.createConnection({
  host: "localhost",
  user: "coba",
  password: "cobA123456*",
  database: "latihan_db",
})

module.exports = db
