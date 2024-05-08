import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService],
standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = employeeData;
    }
}



