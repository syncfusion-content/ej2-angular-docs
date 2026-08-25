import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts'
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    imports: [DashboardLayoutModule],
    standalone: true,
    selector: 'app-root',
    template: `
    <div class="control-section">
        <ejs-dashboardlayout id="defaultLayout" #defaultLayout [cellSpacing]="cellSpacing" [mediaQuery]="mediaQuery" [columns]="columns" [panels]="panels">
        </ejs-dashboardlayout>
    </div>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    public cellSpacing: number[] = [20, 20];
    public mediaQuery: string = 'max-width: 700px';
    public columns: number = 5;
    public panels: any = [
        {
            sizeX: 1,
            sizeY: 1,
            row: 0,
            col: 0,
            content: '<div class="content">0</div>',
            mobilePanelHeight: 0.25
        },
        {
            sizeX: 1,
            sizeY: 1,
            row: 0,
            col: 1,
            content: '<div class="content">1</div>',
            mobilePanelHeight: 0.5
        },
        {
            sizeX: 1,
            sizeY: 1,
            row: 1,
            col: 0,
            content: '<div class="content">2</div>',
            mobilePanelHeight: 0.75
        },
        {
            sizeX: 1,
            sizeY: 1,
            row: 2,
            col: 0,
            content: '<div class="content">3</div>',
            mobilePanelHeight: 1
        },
    ]
}


