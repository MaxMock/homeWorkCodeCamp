const _ = require('lodash')
const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
const db =  require('./../lib/db.js');
const todo =  require('./../models/models.js');

async function list (ctx) {
  const allid = await todo.findAll(db)

  ctx.body = allid

  // const getdata= require('./../models/models.js')(db);

}

async function create (ctx) {
  const todo1 = {}
  todo1.id=""
  todo1.todo_text=ctx.request.body.todo_text
  todo1.complete="0"
  row = await todo.store(db,todo1)

  ctx.body =  todo1

  
}

async function get (ctx) {
  const id = await todo.find(db,ctx.params.id)
  ctx.body = { id }
}

async function update (ctx) {
 let todo1 = await todo.find(db,ctx.params.id)
  todo1.todo_name=ctx.request.body.name
  todo1.todo_text=ctx.request.body.text
  await todo.store(db,todo1)
  ctx.body = { todo1 }
}

async function remove (ctx) {
  await todo.remove(db,ctx.params.id)
  const id = await todo.findAll(db)
  ctx.body = { id }
}

async function complete (ctx) {
  let todo1 = await todo.find(db,ctx.params.id)
  todo1.complete="1"
  await todo.store(db,todo1)
  ctx.body = { todo1 }
}

async function incomplete (ctx) {
  let todo1 = await todo.find(db,ctx.params.id)
  todo1.complete="0"
  await todo.store(db,todo1)
  ctx.body = { todo1 }
}

module.exports = {
  list,
  create,
  get,
  update,
  remove,
  complete,
  incomplete
}
