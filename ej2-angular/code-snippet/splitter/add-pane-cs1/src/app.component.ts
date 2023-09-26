


import { Component, ViewChild } from '@angular/core';
import { SplitterComponent, PanePropertiesModel } from '@syncfusion/ej2-angular-layouts';

@Component({
    selector: 'app-root',
    template: `
      <div id='container'>
         <ejs-splitter #add height='200px' width='600px'>
            <e-panes>
                <e-pane size='150px'>
                    <ng-template #content>
                        <div class="content">Pane 1</div>
                    </ng-template>
                </e-pane>
                <e-pane size='150px'>
                    <ng-template #content>
                        <div class="content">Pane 2</div>
                    </ng-template>
                </e-pane>
            </e-panes>
          </ejs-splitter>
          <div id='addButton'>
            <button class='e-control e-btn' id='add' (click)='addPane()'>Add pane</button>
          </div>
      </div>`
})
export class AppComponent {
  @ViewChild('add') splitterObj?: SplitterComponent;
    constructor() {
    }
    public paneDetails: PanePropertiesModel = {
        size: '190px',
        content: 'New Pane',
        min: '30px',
        max: '250px',
    }
    addPane(): void {
      if ((this.splitterObj as any).allPanes.length >= 1) {
          this.splitterObj!.addPane(this.paneDetails, 1);
      }
    }
}



