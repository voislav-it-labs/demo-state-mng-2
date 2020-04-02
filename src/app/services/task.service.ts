import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task, TaskStatus } from '../models/task';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of([
      { id: 1, name: faker.lorem.words(3), status: TaskStatus.toDo},
      { id: 2, name: faker.lorem.words(3), status: TaskStatus.toDo},
      { id: 3, name: faker.lorem.words(3), status: TaskStatus.toDo},
      { id: 4, name: faker.lorem.words(3), status: TaskStatus.toDo},
      { id: 5, name: faker.lorem.words(3), status: TaskStatus.inProgress},
      { id: 6, name: faker.lorem.words(3), status: TaskStatus.inProgress},
      { id: 7, name: faker.lorem.words(3), status: TaskStatus.inProgress},
    ]);
  }

}
