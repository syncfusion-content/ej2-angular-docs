
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService,  EditService, } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import {  NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
    TreeGridAllModule,ButtonModule,NumericTextBoxAllModule
    ],
    providers:[PageService,  EditService,],
    standalone: true,
    selector: 'app-container',
    template: `<div>
                    <label style="padding: 30px 17px 0 0" >Enter the index of the new row added:</label>
                    <ejs-numerictextbox #numeric min='0' max='35'></ejs-numerictextbox>
                    <button ejs-button id="buttons" (click)="AddrecordbyIndex()">Add record</button>
                </div>
                <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='230' [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority' editType= 'dropdownedit' textAlign='Right' width=140></e-column>
                        <e-column field='progress' editType= 'numericedit' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
   
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public id=100;

    @ViewChild('numeric')
    public numeric?: NumericTextBoxComponent;
    
    public AddrecordbyIndex(){
        var index=(this.numeric as NumericTextBoxComponent).value;
        var new_data={taskID:this.id++,taskName:"New Task", priority:"High",progress:9};
        this.treegrid?.addRecord(new_data,index,"Below")

    }
    
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowAdding: true, mode:"Row", newRowPosition:"Above"};
       
    }
   

}
