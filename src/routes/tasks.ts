import * as Router from 'koa-router';

const router = new Router();

router.get('/tasks', async(ctx) => {
	ctx.body = "Return all tasks";
});

router.get('/tasks/:id', async(ctx) => {
	const param = ctx.params.id;
	ctx.body = "Return tasks with id" + param;
});

router.post('/tasks', async(ctx) => {
	ctx.body = "Create a new tasks";
});

router.put('/tasks/:id', async(ctx) => {
	const param = ctx.params.id;
	ctx.body = "Update tasks with id " + param;
});

router.delete('/tasks/:id', async(ctx) => {
	const param = ctx.params.id;
	ctx.body = "Delete tasks with id " + param;
});

export default router;
