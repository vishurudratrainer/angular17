import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todos } from './models/todos';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient)
  private todoUrl ="https://jsonplaceholder.typicode.com/todos/"
  private commentUrl="https://jsonplaceholder.typicode.com/comments/"
  constructor() { }

  getTodoData():Observable<any>{
    return this.http.get(this.todoUrl);
  }

   getTodoDataNew():Observable<Todos[]>{
    return this.http.get<Todos[]>(this.todoUrl);
  }
  getComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(this.commentUrl)
  }


}


