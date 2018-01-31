const Koa = require('koa')
const IO = require('koa-socket')
const app = new Koa()
const io = new IO()
io.attach(app)
io.on('connection', ({ socket }) => {
console.log('new connection')
socket.on('message', (data) => {
console.log('receive: ' + data)
socket.send('I got ' + data)
})
socket.on('disconnect', () => {
console.log('client disconnect')
})
})
app.listen(3000)