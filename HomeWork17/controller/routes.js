const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
const db =  require('./../lib/db.js');
const getdata= require('./../models/models.js')(db);


module.exports=function(app){
  app.use(async (ctx, next) => {
    try
    {
      let newarr=[];
      // const user1 = await getdata.find(6);
      // user1.firstName = 'tester2';
      // user1.save();
      // let alluserrows = await getdata.findByUsername("user1");
      // newarr.push(alluserrows);

      const user1 = await getdata.find(6);
      user1.name = 'testerw'
      user1.save()
      newarr.push(user1);
      await ctx.render('./homework10_1', {"message":"","user":newarr});
      await next();
    }
    catch (err)
    {
      ctx.status = 400
      ctx.body = `Uh-oh: ${err.message}`
    }
  });
}
