import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpeedDialModule } from '@syncfusion/ej2-angular-buttons'



import { Component, ViewChild, HostListener } from '@angular/core';
import { SpeedDialComponent,SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [
        
        SpeedDialModule// Registering EJ2 SpeedDial Module.
    ],


standalone: true,
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:340px;border:1px solid;padding:10px;">
    <button id="show" (click)="show()">Show</button>
    <button id="hide" (click)="hide()">Hide</button><div>
    <!-- To Render SpeedDial component. -->
    <button ejs-speeddial #speeddial openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' [opensOnHover]= 'true' [items]='items'></button>`
})

export class AppComponent {
    @ViewChild('speeddial')
    public speeddialObj :SpeedDialComponent | any;

    public items: SpeedDialItemModel[] = [
        { iconCss: 'e-icons e-cut' },
        { iconCss: 'e-icons e-copy' },
        { iconCss: 'e-icons e-paste' }
    ];
    public show() {
        this.speeddialObj.show();
    }
    public hide() {
        this.speeddialObj.hide();
    }
}


