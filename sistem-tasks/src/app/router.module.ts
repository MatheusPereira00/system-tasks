import { Routes } from '@angular/router';
import { ListTasksComponent } from './components/features/list-tasks/list-tasks.component';
import { AddEditTasksComponent } from './components/features/add-edit-tasks/add-edit-tasks.component';

export const tasksRoutes: Routes = [
  {
    path: '',
    component: ListTasksComponent,
  },
  {
    path: 'edit/:id',
    component: AddEditTasksComponent,
  },
  {
    path: 'newTask',
    component: AddEditTasksComponent,
  },
];
