import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, EditService, EditSettingsModel, GridComponent, GridModule, PageService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='280px' allowPaging='true' [editSettings]='editSettings' (dataBound)="dataBound()">
               </ejs-grid>`,
    providers: [EditService, PageService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings!: EditSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }
    dataBound() {
        (((this.grid as GridComponent).columns[0]) as Column).isPrimaryKey = true;
    }
}
