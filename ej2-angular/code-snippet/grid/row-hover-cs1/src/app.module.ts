import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DetailRowService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        SwitchModule        
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [DetailRowService]
})
export class AppModule { }