

import { Component, OnInit } from '@angular/core';
import { Maps, Selection} from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
Maps.Inject(Selection);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' >
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [initialShapeSelection] = 'initialShapeSelection' [selectionSettings] ='selectionSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public initialShapeSelection?: object;
    public selectionSettings?: object;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.initialShapeSelection = [
            { shapePath: 'continent', shapeValue: 'Africa' },
            { shapePath: 'name', shapeValue: 'India' }
        ];
        this.selectionSettings = {
            enable: true,
            fill: 'green',
            border: { color: 'white', width: 2 }
        }
    }
}


 