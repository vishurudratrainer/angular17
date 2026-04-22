import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-iflese',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iflese.component.html',
  styleUrl: './iflese.component.css'
})
export class IfleseComponent {
  showMe:boolean  =true

}
