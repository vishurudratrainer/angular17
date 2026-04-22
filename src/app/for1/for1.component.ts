import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-for1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for1.component.html',
  styleUrl: './for1.component.css'
})
export class For1Component {

  colors:string[] =["Red","Green","Blue"]
  actors:Actor[]=[new Actor("A1",44), new Actor("A2",55)]
}


class Actor{
  actorName:string
  actorAge:number
  constructor(actorName:string,actorAge:number){
    this.actorAge=actorAge
    this.actorName=actorName
  }
}