

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DashboardLayoutComponent } from '@syncfusion/ej2-angular-layouts';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    styleUrls: ['./default-style.css'],
    template: `
    <div class="control-section">
        <div class="inline" id="control">
            <ejs-dashboardlayout id='dashboard_default' #defaultLayout [columns]='6' [cellSpacing]='cellSpacing'
                [panels]='panels' [allowFloating]='allowFloating' [cellAspectRatio]='cellAspectRatio'>
            </ejs-dashboardlayout>
        </div>
        <div class="inline" id="properties">
            <button ejs-button id='toggle' #toggleBtn cssClass="e-flat e-primary e-outline" [isToggle]="true" (click)='btnClick($event)' content="Enable Floating"></button>
        </div>
    </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('defaultLayout') dashboard?: DashboardLayoutComponent;
    @ViewChild('toggleBtn') toggleBtn?: ButtonComponent;
    public cellSpacing: any = [10, 10];
    public allowFloating: boolean = false;
    public cellAspectRatio: number = 100/75;
    public panels: any = [
    {'sizeX': 2, 'sizeY': 2, 'row': 1, 'col': 0, content:'<div class="content">0</div>'},
    {'sizeX': 2, 'sizeY': 2, 'row': 2, 'col': 2, content:'<div class="content">1</div>'},
    {'sizeX': 2, 'sizeY': 2, 'row': 3, 'col': 4, content:'<div class="content">2</div>'}
    ];

    btnClick(args: any) {
        if (this.toggleBtn?.content == "Disable Floating and Reset") {
            this.toggleBtn!.content = 'Enable Floating';
            this.dashboard!.allowFloating = false;
            this.dashboard!.panels = this.panels;
        } else {
            this.toggleBtn!.content = 'Disable Floating and Reset';
            this.dashboard!.allowFloating = true;
        }
    }
}


