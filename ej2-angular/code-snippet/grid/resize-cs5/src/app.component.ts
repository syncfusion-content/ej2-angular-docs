import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ResizeService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, ResizeArgs, Column } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [ResizeService],
standalone: true,
    selector: 'app-root',
    template: ` 
    <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid #grid [dataSource]='data' [allowResizing]='true' [enableHover]='false' height='315px' (resizeStart)="resizeStart($event)" (resizing)="resizing($event)" (resizeStop)="resizeStop($event)">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=100></e-column>
            <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
            <e-column field='Freight' headerText='Freight' width=80></e-column>
        </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public message?: string;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    resizeStart(args: ResizeArgs) {
        this.message = `resizeStart event triggered`;
        if ((args.column as Column).field === 'OrderID') {
            args.cancel = true;
        }
    }

    resizing(args: ResizeArgs) {
        this.message = `resizing event triggered`;
    }
    resizeStop(args: ResizeArgs) {
        this.message = `resizeStop event triggered`;
        const headerCell = (this.grid as GridComponent).getColumnHeaderByField((args.column as Column).field);
        headerCell.classList.add('customcss');
        const columnCells = (this.grid as GridComponent)
            .getContentTable()
            .querySelectorAll(`[data-colindex="${(args.column as Column).index}"]`);
        for (let i = 0; i < columnCells.length; i++) {
            const cell = columnCells[i] as HTMLElement;
            cell.style.backgroundColor = 'rgb(43, 195, 226)';
        }

    }

}



