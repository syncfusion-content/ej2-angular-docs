


import { Component, ViewChild } from '@angular/core';
import { SplitterComponent} from '@syncfusion/ej2-angular-layouts';

@Component({
    selector: 'app-root',
    template: `
      <div id='container'>
         <ejs-splitter #remove height='200px' width='600px'>
            <e-panes>
                <e-pane size='200px'>
                    <ng-template #content>
                        <div class="content">Pane 1</div>
                    </ng-template>
                </e-pane>
                <e-pane size='200px'>
                    <ng-template #content>
                        <div class="content">Pane 2</div>
                    </ng-template>
                </e-pane>
                <e-pane size='200px'>
                    <ng-template #content>
                        <div class="content">Pane 3</div>
                    </ng-template>
                </e-pane>
            </e-panes>
          </ejs-splitter>
          <div id='removeButton'>
            <button class='e-control e-btn' id='remove' (click)='removePane()'>Remove pane</button>
          </div>
      </div>`
})
export class AppComponent {
  @ViewChild('remove') splitterObj?: SplitterComponent;
    constructor() {
    }

    removePane(): void {
      if ((this.splitterObj as any).allPanes.length > 1) {
          this.splitterObj?.removePane(1);
      }
    }
}



