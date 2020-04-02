import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  on,
  createReducer,
  Action,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Task } from '../../models/task';
import * as TaskActions from '../actions/task-actions';

export interface AppState {
  task: TaskState;
}

type TaskObjMap = {
  [index: number]: Task,
}

export interface TaskState {
  taskIds: number[];
  tasks: TaskObjMap;
  loading: boolean;
  chosenTaskId?: number;
}

// const tasksObj = {
//   1: {id: 1, name: 'asd', stateus: 1},
//   2: {},
//   3: {},
// };

// taskIds.map(id => tasksObj[id]);

export const reducers = createReducer<TaskState>({ taskIds: [], tasks: {}, loading: false },
  on(TaskActions.fetchTasks, (state, action) => {

    console.log(state, action);
    return {
      taskIds: [],
      tasks: {} as TaskObjMap,
      loading: true,
    };
  }),

  on(TaskActions.fetchTasksSuccess, (state, action) => {

    const obj = action.tasks.reduce((agg, task) => {
      agg[task.id] = task;
      return agg;
    }, {});

    return {
      taskIds: action.tasks.map(t => t.id),
      tasks: obj as TaskObjMap,
      loading: false
    }
  })
  );


export const allReducers: ActionReducerMap<any, any> = {
  task: reducers,
}

export function reducer(state: TaskState | undefined, action: Action) {
  return reducers(state, action);
}



export const metaReducers: MetaReducer<TaskState>[] = !environment.production ? [] : [];
