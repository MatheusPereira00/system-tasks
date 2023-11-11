import { Component, OnInit, inject } from '@angular/core';
import { Tasks } from '../../data-acess/interface/tasks-interface';
import { TasksService } from '../../data-acess/service/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  public task!: Tasks[];
  
  private readonly _tasksService = inject(TasksService);

  public readonly getAllTasks$ = this._tasksService.getAllTasks$;

  public ngOnInit(): void {
    this._tasksService.getAllTasks();
  }
}
