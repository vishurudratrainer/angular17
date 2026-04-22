import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  n1 = "0"
  n2 = "0"
  ans = 0

  add() {
    this.ans = parseInt(this.n1) + parseInt(this.n2)
  }

  sub() {
    this.ans = parseInt(this.n1) - parseInt(this.n2)
  }

  mul() {
    this.ans = parseInt(this.n1) * parseInt(this.n2)
  }

  div() {
    this.ans = parseInt(this.n1) / parseInt(this.n2)
  }

}
