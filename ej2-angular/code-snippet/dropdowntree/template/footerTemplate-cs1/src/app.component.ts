


import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DropDownTreeComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-container',
  template: `<ejs-dropdowntree id='dropdownTree' cssClass="custom" [fields]='fields' [popupHeight]='height' [placeholder]='watermark' [footerTemplate]='footerTemplate'></ejs-dropdowntree>`
})
export class AppComponent {
  public data: { [key: string]: Object }[] = [
    { id: 1, name: 'Steven Buchanan', eimg: '10', job: 'General Manager', hasChild: true, expanded: true, status:'busy' },
    { id: 2, pid: 1, name: 'Laura Callahan', eimg: '2', job: 'Product Manager', hasChild: true, status:'online' },
    { id: 3, pid: 2, name: 'Andrew Fuller', eimg: '7', job: 'Team Lead', hasChild: true, status:'away' },
    { id: 4, pid: 3, name: 'Anne Dodsworth', eimg: '1', job: 'Developer', status:'busy' },
    { id: 10, pid: 3, name: 'Lilly', eimg: '5', job: 'Developer', status:'online' },
    { id: 5, pid: 1, name: 'Nancy Davolio', eimg: '4', job: 'Product Manager', hasChild: true, status:'away' },
    { id: 6, pid: 5, name: 'Michael Suyama', eimg: '9', job: 'Team Lead', hasChild: true, status:'online' },
    { id: 7, pid: 6, name: 'Robert King', eimg: '8', job: 'Developer ', status:'online' },
    { id: 11, pid: 6, name: 'Mary', eimg: '6', job: 'Developer ', status:'away' },
    { id: 9, pid: 1, name: 'Janet Leverling', eimg: '3', job: 'HR', status:'online' }
  ];
  public fields: Object = { dataSource: this.data, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' };
  public height: string = '300px';
  public watermark: string = 'Select an employee';
  public footerTemplate: string = "<span class='foot'> Total number of employees: "+ this.data.length +"</span>";
}



