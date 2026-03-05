import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import {  TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-angular-navigations'
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns'

import { Component, ViewChild } from '@angular/core';
import {  DropDownListModule,ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { TabAllModule,HeightStyles, TabComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
        FormsModule,DropDownListModule,TabAllModule
    ],


standalone: true,
    selector: 'app-container',
    // specifies the template url path
    templateUrl: './app.component.html',
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
    public headerText: { text: string }[] = [{ 'text': 'Twitter' }, { 'text': 'Facebook' }, { 'text': 'WhatsApp' }];
}