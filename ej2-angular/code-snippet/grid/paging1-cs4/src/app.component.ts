import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'
import { SwitchModule} from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, InfiniteScrollService } from '@syncfusion/ej2-angular-grids';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

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
        
        GridModule,
        SwitchModule
        ],

providers: [PageService, ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `
            <div style="padding: 20px 0px 20px 0px">
            <label>Enable/Disable Cache mode</label>
            <ejs-switch #switch id="switch" (change)="toggleCacheMode($event)"></ejs-switch>
            </div>
            <ejs-grid #grid [dataSource]='data' height=300 [enableInfiniteScrolling]=true  [pageSettings]='options'>
                <e-columns>
                    <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=70></e-column>
                    <e-column field='Engineer' width=100></e-column>
                    <e-column field='Designation' width=100></e-column>
                    <e-column field='Estimation' textAlign='Right' width=100></e-column>
                    <e-column field='Status' width=100></e-column>
                </e-columns>
            </ejs-grid>`,
    providers: [InfiniteScrollService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public options?: PageSettingsModel;
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data(5000);
        this.options = { pageSize: 50 };
    }
    toggleCacheMode(args:ChangeEventArgs): void {
        (this.grid as GridComponent).infiniteScrollSettings.enableCache = args.checked;
        (this.grid as GridComponent).refresh();
      }
}