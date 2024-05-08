import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, ContextMenuService,  } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent, ContextMenuItemModel } from '@syncfusion/ej2-angular-grids';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [ContextMenuService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='grid' [dataSource]='data' [allowSelection]='true' 
                [allowPaging]='true'height='265px' [contextMenuItems]='contextMenuItems' 
                (contextMenuClick)='contextMenuClick($event)'>
                    <e-columns>
                        <e-column field='EmployeeID' [isPrimaryKey]='true' headerText='Employee ID' textAlign='Right' width=120></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public contextMenuItems?: ContextMenuItemModel[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = employeeData;
        this.contextMenuItems=[{ text: 'Copy with headers', target: '.e-content', id: 'copywithheader' }];
    }

    contextMenuClick(args: MenuEventArgs): void {
        if (args.item.id === 'copywithheader') {
            (this.grid as GridComponent).copy(true);
        }
    }
}



