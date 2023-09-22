import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule, CheckBoxModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule,
        ButtonModule,
        SwitchModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [FilterService, PageService,CheckBoxSelectionService]
})
export class AppModule { }
