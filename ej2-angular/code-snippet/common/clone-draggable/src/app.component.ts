import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { Component, ViewChild } from '@angular/core';
import { Draggable } from  '@syncfusion/ej2-base';

@Component({
standalone: true,
    selector: 'app-root',
    template:` <div id='container'>
    <div #ele class='element'><p class='drag'>Draggable Element </p></div>
    </div> `
})

export class AppComponent {

@ViewChild('ele',{static: false})element:any;

    ngAfterViewInit() {
        let draggable: Draggable =
        new Draggable(this.element.nativeElement,{ clone: true });
    }
}

 

 