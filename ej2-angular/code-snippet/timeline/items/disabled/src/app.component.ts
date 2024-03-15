
import { Component } from '@angular/core';
import { TimelineItemModel } from "@syncfusion/ej2-angular-layouts";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    public dailyRoutine: TimelineItemModel[] = [
        { content: 'Eat'},
        { content: 'Code'},
        { content: 'Repeat', disabled: true},
    ];

}


