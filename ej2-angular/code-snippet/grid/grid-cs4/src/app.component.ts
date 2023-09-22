import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, EditSettingsModel, EditService } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' (dataBound)="dataBound($event)">
               </ejs-grid>`,
    providers: [EditService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }
    dataBound(args: any) {
        ((this.grid as GridComponent).columns[0] as any).isPrimaryKey = 'true';
    }
}



