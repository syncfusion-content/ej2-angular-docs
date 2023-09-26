

import { Component, HostListener, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

@Component({
    selector: 'app-root',
    template: `
        <ejs-timepicker #keyboard [value]='dateValue'></ejs-timepicker>
        `
})

export class AppComponent {
   @ViewChild('keyboard') timeObj: any;
    public dateValue: Date = new Date();
    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
    if (event.altKey && event.keyCode === 84 /* t */) {
        // press alt+t to focus the control by calling public method.
        this.timeObj.focusIn();
    }
  }
    constructor() {
    }
}


