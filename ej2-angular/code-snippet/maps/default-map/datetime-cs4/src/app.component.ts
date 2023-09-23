

import { Component, OnInit } from '@angular/core';
import { Maps, Annotations } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
Maps.Inject(Annotations);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style="display:block" [annotations]='annotations'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public annotations?: object;
    public shapeData?: object;
    ngOnInit(): void {
        this.annotations = [{
            content: '<div id="first"><h1>Maps</h1></div>',
            verticalAlignment: 'Center',
            horizontalAlignment: 'Center',
            x: '20%', y: '50%',
            zIndex: '-1'
        }];
        this.shapeData = world_map;
    }
}


