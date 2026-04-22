import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Text1Component } from './text1/text1.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { For1Component } from './for1/for1.component';
import { IfleseComponent } from './iflese/iflese.component';
import { SwitchComponent } from './switch/switch.component';
import { PipeegComponent } from './pipeeg/pipeeg.component';
import { SquareegComponent } from './squareeg/squareeg.component';
import { Reactive1Component } from './reactive1/reactive1.component';
import { Template1Component } from './template1/template1.component';
import { Reactive2Component } from './reactive2/reactive2.component';
import { Template2Component } from './template2/template2.component';
import { Todos1Component } from './todos1/todos1.component';
import { Postge1Component } from './postge1/postge1.component';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Navigate1Component } from './navigate1/navigate1.component';
import { Navigate2Component } from './navigate2/navigate2.component';
import { TodostableComponent } from './todostable/todostable.component';
import { SingletodosComponent } from './singletodos/singletodos.component';
import { ChartComponent } from './chart/chart.component';
import { ParentComponent } from './parent/parent.component';
import { Todos3Component } from './todos3/todos3.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todos3Component,ParentComponent,ChartComponent,SingletodosComponent,TodostableComponent,Navigate2Component,Navigate1Component,RouterOutlet,RouterLink,Postge1Component,Todos1Component,Template2Component,Reactive2Component,Template1Component,Reactive1Component,SquareegComponent,PipeegComponent,SwitchComponent,IfleseComponent,For1Component,CalculatorComponent,Calculator2Component,Text1Component,RouterOutlet,Child1Component,Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample1';
}
