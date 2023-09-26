


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
              <!-- Sets the isMultiSelection and values properties-->
              <ejs-calendar [values]='dateValues' [isMultiSelection]='multiSelect'></ejs-calendar>
        `
})
export class AppComponent {
    public dateValues: Date[] = [new Date('1/1/2020'), new Date('1/15/2020'), new Date('1/3/2020'), new Date('1/25/2020')];
    public multiSelect: Boolean = true;
    constructor() {
    }
}



