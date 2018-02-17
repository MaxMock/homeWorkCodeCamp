const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const mysql2 = require('mysql2/promise')
const dbConfig = require('./../config/database.json')
const session =require('koa-session')
const makeuserCtrl = require('./../controller/user.js')
const userRepo = require('./../repo/user.js')
const pool = mysql2.createPool(dbConfig)
const userCtrl = makeuserCtrl(pool,userRepo)
// const maketweetCtrl = require('./../controller/tweet.js')
// const tweetRepo = require('./../repo/tweet.js')
// const tweetCtrl = makeTweetCtrl(pool,tweerRepo)

const sessionConfig = {
  key: 'sess',
  maxAge: 3600*1000,
  httpOnly: true,
  
  store: {
          
   async get  (key, maxAge, { rolling }) {
          const data = await  pool.execute(`
          select * from sessions where session_id	=?;
          `,[key])
          if (data[0]!="")
          {
                  return JSON.parse(data[0][0].session_value) 
          }
         
  },
   async set (key, sess, maxAge, { rolling }) {
          try    {
          let value = JSON.stringify(sess);
        const data = pool.execute(`
          INSERT INTO sessions (session_id,session_value) VALUES (?,?)
          ON DUPLICATE KEY
          UPDATE session_id=?,session_value=?;
          `,[key,value,key,value])
          // sessionStore[key] = sess   
    
  }catch(error){ 
          console.log(error)
  };
  },
  destroy (key) {
         
  }
  }
  }

          

const router = new Router()
//user
.patch('/user/:id',userCtrl.update)
.put('/user/:id/follow',userCtrl.follow)
.delete('/user/:id/follow',userCtrl.test)
.get('/user/:id/follow',userCtrl.following)
.get('/user/:id/followed',userCtrl.follower)
.get('/user/chacklogin',userCtrl.chacklogin)
//auth
.post('/auth/signup',userCtrl.create)
.post('/auth/signin',userCtrl.signin)
.get('/auth/signout',userCtrl.signout)
.post('/auth/verify',userCtrl.test)
//message
.get('/message',userCtrl.readchat)
.get('/message/:userId',userCtrl.receiverreadchat)
.post('/message/:userId',userCtrl.sendchat)
//tweet
.get('/tweet',userCtrl.test)
.post('/tweet',userCtrl.test)
.post('/tweet/:id/retweet',userCtrl.test)
.post('/tweet/:id/reply',userCtrl.test)
.put('/tweet/:id/like',userCtrl.test)
.put('/tweet/:id/vote/:voteId',userCtrl.test)
.delete('/tweet/:id/like',userCtrl.test)
//notification
.get('/notification',userCtrl.selectnoti)
//upload
.post('/upload',userCtrl.test)

app.keys = ['supersecret']
app.use(requestLogger)
app.use(session(sessionConfig, app))
app.use(bodyParser())
app.use(chacklogin)
app.use(router.routes())
app.listen(3000)


async function requestLogger (ctx, next) {

  console.log(`${ctx.method} ${ctx.status} ${ctx.path}`)
  await next()
}
  async function chacklogin (ctx, next) {
    if(ctx.path=='/auth/signin'){
      
       await next();
    }
    else{
    if(ctx.session.user!=undefined)
    {
      await next()
    }else{
      ctx.status=401
      ctx.body={"erroe":"Unauthorized"}
    }
  }
   
  }