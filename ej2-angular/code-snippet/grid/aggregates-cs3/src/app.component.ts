import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { AggregateService, GroupService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [AggregateService, GroupService],
standalone: true,
    selector: 'app-root',
    templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public aggregates = [
        {
          columns: [
            {
              type: ['Sum', 'Max', 'Min'],
              field: 'Freight',
              columnName: 'Freight',
              format: 'C2',
              footerTemplate: 'Sum: ${Sum}, Min:${Min}, Max:${Max}',
            },
          ],
        },
      ];
    ngOnInit(): void {
        this.data = data;
    }
}