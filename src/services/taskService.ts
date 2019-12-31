import { InterfaceTaskRepository } from './../repositories/taskRepository';
import { Task } from '../models/task';

export class TaskService {
	private taskRepo: InterfaceTaskRepository;

	constructor(taskRepository: InterfaceTaskRepository) {
		this.taskRepo = taskRepository;
	}

	async getAllTasks(): Promise<Task[]> {
		return await this.taskRepo.getAll();
	}

	async getTask(id: number): Promise<Task> {
		console.log("Getting task with id " + id);
		return await this.taskRepo.get(id);
	}

	async createTask(task: Task): Promise<Task> {
		console.log("Creating task with name" + task.name);
		return await this.taskRepo.create(task);
	}

	async updateTask(id: number, task: Task): Promise<Task> {
		console.log("Updating task with id" + id);
		return await this.taskRepo.update(id, task);
	}

	async deleteTask(id: number): Promise<Task> {
		console.log("Deleting task with id" + id);
		return await this.taskRepo.delete(id);
	}
}
