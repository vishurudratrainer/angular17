import { Component,input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  data =input<number[]>([40,50,60,70,90])

}
