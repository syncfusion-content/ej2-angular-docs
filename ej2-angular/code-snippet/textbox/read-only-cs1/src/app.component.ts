import { ViewChild } from '@angular/core';
import { Component, AfterViewInit } from '@angular/core';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `<div class="wrap">
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                  <ejs-textbox #textbox readOnly="true" placeholder="Enter value" floatLabelType="Auto"></ejs-textbox>
              </div>
              <div class="row">
                <div class="col-xs-10 col-sm-10 col-lg-10 col-md-10">
                    <button ejs-button class="e-btn update_value" id='valuebtn'>Set value</button>
                    <button ejs-button class="e-btn remove_value" id='removebtn'>Remove value</button>
                  </div>
              </div>
            </div>`,
  standalone: true,
  imports: [ CommonModule, TextBoxModule]
})

export class AppComponent implements AfterViewInit {
  @ViewChild('textbox')
  public textboxObj!: TextBoxComponent;

  ngAfterViewInit(): void {
    (document.getElementById('valuebtn') as HTMLElement).onclick = () => {
      this.textboxObj.value = '10';
    };
    
    (document.getElementById('removebtn') as HTMLElement).onclick = () => {
      this.textboxObj.value = '';
    };
  }
}
