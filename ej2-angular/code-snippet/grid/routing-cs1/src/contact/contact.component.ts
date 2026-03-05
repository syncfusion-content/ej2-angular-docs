import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { employeeData } from '../datasource';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, GridModule],
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
