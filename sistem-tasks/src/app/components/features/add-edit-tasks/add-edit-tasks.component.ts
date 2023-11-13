import { Component, OnInit, inject } from '@angular/core';
import { Tasks } from '../../../data-acess/interfaces/tasks-interface';
import { TasksService } from '../../../data-acess/service/tasks.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';
import { CustomValidationComponent } from '../../../custom-validation/custom-validation.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-add-edit-tasks',
    templateUrl: './add-edit-tasks.component.html',
    styles: [' .container {  margin-top: 8rem;}'],
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        CustomValidationComponent,
        NgFor,
        RouterLink,
    ],
})
export class AddEditTasksComponent implements OnInit {
  public task!: Tasks;
  public id!: string | null;
  public isEdit = false;
  public form: FormGroup = new FormGroup({});

  public taskStatus = ['pending', 'progress', 'concluded'];

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
      status: new FormControl('',),
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
