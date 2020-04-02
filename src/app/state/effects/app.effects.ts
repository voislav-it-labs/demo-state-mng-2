import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, mergeMap } from 'rxjs/operators';
import * as TaskActions from '../actions/task-actions';
import { TaskService } from '../../services/task.service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  logAll$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.fetchTasks),
    tap(action => {
      console.log('logging action', action);
    }),
    mergeMap(() => this.taskService.getTasks()),
    map(tasks => {
      return TaskActions.fetchTasksSuccess({ tasks: tasks });
    }),
  ))
}
