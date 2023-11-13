import { Component, OnInit, inject } from '@angular/core';
import { Tasks } from '../../data-acess/interface/tasks-interface';
import { TasksService } from '../../data-acess/service/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-edit-tasks',
  templateUrl: './add-edit-tasks.component.html',
  styles: [' .container {  margin-top: 8rem;}'],
})
export class AddEditTasksComponent implements OnInit {
  public task!: Tasks;
  public id!: string | null;
  public isEdit = false;
  public form: FormGroup = new FormGroup({});

  public taskStatus = ['Pendente', 'Em andamento', 'Concluido'];

  private _activedRoute = inject(ActivatedRoute);
  private readonly _tasksService = inject(TasksService);
  private readonly _router = inject(Router);

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ])
      ),
      description: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ])
      ),
      status: new FormControl('', Validators.required),
    });

    this.id = this._activedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.isEdit = true;
      this._tasksService
        .getTaskById(this.id)
        .pipe(take(1))
        .subscribe((tasks) => {
          this.form.patchValue({
            title: tasks.title,
            description: tasks.description,
            status: tasks.status,
          });
        });
    }
  }

  public updateTask(): void {
    const title = this.form.get('title')?.value;
    const description = this.form.get('description')?.value;
    const status = this.form.get('status')?.value;

    this._tasksService
      .updateTask(this.id, title, description, status)
      .subscribe((task) => {
        this.task = task;
        this._router.navigate(['/']);
      });
  }

  public postTask(): void {
    if (this.form.valid) {
      const newTask = this.form.getRawValue();
      this._tasksService.postTask(newTask);
      this._router.navigate(['/']);
    }
  }
}
