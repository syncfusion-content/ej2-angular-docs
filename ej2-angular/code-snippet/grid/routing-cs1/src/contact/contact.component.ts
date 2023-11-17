import { Component, OnInit } from '@angular/core';
import { employeeData } from '../datasource';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  public data!: Object[];
  ngOnInit(): void {
    this.data = employeeData.slice(0,5);
  }

}
