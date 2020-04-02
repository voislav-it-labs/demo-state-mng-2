import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import { TaskStatus } from '../../models/task';

export const taskState = (state: AppState) => state.task;

export const taskIdsSelector = createSelector(
  taskState,
  state => state.taskIds,
)

export const taskObjSelector = createSelector(
  taskState,
  state => state.tasks,
)

export const tasksSelector = createSelector(
  taskIdsSelector,
  taskObjSelector,
  (taskIds, tasks) => {
    console.log('executing');
    return taskIds.map(id => tasks[id]);
  }
);

export const toDoTasksSelector = createSelector(
  tasksSelector,
  (tasks) => {
    return tasks.filter(task => task.status === TaskStatus.toDo);
  }
)

export const tasksLoadingSelector = createSelector(
  taskState,
  (state) => state.loading,
);

const sum = (a, b) => {
  console.log('sum', a, b);

  return a + b;
}

sum(1, 2);
sum(2, 1);
sum(1, 2);
sum(1, 2);
