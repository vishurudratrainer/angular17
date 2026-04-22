import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Todos } from '../models/todos';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-todostable',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './todostable.component.html',
  styleUrl: './todostable.component.css'
})
export class TodostableComponent {

    private apiService = inject(ApiService)
   todoData:Todos[] =[]

   onButtonClick2(){
    console.log("Button clicked")
    this.apiService.getTodoDataNew()
    .subscribe(respose =>this.todoData=respose)
  }

}
