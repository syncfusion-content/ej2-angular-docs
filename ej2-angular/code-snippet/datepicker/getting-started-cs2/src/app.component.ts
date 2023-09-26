



import { Component } from '@angular/core';
import { RenderDayCellEventArgs } from '@syncfusion/ej2-angular-calendars';

@Component({
    selector: 'app-root',
    styleUrls: ['./index.css'],
    template: `<ejs-datepicker [value]='dateValue' placeholder='Enter date' (renderDayCell)='onRenderCell($event)'></ejs-datepicker>`
})
export class AppComponent {
    public dateValue:Date = new Date();
    constructor() {
    }
    public  onRenderCell(args: RenderDayCellEventArgs): void {
    if (args.date?.getDay() == 0 || args.date?.getDay() == 6) {
        //sets isDisabled to true to disable the date.
        args.isDisabled = true;
        //To know about the disabled date customization, you can refer in "styles.css".
    }

}
}



