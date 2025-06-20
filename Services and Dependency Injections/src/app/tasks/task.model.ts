import { InjectionToken, Provider } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

//tokenization
export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>(
  'task-status-opitons'
);

//defining value type
export type TaskStatusOptions = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[]; // just the display that non service can also be injected

//not service sharing
export const TaskStatusOpitons: TaskStatusOptions = [
  { value: 'open', taskStatus: 'OPEN', text: 'Open' },
  { value: 'in-progress', taskStatus: 'IN_PROGRESS', text: 'In-Progress' },
  { value: 'done', taskStatus: 'DONE', text: 'Done' },
]; // we used the type here. just defined for this.

//interface for Task
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

//definind provider here
export const taskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOpitons,
};
