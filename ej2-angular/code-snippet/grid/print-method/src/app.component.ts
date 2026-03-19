import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule, PrintEventArgs, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule],
    providers: [ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [toolbar]='toolbarOptions' height='272px' (beforePrint)="beforePrint($event)">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Print'];
    }
    beforePrint(args:PrintEventArgs){
        var div = document.createElement("Div")
            div.innerHTML = "Title here"
            div.style.textAlign = 'center';
            div.style.color = 'red';
            div.style.padding = '10px 0';
            div.style.fontSize = '25px';
            (args.element as HTMLElement).insertBefore(div, (args.element as HTMLElement).childNodes[0]);
    }
}