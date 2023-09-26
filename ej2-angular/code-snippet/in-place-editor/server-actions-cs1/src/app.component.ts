

import { Component, ViewChild } from '@angular/core';
import { InPlaceEditorComponent, ActionEventArgs } from '@syncfusion/ej2-angular-inplace-editor';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
        <span class="content-title"> Select frameworks: </span>
        <ejs-inplaceeditor #element id="element" data-underline="false" type="MultiSelect" mode="Inline" [value]="value" [model]="model" name="skill" [url]="url" primaryKey="FrameWork" adaptor="UrlAdaptor" (created)="created()" (actionSuccess)="actionSuccess($event)" (actionFailure)="actionFailure($event)"></ejs-inplaceeditor>
    </div>
    `
})

export class AppComponent {
    @ViewChild('element') editObj?: InPlaceEditorComponent;
    public value: string[] =  ['JavaScript', 'jQuery'];
    public url = 'https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData';
    public frameWorkList: string[] = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];
    public model: object = { mode: 'Box', dataSource: this.frameWorkList, placeholder: 'Select skill' };
    chipOnCreate() {
        (this.editObj?.element.querySelector('.e-editable-value') as Element).innerHTML = this.chipCreation(this.editObj?.value, true);
    }
    public actionSuccess(e: ActionEventArgs): void {
        e.value = this.chipCreation(e.value.split(','), true);
    }
    public actionFailure(e: ActionEventArgs): void {
        e.value = this.chipCreation(e.value.split(','), false);
    }
    public created(): void {
        this.chipOnCreate();
    }
    chipCreation(data: any, isSuccess: boolean): string | any {
        let value = '<div class="e-chip-list">';
        [].slice.call(data).forEach((val: string) => {
            value += '<div class="e-chip"> <span class="e-chip-text' + (!isSuccess ? 'e-highlight' : '') + '"> ' + val + '</span></div>';
        });
        value += '</div>';
        return value;
    }
}


