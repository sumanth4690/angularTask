import { Component, OnInit } from '@angular/core';
// import { emit } from 'process';
import { EventHandlerService } from 'src/app/event-handler.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  // rec2String: any;
  // recstring3:any;
  // msg2:any;

  constructor() { 
   }// private _eh2:EventHandlerService

  ngOnInit(){
    // this._eh2.rec2String.subscribe((msg2)=>{this.rec2String=msg2})
    // this._eh2.recstring3.subscribe((msg3)=>this.recstring3=msg3)
  }
}
