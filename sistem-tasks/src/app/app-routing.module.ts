import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './components/features/list-tasks/list-tasks.component';
import { AddEditTasksComponent } from './components/features/add-edit-tasks/add-edit-tasks.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
