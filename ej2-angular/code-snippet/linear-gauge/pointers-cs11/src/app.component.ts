import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'

import { Component } from '@angular/core';

@Component({
imports: [
         LinearGaugeModule
    ],

,
standalone: true,
  selector: 'app-container',
  template: `
    <ejs-lineargauge id="gauge-container" orientation="Horizontal">
        <e-axes>
         <e-axis [majorTicks]='majorTicks' [minorTicks]='minorTicks' [labelStyle]='labelStyle' [line]="lineStyle">
           <e-pointers>
             <e-pointer value="13" markerType="Text" text="Low" color="black" offset="-35" [textStyle]="textStyle"></e-pointer>
             <e-pointer value="48" markerType="Text" text="Moderate" color="black" offset="-35" [textStyle]="textStyle"></e-pointer>
             <e-pointer value="83" markerType="Text" text="High" color="black" offset="-35" [textStyle]="textStyle"></e-pointer>
           </e-pointers>
           <e-ranges>
             <e-range start=0 end=30 color='#6FC78A' startWidth=50 endWidth=50 position='Outside'></e-range>
             <e-range start=30 end=65 color='#ECC85B' startWidth=50 endWidth=50 position='Outside'></e-range>
             <e-range start=65 end=100 color='#FB7D55' startWidth=50 endWidth=50 position='Outside'></e-range>
           </e-ranges>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`,
})
export class AppComponent {
  public majorTicks?: Object;
  public minorTicks?: Object;
  public labelStyle?: Object;
  public textStyle?: Object;
  public lineStyle?: Object;
  ngOnInit(): void {
    this.lineStyle = {
      width: 0,
    };
    this.majorTicks = {
      interval: 20,
      height: 7,
      width: 1,
      position: 'Outside',
    };
    this.minorTicks = {
      interval: 10,
      height: 3,
      position: 'Outside',
    };
    this.textStyle = {
      size: '18px',
      fontWeight: 'bold',
    };
    this.labelStyle = {
      position: 'Outside',
      font: { fontFamily: 'inherit' },
    };
  }
}
