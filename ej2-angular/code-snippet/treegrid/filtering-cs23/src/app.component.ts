
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService, PageService } from '@syncfusion/ej2-angular-treegrid';
import {SwitchModule} from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { FilterBarMode, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid'
@Component({
    imports: [
    TreeGridAllModule, SwitchModule
    ],
    providers: [FilterService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<div class='container'>
                    <label for="checked"> <b> Show filter bar status </b> </label>
                    <ejs-switch id="checked" [checked]="true" (change)="onChange($event)"></ejs-switch>
                </div>
    
                <ejs-treegrid #treegrid [dataSource]='data' height='230' [treeColumnIndex]='1' [allowPaging]='true' [allowFiltering]='true' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
   
     @ViewChild('treegrid')
     public treegrid:TreeGridComponent|undefined;
    ngOnInit(): void {
        this.data = sampleData;
        
    }
    onChange(args: any): void {
      (this.treegrid as TreeGridComponent).filterSettings = {
          showFilterBarStatus: args.checked,
      };
  }
}


