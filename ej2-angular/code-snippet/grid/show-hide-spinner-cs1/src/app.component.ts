import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, GridComponent } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base'
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    imports: [
        ButtonModule,
        GridModule
    ],

    providers: [PageService,],
    standalone: true,
    selector: 'app-root',
    template: `
    <div>
        <div>
            <button ejs-button id="loadButton" cssClass="e-outline" (click)="onloadData()">Load Data</button>
            <button ejs-button id="showButton" style='margin-left:5px' cssClass="e-outline" (click)="showhideSpinner($event)">Show Spinner</button>
            <button ejs-button id="hideButton" style='margin-left:5px' cssClass="e-outline" (click)="showhideSpinner($event)">Hide Spinner</button>
        </div>
        <ejs-grid #grid id='grid' allowPaging='true' height='272px' style='margin-top:10px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                <e-column field='ProductName' headerText='Product Name' width=110></e-column>
                <e-column field='Quantity' headerText='Quantity' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>`
})
export class AppComponent implements OnInit {

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
    }

    onloadData(){
        (this.grid as GridComponent).showSpinner();
        setTimeout(() => {
            (this.grid as GridComponent).dataSource = data; 
            (this.grid as GridComponent).hideSpinner(); 
        }, 1000);
    }

    showhideSpinner(args: MouseEvent){
        if((args.currentTarget  as HTMLElement).id === 'showButton'){
            (this.grid as GridComponent).showSpinner();
        }
        else{
            (this.grid as GridComponent).hideSpinner();
        }
    }
}