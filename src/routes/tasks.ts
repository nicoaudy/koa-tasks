import * as Router from 'koa-router';
import { Task } from '../models/task';
import { TaskService } from './../services/taskService';
import { InMemoryTaskRepository } from '../repositories/inMemoryTaskRepository';

const router = new Router();
const service = new TaskService(new InMemoryTaskRepository());

router.get('/tasks', async(ctx) => {
	const tasks = await service.getAllTasks();

	ctx.status = 200;
	ctx.body = tasks;
});

router.get('/tasks/:id', async(ctx) => {
	const task = await service.getTask(Number(ctx.params.id));

	if(task) {
		ctx.status = 200;
		ctx.body = task;
	} else {
		ctx.throw(404);
	}
});

router.post('/tasks', async(ctx) => {
	const req = <Task>ctx.request.body;
		const newTask = await service.createTask(req);

		ctx.status = 201;
		ctx.body = newTask;
		ctx.set('location', 'http://localhost:3000/tasks/' + newTask.id)
});

router.put('/tasks/:id', async(ctx) => {
	const task = <Task>ctx.request.body;
	const updateTask = await service.updateTask(Number(ctx.params.id), task);

	if(updateTask) {
		ctx.status = 200;
		ctx.body = updateTask;
	} else {
		ctx.throw(404);
	}
});

router.delete('/tasks/:id', async(ctx) => {
	const deleteTask = await service.deleteTask(Number(ctx.params.id));

	if(deleteTask) {
		ctx.status = 200;
		ctx.body = deleteTask;
	} else {
		ctx.throw(404);
	}
});

export default router;
