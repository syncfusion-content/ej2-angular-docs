import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'
import { ChipListModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
        ChipListModule
    ],

providers: [GroupService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowGrouping]='true' height='315px'>
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