import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, InfiniteScrollService } from '@syncfusion/ej2-angular-grids';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

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
        DropDownListModule 
        
        ],

providers: [PageService, ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `
           <div style="display: flex">
               <label style="padding: 30px 20px 0 0" > Select initialBlocks count: :</label>
               <ejs-dropdownlist #dropdown id='value' style="padding: 26px 0 0 0" #sample index='0' 
               width='220' [dataSource]='dropDownData' (change)='valueChange($event)' >
               </ejs-dropdownlist>
            </div>
            <div style="padding: 30px 17px 0 0">
             <ejs-grid #grid [dataSource]='data' height=300 [enableInfiniteScrolling]=true [pageSettings]='options'>
                <e-columns>
                    <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=70></e-column>
                    <e-column field='Engineer' width=100></e-column>
                    <e-column field='Designation' width=100></e-column>
                    <e-column field='Estimation' textAlign='Right' width=100></e-column>
                    <e-column field='Status' width=100></e-column>
                </e-columns>
                </ejs-grid>
            </div>`,
    providers: [InfiniteScrollService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public options?: PageSettingsModel;
    @ViewChild('grid') public grid?: GridComponent;
    public dropDownData?: Object[] = [
        { text: 'Select count' },
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '5', value: '5' },
        { text: '6', value: '6' },
        { text: '7', value: '7' }
      ];

    ngOnInit(): void {
        this.data = data(5000);
        this.options = { pageSize: 50 };
    }
    valueChange(args: ChangeEventArgs): void {
        (this.grid as GridComponent).infiniteScrollSettings.initialBlocks = parseInt((args.value as string), 10);
        (this.grid as GridComponent).refresh();    
    }
}



