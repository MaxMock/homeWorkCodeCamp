const Koa = require('koa');
const app = new Koa();
const session = require('koa-session')
const sessionStore = {}
const sessionConfig = {
key: 'sess',
maxAge: 3600,
httpOnly: true,
store: {
get (key, maxAge, { rolling }) {
    let r = sessionStorage;
return sessionStore[key]
},
set (key, sess, maxAge, { rolling }) {
sessionStore[key] = sess
},
destroy (key) {
delete sessionStore[key]
}
}
}