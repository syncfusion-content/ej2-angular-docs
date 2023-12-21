import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, FilterService, PageService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { CheckBoxSelectionService, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DropDownListAllModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [FilterService, PageService, CheckBoxSelectionService]
})
export class AppModule { }
