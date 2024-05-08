import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule, SnappingService } from '@syncfusion/ej2-angular-diagrams'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, SnapSettingsModel, SnapConstraints } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [SnappingService],
standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [snapSettings]='snapSettings'></ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public snapSettings: SnapSettingsModel = {
        // Display both Horizontal and Vertical gridlines
        constraints:  SnapConstraints.ShowLines
    };
}


