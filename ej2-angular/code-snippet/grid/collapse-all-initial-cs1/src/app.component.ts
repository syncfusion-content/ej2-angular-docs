import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [GroupService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions'
                (dataBound)='dataBound()' height='267px'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=110></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public initial: boolean = true;
    public groupOptions?: object;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { columns: ['ShipCity'] };
    }
    dataBound() {
        if (this.initial === true) {
            (this.grid as GridComponent).groupModule.collapseAll();
            this.initial = false;
        }
    }
}



