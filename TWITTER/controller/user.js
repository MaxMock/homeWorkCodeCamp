

const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');

const bcrypt = require('bcrypt')
module.exports = function (pool,repo) {
  return {
    async follow (ctx) {
      if(ctx.session.user !== undefined){
      const follower = ctx.session.user;
      const following = ctx.params.id;
      const follows = await repo.follow(pool,follower,following);
      const user = await repo.selectuser(pool,ctx.session.user);
      const Title = "follow"
      const conTent = user[0].name +" is follow you"
      const noti =await repo.insernoti(pool,following,Title,conTent,"...");
      ctx.body={  "status":"success"}
    }
    else{
      ctx.status=401
      ctx.body = {
        "error": "unauthorized"
      }
    }
     },
    async create (ctx) {
     let user = ctx.request.body
     const userpassword =user.password;
     const select = await repo.select(pool,user);
     if(select == "")
     {
      const hash = await bcrypt.hash(userpassword,10)
       user.password = hash;
      const id = await repo.create(pool,user)
       ctx.body = {}
     }
     else
     {
       ctx.status=401
      ctx.body = {
        "error": "wrong username"
      }
     }
    }, 
    async update (ctx) {
      if(ctx.session.user !== undefined){
      const user =ctx.request.body
      const iduser = ctx.params.id
      const chackid = repo.selectid(pool,iduser);
  if(chackid!=''){
      let updateuser =await repo.update(pool,iduser,user)
      if(updateuser=='true'){
        ctx.body={}
      }
      else{
        ctx.status=401
        ctx.body=updateuser
      } 
    }else
    {
      ctx.status=403
     ctx.body= {
        "error": "forbidden"
    }
    }
  }
  else
     {
       ctx.status=401
      ctx.body = {
        "error": "wrong username"
      }
    }
    
  },
  async signin (ctx) {
    let usersignin =ctx.request.body
    let selectsignin = await repo.selectuserbyemail(pool,usersignin)
    if(selectsignin != "")
    {
      const usersigninemail =usersignin.email
      const usersigninpassword =usersignin.password
      const check = await bcrypt.compare(usersigninpassword,selectsignin[0]["password"]);
      if(check){
        usersignin.password =selectsignin[0]["password"] 
        const id = await repo.signin(pool,usersignin)
        ctx.session.user= id[0].id;
        ctx.body = {} 
      }else
      {
        ctx.status=401
        ctx.body = {
          "error": "worng password"
        }
      }
    }
  },
  async signout (ctx) {
    if(ctx.session.user !== undefined){
      // const email =ctx.request.body.email
      // const password =ctx.request.body.password
      // const id = await repo.signin(pool,email,password)
      ctx.session=null;
      ctx.body = {} 
    }
      else
      {
        ctx.status=401
        ctx.body = {
          "error": "unauthorized"
        }
      }
    },
    async unfollow (ctx) {
      if(ctx.session.user !== undefined){
      const follower ="1";
      const following = ctx.params.id;
      const follows = await repo.unfollow(pool,follower,following);
      ctx.body={};}
      else
      {
        ctx.status=401
        ctx.body = {
          "error": "unauthorized"
        }}
     },
    async follower (ctx) {
      if(ctx.session.user !== undefined){
      const following_id = ctx.params.id;
      const follower = await repo.selectfollwer(pool,following_id)
      ctx.body={follower}}
      else
      {
        ctx.status=401
        ctx.body = {
          "error": "unauthorized"
        }}
    },
    async following (ctx) {
      if(ctx.session.user !== undefined){
      // const following_id = ctx.params.id;
      // const follower = await repo.selectfollwer(pool,following_id)
      ctx.body={follower}}
      else
      {
        ctx.status=401
        ctx.body = {
          "error": "unauthorized"
        }}

    }
    ,
    async test (ctx) {
      if(ctx.session.user !== undefined){
      // const following_id = ctx.params.id;
      // const follower = await repo.selectfollwer(pool,following_id)
      ctx.body = ctx.request.URL
    }
      else
      {
        ctx.status=401
        ctx.body = {
          "error": "unauthorized"
        }}
    },
    async chacklogin (ctx) {
      if(ctx.session.user !== undefined){
      // const following_id = ctx.params.id;
      // const follower = await repo.selectfollwer(pool,following_id)
      ctx.body = "hello" + ctx.session.user
    }
      else
      {
        ctx.status=401
        ctx.body = {
          "error": "unauthorized"
        }}
    }, async readchat (ctx) {
      if(ctx.session.user !== undefined){
        const messages = await repo.selectsenderchat(pool,ctx.session.user)

      ctx.body = {
        messages} 
    }
      else
      {
        ctx.status=401
        ctx.body = {
          "error": "unauthorized"
        }}
    },
    async	receiverreadchat (ctx) {
      if(ctx.session.user !== undefined&& ctx.params.userId !== null){
        const updateread = await repo.updatechatType(pool,ctx.session.user,ctx.params.userId)
        if(updateread){

          const user = await  repo.selectfollwer(pool,ctx.params.userId,ctx.session.user) 
          const messages = await repo.selectreceiverchat(pool,ctx.session.user,ctx.params.userId)
          ctx.body = {user,messages} 
        }
 
    }
      else
      {
        ctx.status=401
        ctx.body = {
          "error": "unauthorized"
        }}
    },
    async sendchat (ctx) {
      if(ctx.session.user !== undefined && ctx.params.userId !== null){

        let user =ctx.request.body
        
      await repo.insertchat(pool,ctx.session.user,ctx.params.userId,user.content)
      const userdetail = await repo.selectuser(pool,ctx.session.user);
      const Title = userdetail[0].name +" Chat With You"
      const conTent = userdetail[0].name +" : "+user.content
      const noti =await repo.insernoti(pool,ctx.params.userId,Title,conTent,"...");
      ctx.body={
        "status":"success"
      }

    }
      else
      {
        ctx.status=401
        ctx.body = {
          "error": "unauthorized"
        }}
    },
    async selectnoti (ctx) {
      if(ctx.session.user !== undefined&& ctx.params.userId !== null){
        let user = await repo.selectnoti(pool,ctx.session.user)
      ctx.body={
        user
      }

    }
      else
      {
        ctx.status=401
        ctx.body = {
          "error": "unauthorized"
        }}
    }
  }
}

