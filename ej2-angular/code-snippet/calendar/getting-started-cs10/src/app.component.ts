


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!-- Sets the firstDayOfWeek -->
        <ejs-calendar [value]='dateValue' [firstDayOfWeek]='startWeek'></ejs-calendar>
        `
})

export class AppComponent {
    public dateValue: Date = new Date();
    public startWeek: number = 2;
}



