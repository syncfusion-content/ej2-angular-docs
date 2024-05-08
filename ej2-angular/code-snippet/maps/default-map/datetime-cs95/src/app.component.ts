import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { SelectionService } from '@syncfusion/ej2-angular-maps'



import { Component, OnInit } from '@angular/core';
import { world_map } from './world-map';
@Component({
imports: [
         MapsModule
    ],

providers: [SelectionService],
standalone: true,
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


 