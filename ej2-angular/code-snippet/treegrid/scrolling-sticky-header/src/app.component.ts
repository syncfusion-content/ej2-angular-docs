import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridComponent, TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { SwitchModule, ChangeEventArgs } from '@syncfusion/ej2-angular-buttons'

@Component({
    imports: [ TreeGridAllModule, SwitchModule ],
    standalone: true,
    selector: 'app-container',
    template: `
      <div style="padding:10px 0px 20px 0px">
        <label style="font-weight: bold; padding-right: 20px;">Enable/Disable Sticky Header</label>
        <ejs-switch id="switch" [(checked)]="isSticky" (change)="toggleStickyHeader($event)"></ejs-switch>
      </div>
      <div style='height:350px;'>
        <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' [enableStickyHeader]='isSticky' childMapping='SubTasks'>
          <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90></e-column>
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=250></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
            <e-column field='Duration' headerText='Duration' textAlign='Right' width=110></e-column>
          </e-columns>
        </ejs-treegrid>
      </div>`
})
export class AppComponent implements OnInit {
  @ViewChild('treegrid') public TreeGridObj?: TreeGridComponent;
  public data?: Object[];
    public isSticky: boolean = true;

    ngOnInit(): void {
        this.data = sampleData;
    }

    toggleStickyHeader(args: ChangeEventArgs): void {
        this.isSticky = args.checked ?? false;
    }
}
