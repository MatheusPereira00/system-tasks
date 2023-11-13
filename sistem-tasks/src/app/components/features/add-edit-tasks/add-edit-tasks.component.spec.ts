import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddEditTasksComponent } from './add-edit-tasks.component';

describe('AddEditTasksComponent', () => {
  let component: AddEditTasksComponent;
  let fixture: ComponentFixture<AddEditTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [AddEditTasksComponent]
});
    fixture = TestBed.createComponent(AddEditTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
      const fixture = TestBed.createComponent(AddEditTasksComponent);
      const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
