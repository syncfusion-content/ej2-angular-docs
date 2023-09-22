import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule,PageService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
import { AppComponent } from './app.component';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        ButtonModule,
        TooltipModule,
        DropDownListAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService]

})
export class AppModule { }