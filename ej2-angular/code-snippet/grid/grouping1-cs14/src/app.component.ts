import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule, ChipListModule ],
    providers: [GroupService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowGrouping]='true' height='290px'>
                <e-columns>
                    <e-column field='OrderID' headerText='ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Name' width=100></e-column>
                    <e-column field='ShipCity' headerText='City' width=100></e-column>
                    <e-column field='Freight' headerText='Value' width=80></e-column>
                </e-columns>
                <ng-template #groupSettingsCaptionTemplate let-data>
                    <ejs-chiplist id="chip" [text]="data.key"></ejs-chiplist>
                </ng-template>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}