import { Component, inject } from '@angular/core';
import { Tasks } from '../../data-acess/interface/tasks-interface';
import { TasksService } from '../../data-acess/service/tasks.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-tasks',
  templateUrl: './add-edit-tasks.component.html',
  styleUrls: ['./add-edit-tasks.component.scss'],
})
export class AddEditTasksComponent {
  public task!: Tasks;

  private readonly _tasksService = inject(TasksService);
  private readonly _router = inject(Router);

  form = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
  });

  public postTask(): void {
    const newTask = this.form.getRawValue();
    this._tasksService.postTask(newTask);
    this._router.navigate(['/']);
  }
}
