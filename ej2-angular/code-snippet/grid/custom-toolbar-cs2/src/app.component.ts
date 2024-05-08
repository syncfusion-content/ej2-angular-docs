import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ToolbarService } from '@syncfusion/ej2-angular-grids'
import { GroupService } from '@syncfusion/ej2-angular-grids'




import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { employeeData } from './datasource';
import { GroupSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService, GroupService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='employeeData' height='200px' [allowGrouping]='true' [groupSettings]='groupOptions' [toolbar]='toolbar' (toolbarClick)='clickHandler($event)'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
                    <e-column field='FirstName' headerText='First Name' width=100></e-column>
                    <e-column field='Country' headerText='Country' width=100></e-column>
                    <e-column field='PostalCode' headerText='Postal Code' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public employeeData?: object[];
    public toolbar?: object[];
    public groupOptions?: GroupSettingsModel;

    @ViewChild('grid')
    public grid?: GridComponent;
 
    ngOnInit(): void {
        this.employeeData = employeeData;
        this.toolbar = [{ text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
        { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse-2', id: 'collapseall', align: 'Right' }, { text: 'Search', align: 'Center' }];
        this.groupOptions = { columns: ['FirstName'] };
    }

    clickHandler(args: ClickEventArgs): void {
        if (args.item.id === 'expandall') {
            (this.grid as GridComponent).groupModule.expandAll();
        }

        if (args.item.id === 'collapseall') {
            (this.grid as GridComponent).groupModule.collapseAll();
        }  
    }
}



