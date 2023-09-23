import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, FilterService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormsModule } from '@angular/forms';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DropDownListAllModule,
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                FilterService]
})
export class AppModule { }
