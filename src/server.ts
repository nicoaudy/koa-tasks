import * as Koa from 'koa';
import * as Router from 'koa-router';

import logger = require('koa-logger');

const app = new Koa();
const router = new Router();

app.use(logger());

router.get('/', async(ctx) => {
	ctx.body = "First Koa response"
})

app.use(router.routes());

app.listen(3000);
console.log('Koa server is up and listening on port 3000');
