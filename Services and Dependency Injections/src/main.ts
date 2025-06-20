import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TasksService } from './app/tasks/tasks.service';

// export const TaskServiceToken = new InjectionToken('task-service-token')
// bootstrapApplication(AppComponent ,{providers:[ {provide: TaskServiceToken, useClass:TasksService}]}).catch((err) => console.error(err));


//another way of providing services though not useable.

// import { TasksService } from './app/tasks/tasks.service';
// bootstrapApplication(AppComponent , {providers: [TasksService]}).catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch((err) => console.error(err));
