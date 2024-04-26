import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { VirtualScrollService } from '@syncfusion/ej2-angular-grids';
import { PageSettingsModel, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

const names = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther', 'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani',
 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const designation = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
const status = ['Completed', 'Open', 'In Progress', 'Review', 'Testing']
const data = (count: any) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push({
          TaskID: i + 1,
          Engineer: names[Math.round(Math.random() * names.length)] || names[0],
          Designation: designation[Math.round(Math.random() * designation.length)] || designation[0],
          Estimation: hours[Math.round(Math.random() * hours.length)] || hours[0],
          Status: status[Math.round(Math.random() * status.length)] || status[0]
        });
    }
    return result;
};

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService, ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height=300 [enableVirtualization]=true [pageSettings]='options' [editSettings]='editSettings' [toolbar]='toolbar'>
                <e-columns>
                    <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=100 isPrimaryKey='true' [validationRules]='rules'></e-column>
                    <e-column field='Engineer' width=100></e-column>
                    <e-column field='Designation' width=100 editType='dropdownedit' [validationRules]='rules'></e-column>
                    <e-column field='Estimation' textAlign='Right' width=100 editType='numericedit' [validationRules]='rules'></e-column>
                    <e-column field='Status' width=100 editType='dropdownedit'></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [VirtualScrollService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public options?: PageSettingsModel;
    public rules: object = { required: true };
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    ngOnInit(): void {
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.data = data(5000);
        this.options = { pageSize: 50 };
    }
}



