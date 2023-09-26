

import { Component } from '@angular/core';
import { InPlaceEditorComponent, ActionEventArgs } from '@syncfusion/ej2-angular-inplace-editor';
import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
        <span class="content-title"> Enter your name: </span>
        <ejs-inplaceeditor #element id="element" mode="Inline" value="Andrew" [model]="model" (actionSuccess)="actionSuccess($event)"></ejs-inplaceeditor>
    </div>
    `
})

export class AppComponent {
    public model: object = { placeholder: 'Enter some text' };
    public actionSuccess(e: ActionEventArgs | any): void {
        let pk: string = e.data['PrimaryKey'];
        if (isNOU(pk) || pk === '') {
            (document.querySelector('.e-editable-value') as Element).classList.add('e-send-error');
        }
    }
}



