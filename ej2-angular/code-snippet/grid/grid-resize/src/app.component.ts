import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ResizeService } from '@syncfusion/ej2-angular-grids'
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule,
        NumericTextBoxModule,
        ButtonModule
    ],

providers: [ResizeService],
standalone: true,
  selector: 'app-root',
  template: `
  <div style="display: flex">
    <div>
        <label style="padding: 30px 17px 0 0">Enter the width: </label>
        <ejs-numerictextbox #widthTextBox min='400' max='650' placeholder="400" step='5' width="120"></ejs-numerictextbox>
    </div>
    <div>
        <label style="padding: 30px 17px 0 0">Enter the height: </label>
        <ejs-numerictextbox #heightTextBox min='200' max='600' placeholder="200" step='5' width="120"></ejs-numerictextbox>
    </div>
    <button
      ejs-button
      style="margin:5px 0 5px 5px"
      id="resizeButton"
      cssClass="e-outline"
      (click)="onExternalResize()"
      >
        Resize
    </button>
  </div>  
  <div id="parent">
    <ejs-grid #grid style="padding: 5px 5px" [dataSource]='data' height='100%'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        <e-column field='Freight' headerText='Freight' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid')
  public grid?: GridComponent;
  @ViewChild('widthTextBox')
  public widthTextBox?: NumericTextBoxComponent;
  @ViewChild('heightTextBox')
  public heightTextBox?: NumericTextBoxComponent;

  ngOnInit(): void {
    this.data = data;
  }

  onExternalResize() {
    const parentDiv = document.getElementById('parent');
    (parentDiv as HTMLElement).style.width = (this.widthTextBox as NumericTextBoxComponent).element.value + 'px';
    (parentDiv as HTMLElement).style.height = (this.heightTextBox as NumericTextBoxComponent).element.value + 'px';
  }
}



