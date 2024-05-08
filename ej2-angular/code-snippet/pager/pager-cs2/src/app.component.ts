import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PagerModule } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';

@Component({
imports: [
        
        PagerModule
    ],

standalone: true,
    selector: 'app-root',
    template: `<ejs-pager [pageSize]='1' [pageCount]='3' [totalRecordsCount]='20'>
                </ejs-pager>`
})
export class AppComponent implements OnInit{

    ngOnInit(): void {
    }
}



