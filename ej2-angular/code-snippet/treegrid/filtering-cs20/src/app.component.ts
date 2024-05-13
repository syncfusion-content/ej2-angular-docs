
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService  } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { FilterSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule, ButtonModule
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: ` <div class="control-section">
                  <div *ngIf="showWarning">
                    <ejs-message id="msg_warning" content="No Records" cssClass="e-content-center"
                      severity="Warning"></ejs-message>
                  </div>
                  <button ejs-button cssClass="e-success" (click)="click()">Get Filtered Data</button>
                  <button ejs-button cssClass="e-danger" (click)="clear()">Clear</button>

                <ejs-treegrid #treegrid id='treegrid' [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>
                
                <div *ngIf="showRecords" class="e-content">
                <h3>Filtered Records</h3>
                <ejs-treegrid #filtergrid [dataSource]="filteredData" childMapping='subtasks' allowPaging="true" [height]="200">
                    <e-columns>
                      <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                      <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                      <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=90></e-column>
                      <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>
            </div>
        </div>`
})
export class AppComponent implements OnInit {

     @ViewChild('treegrid')
     public treegrid:TreeGridComponent | undefined;
     public filteredData?: Object;
    public data?: Object[];
    showRecords?: boolean;
    showWarning?: boolean;

    ngOnInit(): void {
        this.data = sampleData;
    }

   click(): void {
    this.filteredData = (this.treegrid as any).filterModule.filteredResult;
    if (this.filteredData) {
      this.showRecords = true;
    } else {
      this.showRecords = false;
    }
    this.showWarning = !this.showRecords;
  }
  clear(): void {
    (this.treegrid as TreeGridComponent).clearFiltering();
    this.showRecords = false;
    this.showWarning = false;
  }
}



