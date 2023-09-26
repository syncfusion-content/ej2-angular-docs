


import { Component } from '@angular/core';
import { IslamicService } from '@syncfusion/ej2-angular-calendars';
import { addClass } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    providers:[IslamicService],
    template: `
              <!-- Sets the isMultiSelection and values properties-->
            <ejs-calendar (renderDayCell)="onLoad($event)" (change)="onValueChange($event)" calendarMode='Islamic' class='e-customStyle'></ejs-calendar>`
})
export class AppComponent {
    constructor() {
    }
    onValueChange(args: any){}
    onLoad(args: any) {
         /*Date need to be disabled*/
         if (args.date.getDate() === 12 || args.date.getDate() === 17 || args.date.getDate() === 22) {
            args.isDisabled = true;
        }
        /*Dates need to be customized*/
        if (args.date.getDate() === 13) {
            let span: HTMLElement;
            span = document.createElement('span');
            args.element.children[0].className += 'e-day sf-icon-cup highlight';
            addClass([args.element], ['special', 'e-day', 'dinner']);
            args.element.setAttribute('data-val', ' Dinner !');
            args.element.appendChild(span);
          }
          if (args.date.getDate() === 23) {
            let span: HTMLElement;
            span = document.createElement('span');
            args.element.children[0].className += 'e-day sf-icon-start highlight';
            span.setAttribute('class', 'sx !');
            //use the imported method to add the multiple classes to the given element
            addClass([args.element], ['special', 'e-day', 'holiday']);
            args.element.setAttribute('data-val', ' Holiday !');
            args.element.appendChild(span);
          }
    }
}



