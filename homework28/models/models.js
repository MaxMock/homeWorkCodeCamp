const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
// const db =  require('./../config/database.js');
const db =  require('./../lib/db.js');
 function createEntity (row) {
  return {
    id:row.id,
    todo_text:row.todo_text,
    complete:row.complete
  }
  }
  
    async function find (db, id) {
    const rows = await db.ex(`
    select
    id,
    todo_text,
    complete
    from todo_list
    where id = ?
    `, [id])
    return createEntity(rows[0])
    }
    async function findAll (db) {
    const rows = await db.ex(`
    select
    id,
    todo_text,
    complete
    from todo_list
    `)
    return rows.map(createEntity)
    }
    async function store (db,todo) {
    if (!todo.id) {
    const result = await db.ex(`
    insert into todo_list (
      id,
      todo_text,
      complete
    ) values (
    "", ?,0
    )
    `, [todo.todo_text])

    return result
    }
    return db.ex(`
    update todo_list
    set
    todo_text= ?,
    complete= 0
    where id = ?
    `, [todo.todo_text,todo.id])  
    }
    async function remove (db,id) {
    return db.ex(`
    delete from todo_list where id = ?
    `, [id])
    }
    module.exports = {
    find,
    findAll,
    store,
    remove
    }



  



    
  



