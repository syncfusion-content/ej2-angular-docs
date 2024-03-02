

import { Component, OnInit,ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { PageSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' parentIdMapping='parentID' idMapping='TaskID' height=265 allowPaging="true" [pageSettings]="pageSettings" (rowDataBound)='rowDataBound($event)'>
                    <e-columns> 
                        <e-column field='S.No' textAlign='Center' width=120></e-column>
                        <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                        <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
                        <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
                        <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                    </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

  public data?: Object[];
  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;
  public pageSettings?: PageSettingsModel;

  ngOnInit(): void {
    this.data = projectData;
    this.pageSettings = { pageSize: 8 };
  }
  rowDataBound({ row }: any) {
    if (row) {
      var rowIndex = parseInt(row.getAttribute('aria-rowIndex') as string);
      var currentPageNumber = (this.treegrid as TreeGridComponent).grid
        .pageSettings.currentPage;
      var pageSize = (this.treegrid as TreeGridComponent).pageSettings.pageSize;
      var startIndex =
        ((currentPageNumber as number) - 1) * (pageSize as number);
      (row.querySelector('.e-rowcell') as Element).innerHTML = (
        startIndex + rowIndex
      ).toString();
    }
  }
}



