import { Component } from '@angular/core';
import { SquarePipe } from '../square.pipe';
@Component({
  selector: 'app-squareeg',
  standalone: true,
  imports: [SquarePipe],
  templateUrl: './squareeg.component.html',
  styleUrl: './squareeg.component.css'
})
export class SquareegComponent {

}
