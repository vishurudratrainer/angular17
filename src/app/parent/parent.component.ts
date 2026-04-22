import { Component ,signal} from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  mychartValues=signal([100,20,1,34,56,78,99,100,200,10])

}
