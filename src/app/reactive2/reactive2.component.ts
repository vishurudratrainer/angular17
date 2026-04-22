import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive2',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive2.component.html',
  styleUrl: './reactive2.component.css'
})
export class Reactive2Component {
  allInputsForm: FormGroup;
  res:any;
  constructor(private fb:FormBuilder){
    this.allInputsForm=this.fb.group({
      fullName:['',Validators.required],
      bio: [''],
      email: ['',Validators.email],
      age:[null,[Validators.min(5)]],
      dob: [''],
      gender:['male'],
      country:["US"]
    })
  }

  onsubmit(){
    if(this.allInputsForm.valid){
      this.res=this.allInputsForm.value

    }
  }

}
