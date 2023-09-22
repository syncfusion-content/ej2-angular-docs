

import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent, ContextMenuService, PageService, ContextMenuItemModel } from '@syncfusion/ej2-angular-grids';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='gridcomp' [dataSource]='data' [allowSelection]='true' [allowPaging]='true'
    height='265px' [contextMenuItems]='contextMenuItems'
                (contextMenuClick)='contextMenuClick($event)'>
                    <e-columns>
                        <e-column field='EmployeeID' [isPrimaryKey]='true' headerText='Employee ID' textAlign='Right' width=120></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                    </e-columns>
                </ejs-grid>
                `,
    providers: [ContextMenuService, PageService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public contextMenuItems: ContextMenuItemModel[] = [{ text: 'Copy with headers', target: '.e-content', id: 'copywithheader' }];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = employeeData;
    }

    contextMenuClick(args: MenuEventArgs): void {
        if ((args as any).item.id === 'copywithheader') {
            (this.grid as any).copy(true);
        }
    }
}



