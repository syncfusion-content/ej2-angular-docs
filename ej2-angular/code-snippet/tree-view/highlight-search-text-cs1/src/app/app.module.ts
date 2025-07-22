import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, MaskedTextBoxModule, TreeViewModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
