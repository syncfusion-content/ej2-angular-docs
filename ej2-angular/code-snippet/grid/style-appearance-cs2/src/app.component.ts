import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridComponent, GridModule, PageService} from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GridModule ],
  standalone: true,
  selector: 'app-root',
  template: `<button (click)="toggleTouchMode()">{{ buttonText }}</button>
            <ejs-grid [dataSource]='data' [allowPaging]='true' [pageSettings]='pageSettings' [selectionSettings]='selectionOptions' height='268px'>
            <e-columns>
                  <e-column field='OrderID' headerText='Order ID' type='number' isPrimaryKey='true' textAlign='Right' width=100></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' type='string' width=120></e-column>
                  <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' format='C' width=100></e-column>
                  <e-column field='ShipName' headerText='Ship Name' type='string' width=180></e-column>
            </e-columns>
            </ejs-grid>`,
      providers: [PageService]
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public grid?: GridComponent;
  public pageSettings?: Object;
  public isTouchMode: boolean = false;
  public buttonText: string = 'Enable Touch Mode';  

  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageSize: 8 };    
  }
  toggleTouchMode(): void {
    this.isTouchMode = !this.isTouchMode;
    document.body.classList.toggle('e-bigger', this.isTouchMode);
    this.buttonText = this.isTouchMode ? 'Enable Normal Mode' : 'Enable Touch Mode';
  }
}
