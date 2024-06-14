import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule,TreeGridComponent } from '@syncfusion/ej2-angular-treegrid'
import { AggregateService  } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { summaryRowData } from './datasource';

@Component({
    imports: [TreeGridModule],

    providers: [AggregateService ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='240' [treeColumnIndex]='0' [aggregates]="aggregates" childMapping='children' >
                    <e-columns>
                        <e-column field='FreightID' headerText='Freight ID'  width=130></e-column>
                        <e-column field='FreightName' headerText='Freight Name'  width=195></e-column>
                        <e-column field='UnitWeight' headerText='Weight Per Unit' textAlign='Right'  width=130></e-column>
                        <e-column field='TotalUnits' headerText='Total Units' textAlign='Right' type='number' width=125></e-column>
                    </e-columns>
                   
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid:TreeGridComponent | undefined;
 
    public aggregates =[
        {
          columns: [
            {
              type: 'Sum',
              field: 'UnitWeight',
              columnName: 'UnitWeight',
               format: 'C2',
              footerTemplate: 'Sum: ${Sum}',
            },
          ],
        },
        {
            columns: [
              {
                type: 'Min',
                field: 'UnitWeight',
                columnName: 'UnitWeight',
                 format: 'C2',
                footerTemplate: 'Min:${Min}',
              },
            ],
          },
          {
            columns: [
              {
                type: 'Max',
                field: 'UnitWeight',
                columnName: 'UnitWeight',
                 format: 'C2',
                footerTemplate: 'Max:${Max}',
              },
            ],
          }
    ]
      ;
    
  
    ngOnInit(): void {
        this.data = summaryRowData;
    }
}


