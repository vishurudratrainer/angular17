import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Posteg1Service } from '../posteg1.service';
import { Todos } from '../models/todos';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-postge1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './postge1.component.html',
  styleUrl: './postge1.component.css'
})
export class Postge1Component {

  postService = inject(Posteg1Service)
  res: Todos | null = null
  allInputsForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.allInputsForm = this.fb.group({
      todoId: ['', Validators.required],
      userId: ['', Validators.required],
      completed: ['', Validators.required],

    })
  }
  onFetch() {
    if (this.allInputsForm.valid) {
      let data = this.allInputsForm.value
      this.postService.createTodo(data).subscribe({
        next: (response) => this.res = response,
        error: (error) => console.log(error)
      })

    }

  }



}
