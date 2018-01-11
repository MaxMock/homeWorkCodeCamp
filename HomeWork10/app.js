const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');

// // // const db =  require('./lib/db.js');
app.listen(3000);
// async function sqlcon(){
// // get the client
// const mysql = require('mysql2/promise');
// // create the connection
// const connection = await mysql.createConnection(
// {
// host:'localhost',
// user: 'root',
// database: 'codecamp'
// });
// return connection;
// }
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs'
  ,
  cache: false,
  debug: true
  });

// app.use(async (ctx, next) => {
//   try
//   {
//     const connection=await sqlcon();    
//      // query database
     
// const [rows, fields] = await connection.execute('SELECT * FROM user');
//     await ctx.render('./homework10_1', {"message":"","user":rows});
//     await next();
//   }
//   catch (err)
//   {
//     ctx.status = 400
//     ctx.body = `Uh-oh: ${err.message}`
//   }
//   });

async function show() {
  const otherMiddleware=require('./controller/routes.js' )(app)
}
show();
