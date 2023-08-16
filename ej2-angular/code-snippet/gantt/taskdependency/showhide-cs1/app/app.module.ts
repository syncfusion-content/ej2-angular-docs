import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
  imports: [BrowserModule, GanttModule, SwitchModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
