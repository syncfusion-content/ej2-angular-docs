

import { Component, ViewChild } from '@angular/core';
import { ProgressEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `
    <div class="control-section">
    <div class="progress-btn-section">
        <button ejs-progressbutton content='Progress' [enableProgress]='true' (begin)='begin($event)' (end)='end($event)' (progress)='progress($event)' (fail)='fail($event)' cssClass='e-hide-spinner'></button>
    </div>
    <div class="property-section">
        <table id="propertyTable" title="Event trace">
            <tbody>
                <th>Event trace:-</th>
                <tr>
                <td [innerHTML]="eventTrace"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <button #clear id="clear" ejs-button cssClass='e-small' (click)='btnClick()'>Clear</button>
    </div>
    `
})

export class AppComponent {
begin($event: any) {
throw new Error('Method not implemented.');
}
    public eventTrace: string = '';
    public end(args: ProgressEventArgs): void {
        this.updateEventLog(args);
    }
    public progress(args: ProgressEventArgs): void {
        this.updateEventLog(args);
    }
    public fail(args: Event): void {
        this.updateEventLog(args);
    }
    public updateEventLog(args: any): void {
        this.eventTrace = this.eventTrace + args.name + ' Event triggered. <br />'
    }

    public btnClick(): void {
        this.eventTrace = '';
    }
}


