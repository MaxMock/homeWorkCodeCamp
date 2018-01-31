const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'codecamp'
})

;(async function () {
  const db = await pool.getConnection()

  await db.beginTransaction()
  try {
    const [rows] = await db.execute(`
      select
        id, firstname, lastname
      from user
      where id = ?
    `, [1001])
    console.log(rows)

    await db.execute(`
      update user
      set
        firstname = ?
      where id = ?
    `, ['new user', 1])
    await db.commit()
  } catch (err) {
    console.log(err)
    await db.rollback()
  }
  await db.release()
})().then(
 () => {},
 (err) => { console.log(err) }
)
