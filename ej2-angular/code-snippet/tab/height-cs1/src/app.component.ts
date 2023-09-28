import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { HeightStyles, TabComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    // specifies the template url path
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('element') tabObj?: TabComponent;
    @ViewChild('contentHeight') listObj?: DropDownListComponent;
    public heightData: Object[] = [
        { mode: 'None', text: 'None' },
        { mode: 'Content', text: 'Content' },
        { mode: 'Fill', text: 'Fill' },
        { mode: 'Auto', text: 'Auto' }
    ];
    public fields: Object = { text: 'text', value: 'mode' };
    public height: string = '220px';
    public value: string = 'Content';
    public onChange(args: ChangeEventArgs): void {
        (this.tabObj as TabComponent).heightAdjustMode = (this.listObj as DropDownListComponent).value as string as HeightStyles;
    }
    public headerText: Object = [{ 'text': 'Twitter' }, { 'text': 'Facebook' }, { 'text': 'WhatsApp' }];
}