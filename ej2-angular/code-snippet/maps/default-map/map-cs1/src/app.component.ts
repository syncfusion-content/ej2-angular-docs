

import { Component, ViewEncapsulation } from '@angular/core';
import { usa_map } from './usa';
import { california } from './california';
import { texas } from './texas';

@Component({
    selector: 'app-container',
    // specifies the template string for the maps component.
    template:`<div class="control-section">
    <div align='center'>
    <ejs-maps id='container' style="display:block;">
    <e-layers>
    <e-layer [shapeData]='usMap' [shapeSettings]='us_shapeSettings'></e-layer>
    <e-layer [shapeData]='texas' type='SubLayer' [shapeSettings]='texas_shapeSettings'></e-layer>
    <e-layer [shapeData]='california' type='SubLayer' [shapeSettings]='california_shapeSettings'></e-layer>
    </e-layers>
    </ejs-maps>
    </div>
    </div>`,
    encapsulation: ViewEncapsulation.None
  })
    export class AppComponent {
        public usMap = usa_map;
        public us_shapeSettings = {
            fill: '#E5E5E5',
            border: {
                color: 'black',
                width: 0.1
            }
        };
        public texas = texas;
        public texas_shapeSettings = {
            fill: 'rgba(141, 206, 255, 0.6)',
            border: {
                color: '#1a9cff',
                width: 0.25
            }
        };
        public california=california;
        public california_shapeSettings = {
            fill: 'rgba(141, 206, 255, 0.6)',
            border: {
                color: '#1a9cff',
                width: 0.25
            }
        }
    }


