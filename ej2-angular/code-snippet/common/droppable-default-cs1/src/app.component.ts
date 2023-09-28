
 
import { Component, ViewChild } from '@angular/core';
import { Droppable } from  '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template:` <div id='container'>
    <div #droppable class='droppable'><p class='drop'>Drop target </p></div>
    </div> `
})

export class AppComponent {
    @ViewChild('droppable',{static: false})element: any ;

    ngAfterViewInit() {
        let droppable: Droppable = new Droppable(document.getElementById('droppable') as HTMLElement);
     }
}



 