const _ = require('lodash')
const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
const db =  require('./../lib/db.js');
const todo =  require('./../models/models.js');

async function list (ctx) {
  const books= await todo.findAll(db)
  ctx.body = books
  // const getdata= require('./../models/models.js')(db);
}

async function create (ctx) {
  const todo1 = ctx.request.body
  await todo.storeinsert(db,todo1)
  ctx.body = { todo1 }
}

async function get (ctx) {
  const id = await todo.find(db,ctx.params.id)
  ctx.body = { id }
}

async function update (ctx) {
//  let todo1 = await todo.find(db,ctx.params.id)
  book=ctx.request.body
  let update = await todo.storeupdate(db,book)
  ctx.body = { update }
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
