import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Todos } from '../models/todos';
@Component({
  selector: 'app-todos1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos1.component.html',
  styleUrl: './todos1.component.css'
})
export class Todos1Component {
  todosResponse:any

  private apiService = inject(ApiService)
   todoData:Todos[] =[]
   comments:Comment[]=[]
  onButtonClick(){
    console.log("Button clicked")
    this.apiService.getTodoData()
    .subscribe(respose =>this.todosResponse=respose)
  }

  
  onButtonClick2(){
    console.log("Button clicked")
    this.apiService.getTodoDataNew()
    .subscribe(respose =>this.todoData=respose)
  }

    onButtonClick3(){
    console.log("Button clicked")
    this.apiService.getComments()
    .subscribe(respose =>this.comments=respose)
  }
}
