import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridComponent, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { employeeDetails } from './datasource';
import { Query } from '@syncfusion/ej2-data';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { CheckBoxModule, CheckBoxComponent } from '@syncfusion/ej2-angular-buttons'
import { EditEventArgs, IEditCell, getObject } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

let jobRole: { [key: string]: Object }[] = [
  { role: 'TeamLead' },
  { role: 'Manager' },
  { role: 'Engineer' },
  { role: 'Sales' },
  { role: 'Support' },
];

let salaryDetails: { [key: string]: Object }[] = [
  { salary: 6000 },
  { salary: 17000 },
  { salary: 18000 },
  { salary: 26000 },
  { salary: 25000 },
  { salary: 40000 },
  { salary: 35000 },
  { salary: 55000 },
  { salary: 65000 },

];

@Component({
    imports: [TreeGridModule, CheckBoxModule ],

    providers: [PageService, EditService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' (created)="load()" (actionBegin)="actionBegin($event)"  >
                    <e-columns>
                      <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' isPrimaryKey='true' width=120></e-column>
                      <e-column field='Role' headerText='Role' width=160  editType= 'dropdownedit' [edit]='roleParams'></e-column>
                      <e-column field='Salary' headerText='Salary' textAlign= 'Right' editType= 'dropdownedit' width=160 [edit]='salaryParams'></e-column>
                      <e-column field='Address' headerText='Address' [validationRules]='addressRules' width=160></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public roleParams?: IEditCell;
    public salaryParams?: IEditCell;
    public addressRules?: object;
    public rules?: object;
    @ViewChild('treegrid') treegrid?: TreeGridComponent;
    

    ngOnInit(): void {
        this.data = employeeDetails;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
        this.toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
        this.addressRules = { required: true };
        this.roleParams = {
          params: {
              query: new Query(),
              dataSource: jobRole,
              fields: { value: 'role', text: 'role' },
              allowFiltering: true,
              change: this.valChange.bind(this)

          }
      };
      this.salaryParams = {
          params: {
              query: new Query(),
              dataSource: salaryDetails,
              fields: { value: 'salary', text: 'salary' },
              allowFiltering: true,

          }
      };
    }
    public valChange(args: ChangeEventArgs) {

      window.role = (args.value?.toString() as string); // Explicitly cast args.value to string
      const formObj = (this.treegrid as TreeGridComponent).grid.editModule.formObj.element['ej2_instances'][0];

      switch ( window.role) {

          case 'Sales':
              formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and< 15000';

              break;

          case 'Support':
              formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';

              break;

          case 'Engineer':
              formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';

              break;

          case 'TeamLead':
              formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';

              break;

          case 'Manager':
              formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';

              break;
      }
  }

  public customFn(args: { value: number }): boolean {
      const formObj = (this.treegrid as TreeGridComponent).grid.editModule.formObj.element['ej2_instances'][0];
      switch (window.role ) {

          case 'Sales':
              if ((args.value >= 5000) && (args.value < 15000))
                  return true;
              else
                  formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and< 15000';

              break;

          case 'Support':
              if ((args.value >= 15000 && args.value < 19000))
                  return true;
              else
                  formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';

              break;

          case 'Engineer':
              if ((args.value >= 25000 && args.value < 30000))
                  return true;
              else
                  formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';

              break;

          case 'TeamLead':
              if ((args.value >= 30000) && (args.value < 50000))
                  return true;
              else
                  formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';

              break;

          case 'Manager':
              if ((args.value >= 50000) && (args.value < 70000))
                  return true;
              else
                  formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';

              break;

      }
      return false;
  }
  load(): void {
      let column = (this.treegrid as TreeGridComponent).grid.getColumnByField('Salary');
      column.validationRules = {
          required: [this.customFn.bind(this), 'Please enter valid salary'],
      };
  }
  actionBegin(args: EditEventArgs) {
      
      window.role = args.rowData as { Role: string }['Role'];
  }

}

declare global {
  interface Window {
      role: string;
  }
}