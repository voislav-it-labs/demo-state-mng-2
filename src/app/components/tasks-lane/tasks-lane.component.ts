import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Task, TaskStatus } from '../../models/task';

@Component({
  selector: 'app-tasks-lane',
  templateUrl: './tasks-lane.component.html',
  styleUrls: ['./tasks-lane.component.scss']
})
export class TasksLaneComponent implements OnInit, OnChanges {
  @Input() tasks: Task[];
  @Input() status: TaskStatus;

  title: string;
  statusClasses;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
     const { title, style} = this.getTitle(this.status)
     this.title = title;
     this.statusClasses = {[style]: true};
  }

  private getTitle(status: TaskStatus) {
    switch(status) {
      case TaskStatus.toDo:
        return {title: 'To Do', style: 'lane-to-do'};
      case TaskStatus.inProgress:
        return {title: 'In Progress', style: 'lane-in-progress' };
      case TaskStatus.awaitingReview:
        return {title: 'Awaiting Review', style: 'lane-awaiting-review' };
      case TaskStatus.done:
        return {title: 'Done', style: 'lane-done' };
      default:
        return {title: '', style: ''};
    }
  }

}
