
import { Component } from '@angular/core';
import { TimelineItemModel } from "@syncfusion/ej2-angular-layouts";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public productLifecycle: TimelineItemModel[] = [
        { content: 'Planning'},
        { content: 'Developing'},
        { content: 'Testing' },
        { content: 'Launch' },
    ];

    handleTimelineCreated = () => {
    //your required action here 
    }
}


