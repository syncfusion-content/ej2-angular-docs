

import { Component,HostListener,ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <ejs-calendar #ejCalendar [value]='dateValue'></ejs-calendar>
        `
})

export class AppComponent {
   @ViewChild('ejCalendar') ejCalendar: any;
    public dateValue: Date = new Date();
    @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.altKey && event.keyCode === 84) {
        // press alt+t to focus the control.
        this.ejCalendar.element.querySelectorAll('.e-content table')[0].focus();
    }
  }
    constructor() {
    }
}


