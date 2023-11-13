import { Component, OnInit, inject } from '@angular/core';
import { Tasks } from '../../../data-acess/interfaces/tasks-interface';
import { TasksService } from '../../../data-acess/service/tasks.service';
import { take } from 'rxjs';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-list-tasks',
    templateUrl: './list-tasks.component.html',
    styles: [' .container {  margin-top: 8rem;}'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        RouterLink,
        AsyncPipe,
    ],
})
export class ListTasksComponent implements OnInit {
  public task!: Tasks[];
  public id!: string | null;
  public editMode = false;

  private readonly _tasksService = inject(TasksService);

  public readonly getAllTasks$ = this._tasksService.getAllTasks$;

  public ngOnInit(): void {
    this._tasksService.getAllTasks();
  }

  public deletProduct(id: string | null): void {
    this._tasksService.deletTask(id).pipe(take(1)).subscribe();
    this._tasksService.getAllTasks();
  }

  onClick(id: string | null, title: string | null, description: string | null) {
    this.editMode = true;
    if (this.editMode) {
      this._tasksService
        .updateTask(id, title, description, 'concluded')
        .pipe(take(1))
        .subscribe();
      this._tasksService.getAllTasks();
    }
  }
}
