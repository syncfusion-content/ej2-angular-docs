import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule, LineSeriesService, CategoryService } from '@syncfusion/ej2-angular-charts';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  standalone: true,
  selector: 'app-container',
  imports: [CommonModule, ChartModule, ButtonModule],
  providers: [LineSeriesService, CategoryService],
  template: `
    <div>
      <button ej-button id="add" (click)="Add()">Add Chart</button>
      <div *ngFor="let item of items">
        <ejs-chart [id]="item.id" [title]="title">
          <e-series-collection>
            <e-series
              [dataSource]="chartData"
              type="Line"
              xName="x"
              yName="y"
              name="Germany"
              [marker]="marker">
            </e-series>
          </e-series-collection>
        </ejs-chart>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  public i: number = 0;
  public chartData?: Object[];
  public marker?: Object;
  public title?: string;
  public items: any = [];

  ngOnInit(): void {
    this.chartData = [
      { x: 1, y: 21 }, { x: 2, y: 24 }, { x: 3, y: 36 },
      { x: 4, y: 38 }, { x: 5, y: 54 }, { x: 6, y: 57 }, { x: 7, y: 70 }
    ];
    this.title = 'Inflation - Consumer Price';
    this.marker = { visible: true };
  }

  Add(): void {
    const id = 'chart-container' + this.i;
    this.items.push({ id });
    this.i++;
  }
}
