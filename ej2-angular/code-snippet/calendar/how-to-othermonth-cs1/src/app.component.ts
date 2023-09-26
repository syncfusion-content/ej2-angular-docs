

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!-- To show other months date refer the "styles.css". -->
        <ejs-calendar [value]='dateValue'></ejs-calendar>
        `
})
export class AppComponent {
    public dateValue: Date = new Date();
}


