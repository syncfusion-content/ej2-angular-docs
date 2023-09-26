

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    styleUrls: ['./default-style.css'],
    template: `
    <div class="control-section">
        <div class="inline" id="control">
            <ejs-dashboardlayout id='dashboard_default' #defaultLayout [columns]='5' [cellSpacing]='cellSpacing'
                [panels]='panels'>
            </ejs-dashboardlayout>
        </div>
        <div class="inline" id="properties">
            <button ejs-button id='saveBtn' #saveBtn cssClass="e-primary" (click)='onSaveClick($event)'>Save</button>
            <button ejs-button id='restoreBtn' #restoreBtn cssClass="e-flat e-outline" (click)='onrestoreClick($event)'>Restore</button>
        </div>
    </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('defaultLayout') dashboard?: DashboardLayoutComponent;
    @ViewChild('saveBtn') saveBtn?: ButtonComponent;
    @ViewChild('restoreBtn') restoreBtn?: ButtonComponent;
    public restoreModel: any = [];
    public cellSpacing: number[] = [10, 10];
    public panels: any = [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: '<div class="content">0</div>' },
    { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>' },
    { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content">2</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content">3</div>' },
    { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: '<div class="content">4</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content">5</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content">6</div>' }
    ];

    onSaveClick(args: any) {
      this.restoreModel= this.dashboard?.serialize();
      this.restoreModel[0].content = '<div class="content">0</div>';
      this.restoreModel[1].content = '<div class="content">1</div>';
      this.restoreModel[2].content = '<div class="content">2</div>';
      this.restoreModel[3].content = '<div class="content">3</div>';
      this.restoreModel[4].content = '<div class="content">4</div>';
      this.restoreModel[5].content = '<div class="content">5</div>';
      this.restoreModel[6].content = '<div class="content">6</div>';
    }

    onrestoreClick(args: any) {
      this.dashboard!.panels = this.restoreModel;
    }
}


