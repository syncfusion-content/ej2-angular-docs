
import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    // specifies the template url path
    templateUrl: 'app/app.component.html'
    })
export class AppComponent {
    @ViewChild('element') tabObj?: TabComponent;
    @ViewChild('headerStyles') listObj?: DropDownListComponent;
    public headerText: Record<string, any>[] = [{ 'text': 'Twitter' }, { 'text': 'Facebook' },{ 'text': 'WhatsApp' }];
    public headerData: Object[] = [
        { Id: 'header1', headerStyle: 'default', text: 'Default' },
        { Id: 'header2', headerStyle: 'fill', text: 'Fill'},
        { Id: 'header3', headerStyle: 'background',text: 'Background' },
        { Id: 'header4', headerStyle: 'accent', text: 'Accent' }
    ];
    public fields: Object = { text: 'text', value: 'headerStyle' };
    public height: string = '220px';
    public value: string = 'default';
    public onChange(args: ChangeEventArgs): void {
        this.removeStyleClass();
        if (this.listObj?.value === 'fill') {
            (this.tabObj as TabComponent).element.classList.add('e-fill');
        } else if (this.listObj?.value === 'background') {
            (this.tabObj as TabComponent).element.classList.add('e-background');
        } else if (this.listObj?.value === 'accent') {
            (this.tabObj as TabComponent).element.classList.add('e-background');
            (this.tabObj as TabComponent).element.classList.add('e-accent');
        }
    }
    public removeStyleClass(): void {
        (this.tabObj as TabComponent).element.classList.remove('e-fill');
        (this.tabObj as TabComponent).element.classList.remove('e-background');
        (this.tabObj as TabComponent).element.classList.remove('e-accent');
    }    
}
