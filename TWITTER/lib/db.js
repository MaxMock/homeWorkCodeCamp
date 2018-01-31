
const mysql2 = require('mysql2/promise')
const dbConfig = require('./../config/database.json');
const pool = mysql2.createPool(dbConfig);

module.exports = async function(sql,value) {
  const db = await pool.getConnection()
  try {
    const [rows] = await db.execute(sql,value)
    return rows
  } finally {
    db.release()
  }
}

