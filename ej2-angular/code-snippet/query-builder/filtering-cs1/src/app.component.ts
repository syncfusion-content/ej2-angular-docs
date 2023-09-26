

import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';

@Component({
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



