import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageModule } from '@syncfusion/ej2-angular-notifications';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
