import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navigate2',
  standalone: true,
  imports: [],
  templateUrl: './navigate2.component.html',
  styleUrl: './navigate2.component.css'
})
export class Navigate2Component {
  private route=inject(ActivatedRoute)
  userId:string|null=null
  node:string | null = null
  ngOnInit(){
    this.userId=this.route.snapshot.paramMap.get("userId")
    this.node=this.route.snapshot.queryParamMap.get("node")
  }

}
