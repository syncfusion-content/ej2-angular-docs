import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { TooltipComponent, TooltipEventArgs, TooltipModule } from '@syncfusion/ej2-angular-popups';

@Component({
    imports: [  GridModule, ButtonModule, TooltipModule ],
    standalone: true,
    selector: 'app-root',
    template: `  <ejs-tooltip #tooltip target=".e-rowcell" (beforeRender)="beforeRender($event)">
                    <ejs-grid [dataSource]='data' [height]='315'>
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                        </e-columns>
                    </ejs-grid>
                </ejs-tooltip>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('tooltip')
    public tooltip?: TooltipComponent;
    ngOnInit(): void {
        this.data = data;
    }
    beforeRender(args: TooltipEventArgs): void {
        if (args.target.classList.contains('e-rowcell')) {
            (this.tooltip as TooltipComponent).content = 'The value is "' + args.target.innerText + '" ';
        }
    }
}
