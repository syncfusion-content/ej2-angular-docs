import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, GridComponent, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' (dataBound)="dataBound()" height='330px'>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    dataBound() {
        const columns = (this.grid as GridComponent).columns as Column[];
        for (const col of columns) {
        if (col.field === 'OrderID') {
            col.width = 120;
        }
        if (col.field === 'OrderDate') {
            col.type = 'date';
            col.format = 'yMd';
        }
        if (col.field === 'Freight') {
            col.format = 'P2';
        }
        }

        this.grid!.refreshColumns();
    }
}
