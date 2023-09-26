

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent,EditSettingsModel, ToolbarItems, ToolbarService, EditService } from '@syncfusion/ej2-angular-treegrid';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-container',
    styleUrls: ['./app.disable.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService, EditService],
    template: `<button ejs-button (click)="click()"  cssClass="e-flat e-primary" iconCss="e-icons e-play-icon" [isToggle]="true">Enable/Disable Grid</button>
    <div id="TreeGridParent">
    <ejs-treegrid #treegridObj [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1' [height]='210' [editSettings]='editSettings' [toolbar]='toolbar'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100'></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' [format]='formatOptions' editType='datepickeredit' [edit]='editOptions' width='90'></e-column>
            <e-column field='EndDate' headerText='End Date' width='90' [format]='formatOptions' editType='datepickeredit' [edit]='editOptions' textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='Priority' headerText='Priority' width='90'></e-column>
        </e-columns>
    </ejs-treegrid>
    </div>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public editOptions?: Object;
    public formatOptions?: Object;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('treegridObj')
    public treegridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = projectData;
        this.editOptions = { params: { format: 'y/M/d' } };
        this.formatOptions = { format: 'y/M/d', type: 'date' };
        this.editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    click() {
      if (this.treegridObj && this.treegridObj.element.classList.contains('disabletreegrid')) {
      this.treegridObj.element.classList.remove('disabletreegrid');
      (document.getElementById("TreeGridParent") as HTMLElement).classList.remove('wrapper');
      }
      else if (this.treegridObj) {
        this.treegridObj.element.classList.add('disabletreegrid');(document.getElementById("TreeGridParent") as HTMLElement).classList.add('wrapper');
    }
    }
}



