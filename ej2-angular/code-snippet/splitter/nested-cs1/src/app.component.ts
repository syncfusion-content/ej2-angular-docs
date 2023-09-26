


import { Component, ViewChild } from '@angular/core';
import { SplitterComponent} from '@syncfusion/ej2-angular-layouts';
import { Splitter } from '@syncfusion/ej2-layouts';

@Component({
    selector: 'app-root',
    template: `
        <div id='container'>
            <ejs-splitter #splitterInstance  id="nested-splitter" (created)='onCreated()' height='320px' width='580px'>
            <e-panes>
                <e-pane size='200px'>
                    <ng-template #content>
                        <div class="content">
                            <h3 class="h3">PARIS </h3>
                            Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the romanticism...
                        </div>
                    </ng-template>
                </e-pane>
                <e-pane size= '200px'>
                    <ng-template #content>
                        <div class="content">
                            <h3 class="h3">CAMEMBERT </h3>
                            The village in the Orne département of Normandy where the famous French cheese is originated from.
                        </div>
                    </ng-template>
                </e-pane>
                <e-pane>
                    <ng-template #content>
                        <div id ='vertical_splitter' class="vertical_splitter">
                            <div>
                                <div class="content">
                                    <h3 class="h3">GRENOBLE </h3>
                                    The capital city of the French Alps and a major scientific center surrounded by many ski resorts, host of the Winter Olympics in 1968.
                                </div>
                            </div>
                            <div>
                                <div class="content">
                                    <h3 class="h3">Australia </h3>
                                    Australia is a country and continent surrounded by the Indian and Pacific oceans
                                </div>
                            </div>
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

    @ViewChild('splitterInstance') splitterObj?: SplitterComponent;
    public onCreated () {
        let splitterObj1 = new Splitter({
            height: '310px',
            paneSettings: [
                { size: '150px', min: '20%'},
                { size: '100px', min: '20%'}
            ],
            orientation: 'Vertical'
        });
        splitterObj1.appendTo('#vertical_splitter');
    }
}



