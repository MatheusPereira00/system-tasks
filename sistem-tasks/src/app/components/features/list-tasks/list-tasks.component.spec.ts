import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksComponent } from './list-tasks.component';
import { TasksService } from 'src/app/data-acess/service/tasks.service';

describe('ListTasksComponent', () => {
  let component: ListTasksComponent;
  let fixture: ComponentFixture<ListTasksComponent>;

  beforeEach(() => {
    const getAllTasks = {
      getAllTasks: () => {
        return [
          {
            id: '',
            title: 'task 1',
            description: 'description task 1',
            status: 'progress',
          },
          {
            id: '',
            title: 'task 2',
            description: 'description task 2',
            status: 'progress',
          },
        ];
      },
    };
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ListTasksComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('tasks conclued', () => {
    component.task = [
      {
        id: '',
        title: 'task 1',
        description: 'description task 1',
        status: 'progress',
      },
      {
        id: '',
        title: 'task 2',
        description: 'description task 2',
        status: 'progress',
      },
    ];
    component.ngOnInit();

    expect(component.task[0].status).toBeTruthy();
    expect(component.task[0].status).toBe('check');
  });
});
