const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const path = require('path');

app.listen(3000);

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs'
  ,
  cache: false,
  debug: true
});

async function show() {
  const otherMiddleware=require('./controller/routes.js' )(app)
}
show();
