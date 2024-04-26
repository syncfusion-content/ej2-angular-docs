import { Component, OnInit, ViewChild } from "@angular/core";
import { data } from "./datasource";
import { TooltipComponent, TooltipEventArgs } from "@syncfusion/ej2-angular-popups";

@Component({
imports: [TooltipAllModule, GridModule,  FormsModule],

,
standalone: true,
  selector: "app-root",
  template: `
    <div class="control-section" >
      <ejs-tooltip #tooltip (beforeRender)="beforeRender($event)" 
      target=".e-headertext">
        <ejs-grid [dataSource]="data" allowPaging='true'>
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" width="120">
            </e-column>
            <e-column field="Freight" headerText="Freight" width="120" 
            format="C2">
            </e-column>
            <e-column field="ShipName" headerText="Ship Name" width="150">
            </e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="120">
            </e-column>
            <e-column field="OrderDate" headerText="Order Date" type="date" format="yMd"
            width="120">
            </e-column>
          </e-columns>
        </ejs-grid>
      </ejs-tooltip>
    </div>`
})
export class AppComponent implements OnInit {

  public data?: object[] = data;
  @ViewChild('tooltip')
  public toolTip?: TooltipComponent;
  public columnDescriptions: { [key: string]: string } = {
    "Order ID": "A unique number assigned to each order.",
    "Freight": "The cost of shipping the order.",
    "Ship Name": "The name of the person or company who will receive the shipment.",
    "Ship Country": "The country to which the shipment will be sent.",
    "Order Date": "The date when the order was placed.",
  };

  ngOnInit(): void {
    this.data = data;
  }
  beforeRender(args: TooltipEventArgs) {
    const description = this.columnDescriptions[args.target.innerText];
    if (description) {
      (this.toolTip as TooltipComponent).content = args.target.innerText + ": " + description;
    }
  }

}
