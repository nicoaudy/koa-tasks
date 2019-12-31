import { InterfaceTaskRepository } from './taskRepository';
import { Task } from '../models/task';

export class InMemoryTaskRepository implements InterfaceTaskRepository {

	private _tasks: Task[] = [];

	getAll(): Promise<Task[]> {

	}

	get(taskId: number): Promise<Task> {

	}

	create(task: Task): Promise<Task> {

	}

	update(taskId: number, task: Task): Promise<Task> {

	}

	delete(taskId: number): Promise<Task> {

	}
}
