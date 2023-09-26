


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <div id='container'>
         <ejs-splitter #multiple height='300px' width='600px'>
            <e-panes>
                <e-pane size='150px'>
                    <ng-template #content>
                        <div class="content">
                            <h3 class="h3">PARIS </h3>
                             Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the romanticism...
                        </div>
                    </ng-template>
                </e-pane>
                <e-pane size='150px'>
                    <ng-template #content>
                        <div class="content">
                            <h3 class="h3">CAMEMBERT </h3>
                            The village in the Orne département of Normandy where the famous French cheese is originated from.
                        </div>
                    </ng-template>
                </e-pane>
                <e-pane size='150px'>
                    <ng-template #content>
                        <div class="content">
                            <h3 class="h3">GRENOBLE </h3>
                            The capital city of the French Alps and a major scientific center surrounded by many ski resorts, host of the Winter Olympics in 1968.
                        </div>
                    </ng-template>
                </e-pane>
                <e-pane size='150px'>
                    <ng-template #content>
                        <div class="content">
                            <h3 class="h3">Australia </h3>
                            Australia is a country and continent surrounded by the Indian and Pacific oceans. Its major cities – Sydney, Brisbane, Melbourne, Perth, Adelaide – are coastal. Its capital, Canberra, is inland.
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



