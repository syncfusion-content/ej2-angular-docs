import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpeedDialModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from '@angular/core';
import { SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [
        
        SpeedDialModule// Registering EJ2 SpeedDial Module.
    ],


standalone: true,
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"><div>
    <!-- To Render SpeedDial component. -->
    <button ejs-speeddial id="speeddial" content='Edit' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement' [items]='items'></button>`
})

export class AppComponent {
  public items: SpeedDialItemModel[] = [
    { text: 'Cut', iconCss: 'e-icons e-cut' },
    { text: 'Copy', iconCss: 'e-icons e-copy' },
    { text: 'Paste', iconCss: 'e-icons e-paste' }
  ];
}


