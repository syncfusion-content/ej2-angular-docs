import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, GroupService  } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { cascadeData } from './datasource';
import { EditSettingsModel, ToolbarItems, GridComponent, SelectionSettingsModel, KeyboardEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        FormsModule,
    ],

providers: [EditService, ToolbarService, GroupService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid  #grid [dataSource]='data' (keyPressed)="keyPressed($event)" [editSettings]='editSettings' [toolbar]='toolbar' height='273px' allowGrouping="true" [selectionSettings]='selectionOptions' >
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public selectionOptions?: SelectionSettingsModel;
    @ViewChild('grid') grid?: GridComponent;

    keyPressed(e: KeyboardEventArgs) {
        const key = e.key.toLowerCase();
        switch (key) {
            case 'n':
                e.preventDefault();
                (this.grid as GridComponent).addRecord();
                break;
            case 's':
                if (e.ctrlKey) {
                    e.preventDefault();
                    (this.grid as GridComponent).endEdit();
                }
                break;
            case 'd':
                if (e.ctrlKey) {
                    e.preventDefault();
                    (this.grid as GridComponent).deleteRecord();
                }
                break;
            case 'a':
                if (e.ctrlKey) {
                    e.preventDefault();
                    (this.grid as GridComponent).selectRowsByRange(0);
                }
                break;
            case 'g':
                if (e.ctrlKey) {
                    e.preventDefault();
                    (this.grid as GridComponent).groupColumn('CustomerID');
                }
                break;
            case 'enter':
                e.preventDefault();
                e.cancel = true;
                (this.grid as GridComponent).refreshColumns();
                break;
            case 'insert':
                e.preventDefault();
                e.cancel = true;
                break;
            case 'delete':
                e.preventDefault();
                e.cancel = true;
                break;
            case 'f2':
                e.preventDefault();
                e.cancel = true;
                break;
            case '" "':
                if (e.ctrlKey) {
                    e.preventDefault();
                    e.cancel = true;
                }
                break;
            // Add more custom shortcuts as needed
        }
    }

    ngOnInit(): void {
        this.data = cascadeData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.selectionOptions = {
            type: 'Multiple',
        };
    }

}



