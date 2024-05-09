import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService  } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, OnInit,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { Column, FilterSettingsModel, FilterType,TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    imports: [
    TreeGridAllModule, DropDownListAllModule
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<div id="content" class="container">
                  <div class="input-container">
                    <label for="fields" class="label">Select Column</label>
                    <ejs-dropdownlist #field id="fields" [dataSource]="fieldData" (change)="onFieldChange($event)"
                      placeholder="Eg: OrderID"></ejs-dropdownlist>
                  </div>
                  <div class="input-container">
                    <label for="types" class="label">Select Filter Type</label>
                    <ejs-dropdownlist #type id="types" [dataSource]="typeData" (change)="onTypeChange($event)"
                      placeholder="Eg: Excel" [enabled]="false"></ejs-dropdownlist>
                  </div>
                </div>
    
                <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' (dataBound)="dataBound()" [filterSettings]='filterSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

     @ViewChild('treegrid')
     public treegrid:TreeGridComponent | undefined;
    
  @ViewChild('type') public typeDropdown?: DropDownListComponent;
    public data?: Object[];
    public filterSettings?: FilterSettingsModel = { type: 'Menu' };
    public columnFilterSettings?: FilterSettingsModel;
    public fieldData: string[] | undefined;
    public typeData: string[] = [];
    public column_inx: any;
    ngOnInit(): void {
        this.data = sampleData;
    }

    dataBound() {
      this.fieldData = (this.treegrid as TreeGridComponent).getColumnFieldNames();
    }
    onFieldChange(args: ChangeEventArgs): void {
      (this.typeDropdown as DropDownListComponent).enabled = true;
      this.typeData = ['Menu', 'Excel'];
      this.column_inx = (this.treegrid as TreeGridComponent).getColumnIndexByField(args.value as string);
    }
    onTypeChange(args: ChangeEventArgs): void {
      this.columnFilterSettings = { type: args.value as FilterType};
      ((this.treegrid as TreeGridComponent).columns[this.column_inx] as Column).filter=this.columnFilterSettings;
      (this.treegrid as TreeGridComponent).refreshColumns();
    }
}



