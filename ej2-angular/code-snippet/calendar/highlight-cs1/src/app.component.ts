

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./style.css'],
    template: `
        <!-- To customize day calendar appearance -->
        <!-- Refer the "special,highlight-day" class details in "styles.css"-->
        <ejs-calendar [value]='dateValue' (renderDayCell)='customDates($event)'></ejs-calendar>
        `
})

export class AppComponent {
    public dateValue: Date = new Date('3/7/2017');
    constructor() {
    }
    customDates(args: any): void {
         let span: HTMLElement;
    //defines the custom HTML element to be added.
    span = document.createElement('span');
    //Use "e-icons" class name to load Essential JS 2 built-in icons.
    span.setAttribute('class', 'e-icons highlight-day');
    if (+args.date.getDate() === 7 && +args.date.getMonth() == 3) {
        //append the span element to day cell.
        args.element.appendChild(span);
        //set the custom tooltip to the special dates.
        args.element.setAttribute('title', 'World health day!');
        //Use "special" class name to highlight the special dates, which you can refer in "styles.css".
        args.element.className = 'special';
    }
    if (+args.date.getDate() === 21 && +args.date.getMonth() == 2) {
        args.element.appendChild(span);
        args.element.className = 'special';
        //set the custom tooltip to the special dates.
        args.element.setAttribute('title', 'World forest day');
    }
    }
}


