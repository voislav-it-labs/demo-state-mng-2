import { createAction, props } from "@ngrx/store";
import { Task } from '../../models/task';

export const TaskActions = {
  fetch: '[Task] fetch',
  fetchSuccess: '[Task] fetch success',
  transitionStatusLeft: '[Task] transition status left',
  transitionStatusRight: '[Task] transition status right',
}

export const fetchTasks = createAction(TaskActions.fetch);
export const fetchTasksSuccess = createAction(
  TaskActions.fetchSuccess,
  props<{ tasks: Task[] }>()
);

export const transitionStatusLeft = createAction(
  TaskActions.transitionStatusLeft,
  props<{ taskId: number }>()
)

export const transitionStatusRight = createAction(
  TaskActions.transitionStatusRight,
  props<{ taskId: number }>()
)
