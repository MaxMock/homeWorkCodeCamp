const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
const getdata= require('./../models/homework10_1.js');
// app.listen(3000);

// render(app, {
//   root: path.join(__dirname, './../views'),
//   layout: 'template',
//   viewExt: 'ejs'
//   ,
//   cache: false,
//   debug: true
//   });
// const db =  require('./../lib/db.js');
module.exports=function(app){
  app.use(async (ctx, next) => {
    try
    {
      let newarr=[];
      let alluserrows = await getdata.getalluser(1001);
      await ctx.render('./homework10_1', {"message":"","user":alluserrows});
   
      await next();
    }
    catch (err)
    {
      ctx.status = 400
      ctx.body = `Uh-oh: ${err.message}`
    }
  });
}
  // module.exports=function(app){}