import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import e from 'express';
@Component({
  selector: 'app-pipeeg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipeeg.component.html',
  styleUrl: './pipeeg.component.css'
})
export class PipeegComponent {
  today = new Date()
  price=200.275
  message="Welcome to pipe"
  emp=new Emp(1,"Vijay")

}

class Emp{
  empId:number
  empName:string
  constructor(empId:number,empName:string){
    this.empId=empId
    this.empName=empName
  }
}