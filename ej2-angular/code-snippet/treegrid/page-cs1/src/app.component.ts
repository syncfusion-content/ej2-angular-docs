

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { PageService, TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, PageSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [
    TreeGridAllModule, ButtonModule, TextBoxModule
    ],
    providers:[PageService],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: `<div>
                    <label style="padding: 30px 17px 0 0">Enter page size:</label>
                    <ejs-textbox #textbox width="120"></ejs-textbox>
                    <button ejs-button #button id="button" (created)=clickHandler($event)>click button</button>
                </div>

                <ejs-treegrid  #treegrid [dataSource]='data' height=250 [treeColumnIndex]='1' [allowPaging]='true' [pageSettings]='pageSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public pageSettings?: Object ;
    @ViewChild('textbox') public textbox?: TextBoxComponent;
    @ViewChild('button') public button?: ButtonComponent;
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
        
    }
    clickHandler(args:any): void {
      (this.button as ButtonComponent).element.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault(); // Prevent any default behavior of the button click
        (this.treegrid as TreeGridComponent).pageSettings.pageSize = parseInt((this.textbox as TextBoxComponent).value, 10);
      });
    }
}


