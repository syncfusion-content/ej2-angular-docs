import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { stringData } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
                        <e-column field='Name' headerText='Full Name' [valueAccessor]= 'getConcatenatedNames' width=120></e-column>
                        <e-column field='Title' headerText='Title' width=150></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    public getConcatenatedNames = (field: string, data: object) => {
        return (data as any)[field as string].map((s: { FirstName: string, LastName: string }) => {
            return s.LastName || s.FirstName;
        }).join(' ');
    }

    ngOnInit(): void {
        this.data = stringData;

     }
}



