export enum TaskStatus {
  toDo,
  inProgress,
  awaitingReview,
  done,
}

export interface Task {
  id: number,
  name: string;
  status: TaskStatus;
}
