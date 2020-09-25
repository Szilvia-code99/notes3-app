import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dummy-component',
  templateUrl: './dummy-component.component.html',
  styleUrls: ['./dummy-component.component.scss']
})
export class DummyComponentComponent implements OnInit {
name:String;
  constructor( private route: ActivatedRoute) { 
    }

  ngOnInit() {this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
  }

}
