import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { AnnotationsService } from '@syncfusion/ej2-angular-maps'



import { Component, OnInit } from '@angular/core';
import { world_map } from './world-map';
@Component({
imports: [
         MapsModule
    ],

providers: [AnnotationsService],
standalone: true,
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
                x: '0%', y: '50%',
                zIndex: '-1'
            }];
            this.shapeData = world_map
        }
}


