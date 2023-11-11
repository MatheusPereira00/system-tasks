import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, take } from 'rxjs';
import { Tasks } from '../interface/tasks-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _http = inject(HttpClient);

  private _getAllTasksSubject = new BehaviorSubject<Tasks[]>([]);
  public readonly getAllTasks$ = this._getAllTasksSubject.asObservable();

  public getAllTasks(): void {
    this._http.get<Tasks[]>(`${environment.apiTasks}`).pipe(take(1)).subscribe(tasks => {
      this._getAllTasksSubject.next(tasks);
      console.log(tasks);
    })
  }
}
