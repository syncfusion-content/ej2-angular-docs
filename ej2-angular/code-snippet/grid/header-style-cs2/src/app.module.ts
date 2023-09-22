import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, PageService} from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DropDownListModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService]
})
export class AppModule { }
