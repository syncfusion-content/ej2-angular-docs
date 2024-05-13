

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService, PageService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { FilterBarMode, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Column, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid'
import { isNullOrUndefined } from '@syncfusion/ej2-base';
@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='230' [treeColumnIndex]='1' [allowPaging]='true' [allowFiltering]='true' (load)="load()" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column headerText="Action" width="150">
                        <ng-template #template let-data>
                            <button ejs-button >Custom action</button>
                        </ng-template>
                    </e-column></e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
   
    @ViewChild('treegrid')
     public treegrid:TreeGridComponent|undefined;
    ngOnInit(): void {
        this.data = sampleData;
        
    }
    load() {
      //Here find the index of template column
      var column:any=(this.treegrid as TreeGridComponent).columns;
      var templatecol_inx:any=column.findIndex((x:any)=>!isNullOrUndefined(x.template));
      
      // Set filterTemplate to an empty span to hide the filter bar for the template column
      ((this.treegrid as TreeGridComponent).columns[templatecol_inx] as Column).filterTemplate = '<span></span>';
    }
    
}


