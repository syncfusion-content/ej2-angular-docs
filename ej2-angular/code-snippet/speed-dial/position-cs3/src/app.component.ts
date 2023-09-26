

import { Component, ViewChild, HostListener } from '@angular/core';
import { SpeedDialComponent,SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    template: `<div id="targetElement" style="position:relative;min-height:340px;border:1px solid;padding:10px;">
    <button id="refresh" (click)="refresh()">Refresh</button><div>
    <!-- To Render SpeedDial component. -->
    <button ejs-speeddial #speeddial openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' position='MiddleRight' target='#targetElement' [items]='items'></button>`
})

export class AppComponent {
    @ViewChild('speeddial')
    public speeddialObj:SpeedDialComponent | any;

    public items: SpeedDialItemModel[] = [
        { iconCss: 'e-icons e-cut' },
        { iconCss: 'e-icons e-copy' },
        { iconCss: 'e-icons e-paste' }
    ];
    public refresh() {
        document.getElementById("targetElement")!.style.minHeight = "300px";
        this.speeddialObj.refreshPosition();
    }
}


