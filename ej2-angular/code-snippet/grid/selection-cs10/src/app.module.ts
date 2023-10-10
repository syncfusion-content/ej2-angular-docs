import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids';
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        SwitchModule,
        DropDownListModule 
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, ToolbarService, PageService, FilterService]
})
export class AppModule { }

