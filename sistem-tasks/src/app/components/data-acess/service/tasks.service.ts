import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { Tasks } from '../interface/tasks-interface';
import { environment } from 'src/environments/environment';
import { NewTask } from '../interface/newTask-interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private _http = inject(HttpClient);

  private _getAllTasksSubject = new BehaviorSubject<Tasks[]>([]);
  public readonly getAllTasks$ = this._getAllTasksSubject.asObservable();

  private _postTaskSubject = new Subject<Tasks>();
  public postTask$ = this._postTaskSubject.asObservable();

  private _deletTaskSubject = new Subject<Tasks[]>();
  public deletTask$ = this._deletTaskSubject.asObservable();

  public getAllTasks(): void {
    this._http
      .get<Tasks[]>(`${environment.apiTasks}`)
      .pipe(take(1))
      .subscribe((tasks) => {
        this._getAllTasksSubject.next(tasks);
        console.log(tasks);
      });
  }

  public getTaskById(id: string | null) {
    return this._http.get<Tasks>(`${environment.apiTasks}/${id}`);
  }

  public postTask(task: NewTask) {
    return this._http
      .post<NewTask>(`${environment.apiTasks}`, task)
      .pipe(take(1))
      .subscribe((task) => {
        this._postTaskSubject.next(task);
      });
  }

  public updateTask(
    id: string | null,
    title: string | null,
    description: string | null,
    status: string | null
  ): Observable<Tasks> {
    const updateTask = {
      id: id,
      title: title,
      description: description,
      status: status,
    };
    return this._http.put<Tasks>(`${environment.apiTasks}/${id}`, updateTask);
  }

  public updateStatus(id: string | null, status: string | null) {
    return this._http.put<Tasks>(`${environment.apiTasks}/${id}`, {
      status,
    });
  }

  public deletTask(id: string | null) {
    return this._http.delete<Tasks>(`${environment.apiTasks}/${id}`);
  }
}
