


import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <div id='container'>
         <ejs-splitter #resize height='200px' width='600'>
            <e-panes>
                <e-pane size='200px'>
                    <ng-template #content>
                        <div class="fixed-pane-content">
                            <h3 class="h3">Grid </h3>
                            The ASP.NET DataGrid control, or DataTable is a feature-rich control used to display data in a tabular format.
                        </div>
                    </ng-template>
                </e-pane>
                <e-pane size='200px'>
                    <ng-template #content>
                        <div class="fixed-pane-content">
                            <h3 class="h3">Schedule </h3>
                            The ASP.NET Scheduler, a.k.a. event calendar, facilitates almost all calendar features, thus allowing users to manage their time efficiently
                        </div>
                    </ng-template>
                </e-pane>
                <e-pane size='200px'>
                    <ng-template #content>
                        <div class="fixed-pane-content">
                            <h3 class="h3">Chart </h3>
                            ASP.NET charts, a well-crafted easy-to-use charting package, is used to add beautiful charts in web and mobile applications
                        </div>
                    </ng-template>
                </e-pane>
            </e-panes>
          </ejs-splitter>
      </div>`
})
export class AppComponent {
    constructor() {
    }
}



