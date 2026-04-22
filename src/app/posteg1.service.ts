import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todos } from './models/todos';
@Injectable({
  providedIn: 'root'
})
export class Posteg1Service {
  private http = inject(HttpClient)
  private todoUrl ="https://jsonplaceholder.typicode.com/todos/"

  constructor() { }

  createTodo(data:Todos):Observable<Todos>{
    return this.http.post<Todos>(this.todoUrl,data);
  }
}
