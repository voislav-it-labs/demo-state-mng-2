import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../../models/task';
import * as faker from 'faker';
import { TaskService } from '../../services/task.service';
import { Store } from '@ngrx/store';
import { TaskState, AppState } from '../../state/reducers';
import { fetchTasks, fetchTasksSuccess } from '../../state/actions/task-actions';
import { tasksSelector, toDoTasksSelector } from '../../state/selectors/task-selectors';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-canban-board',
  templateUrl: './canban-board.component.html',
  styleUrls: ['./canban-board.component.scss']
})
export class CanbanBoardComponent implements OnInit {

  toDoTasks: Task[] = [
    { id: 1, name: faker.lorem.words(3), status: TaskStatus.toDo},
    { id: 2, name: faker.lorem.words(3), status: TaskStatus.toDo},
    { id: 3, name: faker.lorem.words(3), status: TaskStatus.toDo},
    { id: 4, name: faker.lorem.words(3), status: TaskStatus.toDo},
  ];

  inProgressTasks: Task[] = [
    { id: 5, name: faker.lorem.words(3), status: TaskStatus.inProgress},
    { id: 6, name: faker.lorem.words(3), status: TaskStatus.inProgress},
    { id: 7, name: faker.lorem.words(3), status: TaskStatus.inProgress},
  ];

  TaskStatus = TaskStatus;

  tasks$ = this.store.select(toDoTasksSelector);

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    console.log('dispatching');
    forkJoin([

      this.store.select(tasksSelector),
      this.store.select(tasksSelector),
      this.store.select(tasksSelector),
      this.store.select(tasksSelector),
      this.store.select(tasksSelector),
      this.store.select(tasksSelector),
    ])
    .subscribe(t => {

    });

    this.store.dispatch(fetchTasks());


  }

}
