import { Component, OnInit } from '@angular/core';
import { data } from '../datasource';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  public data!: Object[];
  ngOnInit(): void {
    this.data = data.slice(0,5);
  }

}
