import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-template2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template2.component.html',
  styleUrl: './template2.component.css'
})
export class Template2Component {
  res:any
    userModel ={username:'',bio:'',email:'',
      gender:'male',dob:''
    }
    onsubmit(form:any){
        this.res=form.value
    }
}
