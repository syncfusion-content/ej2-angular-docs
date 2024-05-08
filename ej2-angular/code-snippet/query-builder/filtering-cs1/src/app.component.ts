import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
imports: [
        
        QueryBuilderModule,
    ],


standalone: true,
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder #querybuilder width="70%" [dataSource]="data">
               </ejs-querybuilder>`
})

export class AppComponent implements OnInit {

    public data?: Object[];
    ngOnInit(): void {
        this.data = employeeData;
    }
}



