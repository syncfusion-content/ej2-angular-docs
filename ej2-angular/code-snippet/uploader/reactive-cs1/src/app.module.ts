import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FieldErrorDisplayComponent } from './field-error-display.component';
/**
 * Module
 */
@NgModule({
  imports:      [ BrowserModule, FormsModule, DialogModule, UploaderModule, ButtonModule, ReactiveFormsModule ],
  declarations: [ AppComponent, FieldErrorDisplayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
