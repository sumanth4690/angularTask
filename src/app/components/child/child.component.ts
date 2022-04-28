import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EventHandlerService } from 'src/app/event-handler.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  // recivedFromAnother: any;
  constructor() {}
  // private _eh: EventHandlerService
  ngOnInit() {
    // this._eh.recivedString.subscribe((msg) => {this.recivedFromAnother = msg;});
  }
}
