import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { data } from '../datasource';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, GridModule],
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
