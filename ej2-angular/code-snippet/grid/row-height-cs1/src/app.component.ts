import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { orderDetails } from './datasource';

@Component({
imports: [ GridModule,  FormsModule, ButtonModule],

,
standalone: true,
  selector: 'app-root',
  template: `
      <div>
          <button ejs-button id="small" cssClass="e-small" (click)="clickHandler($event)">
          Change height 20px</button>
          <button ejs-button id="medium" cssClass="e-small" (click)="clickHandler($event)">
          Default height 42px</button>
          <button ejs-button  id="big" cssClass="e-small" (click)="clickHandler($event)">
          Change height 60px</button>
      </div>
      <div class="control-section"  style="padding-top:20px">
          <ejs-grid #grid [dataSource]='data' rowHeight='42' height='400' [toolbar]='toolbar'>
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'>
                  </e-column>
                  <e-column field='CustomerName' headerText='Customer Name' width='150'>
                  </e-column>
                  <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" 
                  textAlign='Right'> </e-column>
                  <e-column field='Freight' headerText='Freight' width='120' format='C2'
                  textAlign='Right'></e-column>
                  <e-column field='ShippedDate' headerText='Shipped Date' width='140' format='yMd' 
                  textAlign='Right'></e-column>
                  <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column> 
              </e-columns>
          </ejs-grid>
      </div>`
})
export class AppComponent {

  public data?: Object[];

  @ViewChild('grid')
  public grid?: GridComponent;
  public toolbar?: Object[];
  public heightRow: { [key: string]: number } = {
    small: 20,
    medium: 40,
    big: 60
  };
  ngOnInit(): void {
    this.data = orderDetails;
  }

  clickHandler(args: MouseEvent): void {
    (this.grid as GridComponent).rowHeight = this.heightRow[(args.target as HTMLElement).id];
  }
}
