import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids';
import { EditService, ToolbarService, FilterService, SelectionService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        GridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, ToolbarService, PageService, FilterService, SelectionService]
})
export class AppModule { }

