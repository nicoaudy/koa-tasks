import { Task } from '../models/task';

export interface InterfaceTaskRepository {
	getAll(): Promise<Task[]>;
}
