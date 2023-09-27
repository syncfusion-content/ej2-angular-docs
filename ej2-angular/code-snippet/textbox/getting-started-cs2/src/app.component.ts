


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <h4> Floating Label without required attribute </h4>
                  <div class="e-float-input e-input-group" [ngClass]="{'e-input-focus': tb1Focused}">
                      <input type="text" id="textBox1" [(ngModel)]="textboxValue"
                      #testTextBox1 (focus)="tb1Focused = true" (blur)="tb1Focused = false"/>
                      <span class="e-float-line"></span>
                      <label class="e-float-text" [ngClass]="{'e-label-top': textboxValue !== '' , 'e-label-bottom':  textboxValue == ''}" >Enter Name</label>
                  </div>
              </div>`
})

export class AppComponent {

  public textboxValue?: string;
  tb1Focused?: any;

  ngOnInit() {
    this.textboxValue = '';
  }
}



