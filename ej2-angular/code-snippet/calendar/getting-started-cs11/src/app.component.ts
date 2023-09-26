


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!-- Sets the weekNumber -->
        <ejs-calendar [value]='dateValue' weekNumber='true'></ejs-calendar>
        `
})

export class AppComponent {
    public dateValue: Date = new Date();
}



