const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
const db =  require('./../lib/db.js');
// const getdata= require('./../models/models.js')(db);


module.exports=function(app){
  app.use(async (ctx, next) => {
    try
    {
      let newarr=[];
      const repo = require('./../repository/user.js')
      // const user1 = await repo.find(db,8)
      // newarr.push(user1);
      // await ctx.render('./homework10_1', {"message":"","user":newarr});

      // const user1 = await repo.findAll(db);
      // await ctx.render('./homework10_1', {"message":"","user":user1});

      // const user1 = await repo.find(db,8)
      // user1.firstName = 'ttttt'
      // await repo.store(db, user1)
      // const userall = await repo.findAll(db);
      // await ctx.render('./homework10_1', {"message":"","user":userall});



      //  await repo.remove(db,8)
      const userall = await repo.findAll(db);
      await ctx.render('./homework10_1', {"message":"","user":userall});


      // const user1 = await getdata.find(6);
      // user1.firstName = 'test6';
      // user1.save();
      // const user1 = await getdata.find(6);
      // user1.remove();
      // let alluserrows = await getdata.findAll();



      await next();
    }
    catch (err)
    {
      ctx.status = 400
      ctx.body = `Uh-oh: ${err.message}`
    }
  });
}
