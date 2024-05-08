import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'


 
 import { Component, ViewChild } from '@angular/core';
 import { Draggable, Droppable, DropEventArgs } from '@syncfusion/ej2-base';

 @Component({

standalone: true,
    selector: 'app-root',
    template:` <div id='container'>
    <div id='droppable'><p class='drop'>Drop target </p></div>
    <div id='draggable'><p class='drag'>Draggable Element </p></div>
    </div> `
})

export class AppComponent {
    @ViewChild('droppable',{static: false})element: any;
    @ViewChild('draggable',{static: false})element1: any;

    ngAfterViewInit() {
        let draggable: Draggable = new Draggable(document.getElementById('draggable') as HTMLElement , {clone: false});
        let droppable: Droppable = new Droppable(document.getElementById('droppable') as HTMLElement , {
            drop: (e: DropEventArgs) => {
                ((e.droppedElement as HTMLElement).querySelector('.drag') as Element).textContent = 'Dropped';
            }
        });
    }
}
 

 