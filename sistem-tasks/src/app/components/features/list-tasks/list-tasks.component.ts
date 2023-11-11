import { Component, OnInit, inject } from '@angular/core';
import { Tasks } from '../../data-acess/interface/tasks-interface';
import { TasksService } from '../../data-acess/service/tasks.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styles: [
    ' .container {  margin-top: 8rem;} .todo {text-decoration: line-through}',
  ],
})
export class ListTasksComponent implements OnInit {
  public task!: Tasks[];
  public id!: string | null;
  public taskStatus = false;

  private readonly _tasksService = inject(TasksService);

  public readonly getAllTasks$ = this._tasksService.getAllTasks$;

  public ngOnInit(): void {
    this._tasksService.getAllTasks();
  }

  public deletProduct(id: string | null): void {
    this._tasksService.deletTask(id).pipe(take(1)).subscribe()
    this._tasksService.getAllTasks();
  }
}
