import { Component, model, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator2.component.html',
  styleUrl: './calculator2.component.css'
})
export class Calculator2Component {
  n1 = model(0)
  n2 = model(0)
  ans = 0
  add() {
    this.ans = computed(() => this.n1() + this.n2())()
  }

  sub() {
    this.ans = computed(() => this.n1() - this.n2())()
  }

  mul() {
    this.ans = computed(() => this.n1() * this.n2())()
  }

  div() {
    this.ans = computed(() => this.n1() / this.n2())()
  }
}
