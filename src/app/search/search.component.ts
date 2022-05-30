import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private _route:ActivatedRoute) { }
  color='';
  price='';
  size ='';
  ngOnInit(): void {
    this._route.queryParams.subscribe(params=>this.color =params['color'])
    this._route.queryParams.subscribe(params=>this.price =params['price'])
    this._route.queryParams.subscribe(params=>this.size =params['size'])    
  }
}
