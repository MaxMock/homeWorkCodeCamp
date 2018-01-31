const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
// const db =  require('./../lib/db.js');


class User {
  constructor (db, row) {
this._db =db
  this.id = row.id
  this.firstName = row.first_name
  this.lastName = row.last_name
  this.username = row.username
}
async save () {
  if (!this.id) {
    const result = this._db.ex(`
    insert into users (
    first_name, last_name,username
    ) values (
    ?, ?
    )
    `, [this.firstName, this.lastName])
    this.id = result.insertId
    return
  }
  return this._db.ex(`
  update users
  set
  first_name = ?,
  last_name = ?
  where id = ?
  `, [this.firstName, this.lastName, this.id])
}
remove () {
  return this._db.ex(`
  delete from users where id = ?
  `, [this.id])
}
}
module.exports = function (db) {
  return {
    async find (id) {
      const rows = await db.ex(`
      select
      id,first_name, last_name,username
      from users
      where id = ?
      `, [id])
      return new User(db, rows[0])
    },
    async findAll () {
    const rows = await db.ex(`
    select
    id,first_name, last_name,username
    from users
    `)
    return rows.map((row) => new User(db, row))
  },
  async findByUsername(username) {
          const rows = await db.ex(`
          select
          id,first_name, last_name,username
          from users
          where username = ?
          `, [username])
      return new User(db, rows[0])
        }
      }
    }


 
    



    
  



