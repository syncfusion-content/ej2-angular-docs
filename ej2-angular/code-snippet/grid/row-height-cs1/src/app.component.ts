import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { orderDetails } from './datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls:['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  public data?: Object[];

  @ViewChild('grid')
  public grid?: GridComponent;
  public toolbar?: Object[];
  public heightRow?: Object;

  ngOnInit(): void {
    this.data = orderDetails;
    this.heightRow = { small: 20, medium: 40, big: 60 };
  }
  clickHandler(args: any): void {
    (this.grid as any).rowHeight = (this.heightRow as any)[(args as any).target.id];
  }
}
