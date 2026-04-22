import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Todos } from '../models/todos';
import {toSignal} from "@angular/core/rxjs-interop"
@Component({
  selector: 'app-todos3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos3.component.html',
  styleUrl: './todos3.component.css'
})
export class Todos3Component {
  apiService=inject(ApiService)
   todos =toSignal(this.apiService.getTodoDataNew(),{initialValue:[]})

}
