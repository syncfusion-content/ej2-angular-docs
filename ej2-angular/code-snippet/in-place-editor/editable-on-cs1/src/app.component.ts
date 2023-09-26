

import { Component, ViewChild } from '@angular/core';
import { InPlaceEditorComponent, EditableType } from '@syncfusion/ej2-angular-inplace-editor';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
    selector: 'app-root',
    template: `
       <div id='container'>
        <table class="table-section">
            <tr>
                <td> EditableOn: </td>
                <td>
                    <ejs-dropdownlist #dropDown (change)="onChange($event)" id='dropDown' width="auto" [dataSource]='editableOnData' value='Click' placeholder="Select edit type">
                    </ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td  class="sample-td"> Enter your name: </td>
                <td  class="sample-td">
                    <ejs-inplaceeditor #element id="element" mode="Inline" value="Andrew" [model]="model"></ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
    `
})

export class AppComponent {
  @ViewChild('element') editObj?: InPlaceEditorComponent;
  public model: Object = {  placeholder: 'Enter some text' };
  public editableOnData: string[] = ['Click', 'DblClick', 'EditIconClick'];

  public onChange(e: ChangeEventArgs): void {
    let editType: EditableType = e.itemData.value as EditableType;
    (this.editObj as InPlaceEditorComponent).editableOn = editType;
    this.editObj?.dataBind();
  }
}


