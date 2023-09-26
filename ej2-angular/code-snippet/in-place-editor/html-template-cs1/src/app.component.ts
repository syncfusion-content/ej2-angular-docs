

import { Component, ViewChild } from '@angular/core';
import { InPlaceEditorComponent, ActionBeginEventArgs } from '@syncfusion/ej2-angular-inplace-editor';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
        <span class="content-title"> Select date: </span>
        <ejs-inplaceeditor #element id="element" mode="Inline" value="2018-05-23" (actionBegin)="actionBegin($event)">
            <ng-template #template>
                <input id="date" value="2018-05-23" type="date">
            </ng-template>
        </ejs-inplaceeditor>
    </div>
    `
})

export class AppComponent {
    @ViewChild('element') editObj?: InPlaceEditorComponent;
    public actionBegin(e: ActionBeginEventArgs): void {
        const value = (<any>(this.editObj as InPlaceEditorComponent).element.querySelector('#date')).value;
        (this.editObj as InPlaceEditorComponent).value = value;
        (<any>e).value = value;
    }
}



