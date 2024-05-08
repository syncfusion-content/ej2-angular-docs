import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { SelectionService } from '@syncfusion/ej2-angular-maps'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MapsComponent} from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
@Component({
imports: [
         MapsModule
    ],

providers: [SelectionService],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' #maps>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [selectionSettings] ='selectionSettings'></e-layer>
    </e-layers>
    </ejs-maps> <button  id='select' (click)='select()'>select</button> <button id='unselect' (click)='unselect()'>unselect</button>`
})

export class AppComponent {
    @ViewChild('maps')
    public mapObj?: MapsComponent;
    public shapeData: object = world_map;
    public selectionSettings: object = {
        enable: true,
        fill: 'green',
        border: { color: 'white', width: 2 }
    };
    select(){
        this.mapObj?.shapeSelection(0, "continent", "Asia", true);
    };
    unselect(){
        this.mapObj?.shapeSelection(0, "continent", "Asia", false);
    }
}


 