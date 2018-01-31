const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');
const session = require('koa-session')
const db =  require('./../lib/db.js');
// const db =  require('./../lib/db.js');

const sessionConfig = {
key: 'sess',
maxAge: 3600*1000,
httpOnly: true,

store: {
        
 async get  (key, maxAge, { rolling }) {
        const data = await  db.ex(`
        select * from sessions where session_key=?;
        `,[key])
        if (data !='')
        {
                return JSON.parse(data[0].session_value) 
        }
       
},
 async set (key, sess, maxAge, { rolling }) {
        try    {
        let value = JSON.stringify(sess);
      const data = await  db.ex(`
        INSERT INTO sessions (session_key,session_value) VALUES (?,?)
        ON DUPLICATE KEY
        UPDATE session_key=?,session_value=?;
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
        app.keys = ['supersecret']
        app.use(session(sessionConfig, app))
        .use(handler)
        .listen(3000)
        function handler (ctx) {
        if (ctx.path === '/favicon.ico') return;
        let n = ctx.session.views || 0
        ctx.session.user="1"
        
        ctx.session.views = ++n   
        ctx.body = `${n} views`
        }
    



    
  



