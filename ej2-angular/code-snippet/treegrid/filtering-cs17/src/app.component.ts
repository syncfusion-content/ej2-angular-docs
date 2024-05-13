import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService  } from '@syncfusion/ej2-angular-treegrid';
import {SwitchModule} from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule, SwitchModule
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<div>
               <label for="unchecked"> Enable Case Sensitivity </label>
               <ejs-switch id="unchecked" (change)="onToggleCaseSensitive($event)"></ejs-switch>
               </div>
    
                <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' [filterSettings]='filtersettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

     @ViewChild('treegrid')
     public treegrid:TreeGridComponent | undefined;
    public data?: Object[];
    public filtersettings?: Object;
    public isCaseSensitive: boolean = false;
    ngOnInit(): void {
        this.data = sampleData;
        this.filtersettings={enableCaseSensitivity: this.isCaseSensitive};
    }
    onToggleCaseSensitive(args:any): void {
      (this.treegrid?.grid.filterSettings as any).enableCaseSensitivity=args.checked;
      
  }
}



