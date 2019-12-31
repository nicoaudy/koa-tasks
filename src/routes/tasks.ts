import * as Router from 'koa-router';
import { TaskService } from './../services/taskService';
import { InMemoryTaskRepository } from '../repositories/inMemoryTaskRepository';

const router = new Router();
const service = new TaskService(new InMemoryTaskRepository());

router.get('/tasks', async(ctx) => {
	const tasks = service.getAllTasks();

	ctx.status = 200;
	ctx.body = tasks;
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
