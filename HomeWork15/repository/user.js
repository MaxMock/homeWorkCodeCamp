const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');

function createEntity (row) {
    return {
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    username:row.username
    }
  }

    async function find (db, id) {
    const rows = await db.ex(`
    select
    id,first_name, last_name,username
    from users
    where id = ?
    `, [id])
    return createEntity(rows[0])
    }
    async function findAll (db) {
    const rows = await db.ex(`
    select
    id,first_name, last_name,username
    from users
    `)
    return rows.map(createEntity)
    }
    async function store (db, user) {
      if (!user.id) {
      const result = await db.ex(`
      insert into users (
      id,first_name, last_name,username
      ) values (
      ?, ?
      )
      `, [user.firstName, user.lastName])
      user.id = result.insertId
      return
      }
      return db.ex(`
      update users
      set
      first_name = ?,
      last_name = ?
      where id = ?
      `, [user.firstName, user.lastName,
      user.id])
      }
      function remove (db, id) {
      return db.ex(`
      delete from users where id = ?
      `, [id])
      }
       function findByUsername(username) {
        return db.ex(`
        select
        id,first_name, last_name,username
        from users
        where username = ?
        `, [username])
      }
      module.exports = {
        findByUsername,
      find,
      findAll,
      store,
      remove
      }