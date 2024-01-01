import { Component, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditService, ToolbarService, PageService, getObject, GridComponent, EditEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `
        <div class="control-section">
            <ejs-grid #grid [dataSource]='data' (actionComplete)='onActionComplete($event)' allowPaging='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' [validationRules]='orderidrules' isPrimaryKey='true' ></e-column>
                    <e-column field='CustomerID' headerText='Customer Name' width='120' [validationRules]='customeridrules'></e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' [validationRules]='freightrules'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' [validationRules]='countryrules' [edit]='editparams'></e-column>
                </e-columns>
            </ejs-grid>
        </div>`,  
    providers: [ToolbarService, EditService, PageService]
})
export class AppComponent {
    public data?: Object[];
    public editSettings?: Object;
    public toolbar?: string[];
    public orderidrules?: Object;
    public customeridrules?: Object;
    public freightrules?: Object;
    public countryrules?: Object;
    public pageSettings?: Object;
    public editparams?: Object;

    @ViewChild('grid', {static: false})
    public grid?: GridComponent;

    public ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.orderidrules = { required: true, number: true };
        this.customeridrules = { required: true };
        this.countryrules = { required: true };
        this.freightrules =  { required: true };
        this.editparams = { params: { popupHeight: '200px' }};
        this.pageSettings = { pageCount: 5};
    }

    public onActionComplete(args:EditEventArgs):void {
      if (args.requestType == "beginEdit" || args.requestType == "add") { 
        var valueError = getObject('valErrorPlacement', (this.grid as GridComponent).editModule).bind((this.grid as GridComponent).editModule);  
        (this.grid as GridComponent).editModule.formObj.customPlacement = (input, error) => { 
          valueError(input, error);
          debugger;
          var element = document.getElementById(input.name + '_Error');
          var tooltipWidth = (element as HTMLElement).offsetWidth;
          var  inputElement = null;
          if (document.querySelector('#' + (this.grid as GridComponent).element.id + input.name)) {
            inputElement = document.querySelector('#' +(this.grid as GridComponent).element.id + input.name);
          } else if (document.querySelector('#' + input.name)) {
            inputElement = document.querySelector('#' + input.name);
          }
          var inputPosition = ( inputElement as Element).getBoundingClientRect();
          var leftPosition =  (inputPosition.left - tooltipWidth - 16).toString() + 'px'; //for right side
          var topPosition = (inputPosition.top).toString() + 'px';
          (element as HTMLElement).style.left = leftPosition; 
          (element as HTMLElement).style.top =  topPosition;
          (element as HTMLElement).style.position = 'fixed';
        } 
      } 
    }
}