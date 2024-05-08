import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [ToolbarService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid id='Grid' #grid [dataSource]='data' [toolbar]='toolbar' (created)="created()" height='200px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' type='number' isPrimaryKey='true' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' width=100></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' type='number' format='C2' width=80></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format='yMd' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbar?: ToolbarItems[];

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Print', 'Search'];
    }

    created() {
        let toolbar = ((this.grid as GridComponent).element as HTMLElement).querySelector('.e-toolbar');
        (this.grid as GridComponent).element.appendChild(toolbar as HTMLElement);
    }
}



