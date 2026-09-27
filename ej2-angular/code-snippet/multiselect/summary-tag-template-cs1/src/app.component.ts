import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { Component } from '@angular/core';
import { MultiSelectComponent, VirtualScroll, CheckBoxSelectionService } from '@syncfusion/ej2-angular-dropdowns';

MultiSelectComponent.Inject(VirtualScroll);

@Component({
imports: [
        FormsModule, MultiSelectModule
    ],
standalone: true,
    selector: 'app-root',
    // specifies the template string for the MultiSelect component
    template: `<div id="wrapper" style='margin-top: 20px'><div id='content' style="margin: 0px auto; width:300px;"><label for="select">Large Dataset with CheckBox and Virtualization (15000 items)</label><ejs-multiselect id='select' [dataSource]='records' [fields]='fields' [mode]='mode' [enableVirtualization]='true' [allowFiltering]='true' [showDropDownIcon]='true' [showSelectAll]='true' [maximumSelectionLength]='maximumSelectionLength' [summaryTagCount]='summaryTagCount' [summaryTagTemplate]='summaryTagTemplate' [value]='value'></ejs-multiselect></div></div>`,
    providers: [CheckBoxSelectionService]
})
export class AppComponent {

    public records: { id: string, text: string }[] = [];

    constructor() {
    }

    ngOnInit(): void {

        for (let i: number = 1; i <= 15000; i++) {

            const item: { id: string, text: string } = {

                id: 'id' + i,

                text: 'Item ' + i,

            };

            this.records.push(item);

        }

    }

    public fields: Object = { text: 'id', value: 'text' };

    public mode: string = 'CheckBox';

    public summaryTagCount: number = 5;

    public summaryTagTemplate: string = '${selectedCount} items selected';

    public maximumSelectionLength: number = 15000;

    public value: string[] = this.records.map((item: { id: string, text: string }) => item.text);

};


