import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
imports: [ GridModule,  FormsModule, ButtonModule],

,
standalone: true,
  selector: 'app-root',
  template: `<div >
              <button ejs-button id="small" cssClass="e-small" 
              (click)="changeHeaderHeight($event)">
              Change height 20px</button>
              <button ejs-button id="medium" cssClass="e-small" 
              (click)="changeHeaderHeight($event)">
              Default height 42px</button>
              <button ejs-button  id="big" cssClass="e-small" 
              (click)="changeHeaderHeight($event)">
              Change height 60px</button>
            </div>
            <div class="control-section" style="padding-top:20px">
              <ejs-grid #grid [dataSource]="data">
                <e-columns>
                  <e-column field='OrderID' headerText='Order ID' width=120></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                  <e-column field='Freight' headerText='Freight' format='C' width=120>
                  </e-column>
                  <e-column field='OrderDate' headerText='Order Date' format='yMd' width=140>
                  </e-column>
                </e-columns>
              </ejs-grid>
            <div>`
})
export class AppComponent implements OnInit {

  public data?: Object[];
  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
  }
  changeHeaderHeight(event: MouseEvent): void {
    const heightMap: { [key: string]: string } = {
      small: '20px',
      medium: '42px',
      big: '60px'
    };    const headerCells = (this.grid as GridComponent).getHeaderContent().querySelectorAll('.e-headercell');
    headerCells.forEach((headerCell:Element) => {
      (headerCell as HTMLElement).style.height = (heightMap)[
        (event.target as HTMLButtonElement).id
      ];
    });
  }

}
