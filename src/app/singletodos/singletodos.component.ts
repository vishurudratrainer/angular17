import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-singletodos',
  standalone: true,
  imports: [],
  templateUrl: './singletodos.component.html',
  styleUrl: './singletodos.component.css'
})
export class SingletodosComponent {
  private route=inject(ActivatedRoute)
  todoId: string | null = null
  title:string | null = null

  ngOnInit(){
    this.todoId=this.route.snapshot.paramMap.get("todoId")
    this.title=this.route.snapshot.queryParamMap.get("title")
  }

}
