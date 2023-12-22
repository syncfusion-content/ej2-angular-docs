import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, FilterService, PageService, GroupService} from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { MultiSelectModule, CheckBoxSelectionService, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [FilterService, PageService, GroupService, CheckBoxSelectionService]
})
export class AppModule { }
