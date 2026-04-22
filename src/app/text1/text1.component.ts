import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-text1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text1.component.html',
  styleUrl: './text1.component.css'
})
export class Text1Component {
  username = ""
  username1 = model("")

}
