

import { Component, ViewChild } from '@angular/core';
import { InPlaceEditorComponent, ActionBlur } from '@syncfusion/ej2-angular-inplace-editor';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
    selector: 'app-root',
    template: `
       <div id='container'>
    <table class="table-section">
        <tr>
            <td> ActionOnBlur: </td>
            <td>
                <div id="dropDown"></div>
                <ejs-dropdownlist #dropDown (change)="onChange($event)" id='dropDown' width="auto" [dataSource]='blurActionData' value='Submit' placeholder="Select blur action">
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
  public blurActionData: string[] = ['Submit', 'Cancel', 'Ignore'];

  public onChange(e: ChangeEventArgs): void {
    let editType: ActionBlur = e.itemData.value as ActionBlur;
    (this.editObj as InPlaceEditorComponent).actionOnBlur = editType;
    this.editObj?.dataBind();
  }
}



