const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const Todo = require('./controller/todo')

const router = new Router()
  .get('/books', Todo.list)
  .post('/books', Todo.create)
  // .get( '/todos/:id', Todo.get)
  .post('/books/:id', Todo.update)
  .delete('/books/:id', Todo.remove)
  // .put('/todos/:id/complete', Todo.complete)
  // .delete('/todos/:id/incomplete', Todo.incomplete)

const app = new Koa()
app.use(cors({
  origin: function(ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    return '*';
  },
  exposeHeaders: ['www.localhost:3000', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE','PUT'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
.use(bodyParser())
  .use(router.routes())
  .listen(3000)
