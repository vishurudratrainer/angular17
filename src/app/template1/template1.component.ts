import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-template1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template1.component.html',
  styleUrl: './template1.component.css'
})
export class Template1Component {
  res:any
  onLogin(data:any){
    console.log("Form data",data)
    this.res=data
  }
}
