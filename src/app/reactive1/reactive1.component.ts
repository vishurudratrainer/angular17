import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive1',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive1.component.html',
  styleUrl: './reactive1.component.css'
})
export class Reactive1Component {
  res:any
  private fb = inject(FormBuilder)
  contactForm = this.fb.group(
    { name: ['', [Validators.required, Validators.minLength(3)]] ,
      email: ['',[Validators.required,Validators.email]]
    })

    onSubmit(){
      if(this.contactForm.valid){
        this.res = this.contactForm.value
      }
    }
}
