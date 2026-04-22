import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigate1',
  standalone: true,
  imports: [],
  templateUrl: './navigate1.component.html',
  styleUrl: './navigate1.component.css'
})
export class Navigate1Component {
  router=inject(Router)

  goToText1(){
    this.router.navigate(['/text1'])
  }

}
