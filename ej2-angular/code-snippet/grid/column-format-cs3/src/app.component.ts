import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data'>
                <e-columns>
                    <e-column field='RollNo' headerText='Roll No'></e-column>
                    <e-column field='Mark1' headerText='Mark 1'></e-column>
                    <e-column field='Mark2' headerText='Mark 2' format='N'></e-column>
                    <e-column field='Average' headerText='Average' format='N2'></e-column>
                    <e-column field='Percentage' headerText='Percentage of Marks' format='P'></e-column>
                    <e-column field='Fees' headerText='Fees' textAlign='Right' format='C'></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {
  public data?: object[];

  ngOnInit(): void {
    this.data = data
  }
}
