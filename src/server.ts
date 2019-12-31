import * as Koa from 'koa';
import logger = require('koa-logger');

const app = new Koa();
app.use(logger());

app.listen(3000);

console.log('Koa server is up and listening on port 3000');
